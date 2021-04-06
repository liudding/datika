type Event = 'scan' | 'scanIssue' | 'validate';

export interface ScanDriver {
  start(force: boolean): Promise<any>;
  stop(): Promise<any>;
  pause(): Promise<any>;
  resume(): Promise<any>;
  bind(event: Event, callback: any): void;
  unbind(event: Event): void;
  ready(): Promise<any>;
  onAsk(callback: any): void;

  getCameraList(): Promise<any>;
  setCamera(camera: string): void;
}

import GradecamDriver from './GradecamDriver';

export default class Scanner {

  private container: HTMLElement|string;
  private examLength: number;
  private autoLength: boolean;

  private currentDriver: ScanDriver|null = null;

  constructor(container: HTMLElement|string, examLength: number, autoLength: boolean) {
    this.container = container;
    this.examLength = examLength;
    this.autoLength = autoLength;
  }

  async start(force=false): Promise<any> {
    return this.driver().start(force);
  }

  async stop(): Promise<any> {
    return this.driver().stop();
  }

  async pause(): Promise<any> {
    return this.driver().pause();
  }

  async resume(): Promise<any> {
    return this.driver().resume();
  }

  
  bind(event: Event, callback: any): void {
    return this.driver().bind(event, callback);
  }

  unbind(event: Event): void {
    return this.driver().unbind(event);
  }

  onAsk(cb: any): void {
    return this.driver().onAsk(cb);
  }

  getCameraList(): Promise<any> {
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
    return (new GradecamDriver(this.container, this.examLength, this.autoLength)) as ScanDriver;
  }
}

