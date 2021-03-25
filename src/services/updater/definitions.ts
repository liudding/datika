export interface Updater {
    download(): Promise<any>;
    install(): Promise<any>;
    apply(): Promise<any>;
}