

const beep = new Audio('/assets/audio/beep.mp3');

export default class Sound {

    public static beep(): void {
        beep.play()
    }

    public static warning(): void {
        const warning = new Audio('/assets/audio/warning.mp3');

        warning.play();
    }

}