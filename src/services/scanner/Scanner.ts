type Event = 'scan' | 'issue' | 'validate';

interface ScanDriver {
  start: Function;
  stop: Function;
  pause: Function;
  resume: Function;
  bind: Function;
  unbind: Function;
  ready: Function;

  getCameraList: Function;
  setCamera: Function;
}

import GradecamDriver from './GradecamDriver';

export default class Scanner {

  private container: HTMLElement|string;
  private examLength: number;
  private autoLength: boolean;

  private events: object = {};

  private currentDriver: ScanDriver|null = null;

  constructor(container: HTMLElement|string, examLength: number, autoLength: boolean) {
    this.container = container;
    this.examLength = examLength;
    this.autoLength = autoLength;
  }

  async start(force=false) {
    return this.driver().start(force);
  }

  async stop() {
    return this.driver().stop();
  }

  pause() {
    return this.driver().pause();
  }

  resume() {
    return this.driver().resume();
  }

  
  bind(event: Event, callback: Function) {
    return this.driver().bind(event, callback);
  }

  unbind() {
    return this.driver().unbind();
  }

  getCameraList() {
    return this.driver().getCameraList();
  }

  setCamera(camera: string) {
    return this.driver().setCamera(camera);    
  }

  ready() {
    return this.driver().ready();
  }


  driver(name: string|null = null): ScanDriver {
    if (this.currentDriver) {
      return this.currentDriver;
    }

    if (!name) {
      this.currentDriver = this.createDefaultDriver();
    }

    return this.currentDriver as ScanDriver;
  }

  createDefaultDriver() {
    return new GradecamDriver(this.container, this.examLength, this.autoLength);
  }
}

