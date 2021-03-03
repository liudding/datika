/* eslint-disable*/

declare global {
  interface Window { gradeCamOnAPILoad: Function; gradecam: Object; }
}


type Event = 'scan' | 'issue' | 'validate';
// scan, scanIssue, pluginLoad

interface EventsBag {
  [key: string]: any
}

export default class GradeCam {

  sdkUrl: string = '/scanner/sdk/gcsdk_noui_6.5.1.3.js';

  private container: HTMLElement | string;
  private examLength: Number;
  private autoLength: boolean;

  private events: EventsBag = {};
  // private events: Array<Object> = [];

  private gradecam: any;

  private cameraRendered: boolean = false;
  private sdkLoaded: boolean = false;
  private pluginLoaded: boolean = false;

  private CAMERA_RENDERED_ID = 'gcplugin0';

  constructor(container: HTMLElement | string, examLength: Number, autoLength: boolean = true) {
    this.container = container;
    this.examLength = examLength;
    this.autoLength = autoLength;
  }


  async load() {
    if (this.checkFullyLoaded()) {
      this.loadEntity()
      return this
    };

    const loaded = await this.loadSdk();

    if (!loaded) {
      throw new Error();
    }

    return this;
  }

  async start() {
    await this.load();

    if (!this.checkCameraRendered()) {
      this.renderCamera();
    }

    this.gradecam.setMode({
      scan_mode: 'exam',
      exam_length: this.examLength,
      auto_length: this.autoLength,
      output_version: 1 // 所有 output_version 中，题目的 label 都不会被输出
    })

    this.gradecam.startCamera()
  }

  stop() {
    this.unbindEvents()
    this.gradecam.stopCamera()
  }


  pause() {
    for (const event in this.events) {
      this.events[event].bound = false;
      this.gradecam.unbind(event, this.events[event].callback)
    }
  }

  resume() {
    for (let event in this.events) {
      const cb = this.events[event].callback as Function;

      this.gradecam.bind(event, cb);
    }
  }

  onAsk(type: string, callback: Function) {
    this.gradecam.setValidateCallback(callback)
  }


  bind(event: Event, callback: Function): void {

    this.events[event] = {
      callback,
      bound: false
    };

    if (this.gradecam) {
      this.gradecam.bind(event, callback);

      this.events[event].bound = true;
    }
  }

  unbind(event: Event): void {
    delete this.events[event];

    this.gradecam && this.gradecam.unbind(event)
  }

  getCameraList() {
    return this.gradecam.getCameraList()
  }

  ready() {
    return this.gradecam;
  }

  setCamera(camera: string) {
    this.gradecam.setOptions({
      high_res: true,
      selected_camera: camera
    })

    this.gradecam.stopCamera();

    this.gradecam.startCamera()

  }


  private unbindEvents() {
    for (let event in this.events) {
      this.unbind(event as Event);
    }
  }


  public setSdkUrl(url: string): void {
    this.sdkUrl = url;
  }

  private async loadSdk() {
    if (this.checkFullyLoaded()) return true;

    return new Promise((resolve, reject) => {
      window.gradeCamOnAPILoad = (gradecam: object) => {

        this.gradecam = gradecam;

        this.sdkLoaded = true;

        this.resume();

        this.gradecam.setShowMessages(true)

        this.gradecam.bind('pluginLoad', () => {
          this.pluginLoaded = true;
          resolve(true)
        })

        this.renderCamera();
      }

      // TODO: 处理 error
      if (!this.checkSdkLoaded()) {
        this.loadScript();
      }
    });

  }

  private checkCameraRendered() {
    if (this.cameraRendered) return this.cameraRendered;

    const gc = document.getElementById(this.CAMERA_RENDERED_ID);

    if (gc) return true;

    return false;
  }

  private loadEntity(): void {
    this.gradecam = window.gradecam;
    this.sdkLoaded = true;
    this.resume();
  }

  private checkFullyLoaded(): boolean {
    return this.checkSdkLoaded();//&& this.pluginLoaded;
  }

  private checkSdkLoaded() {
    if (this.sdkLoaded) return this.sdkLoaded;

    if (window.gradecam) {
      return true;
    }

    return false;
  }

  private loadScript() {
    const head = document.getElementsByTagName('HEAD').item(0)
    const scriptElement = document.createElement('script')
    scriptElement.type = 'text/javascript'
    scriptElement.src = this.sdkUrl;

    head?.appendChild(scriptElement)
  }

  /**
   * 必须先 render camera，然后 sdk 才会去下载 plugin
   */
  private async renderCamera() {

    let container: HTMLElement | null;
    if (typeof this.container === 'string') {
      container = document.getElementById(this.container);
    } else {
      container = this.container;
    }

    if (!container) {
      throw new Error();
    }

    container.appendChild(this.gradecam.getElement())
    const gc = (document.getElementById(this.CAMERA_RENDERED_ID)) as HTMLElement;
    gc.style.backgroundImage = '';

    this.cameraRendered = true;
  }


}
