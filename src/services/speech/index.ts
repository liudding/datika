
export function canSpeak() {
    return !!window.speechSynthesis;
}

const synth = window.speechSynthesis;


function findLocaleVoice() {
    return synth.getVoices().filter(i => i.lang.indexOf(navigator.language) >= 0)[0]
}

export function speak(text: string) {
    if (!canSpeak()) return;

    const utter = new SpeechSynthesisUtterance(text);

    utter.voice = findLocaleVoice();

    synth.speak(utter);
}