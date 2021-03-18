import { TextToSpeech } from '@capacitor-community/text-to-speech';

async function findLocaleVoice() {
    const result = await TextToSpeech.getSupportedVoices();

    return result.voices.findIndex((i: any) => i.lang.indexOf(navigator.language) >= 0)
}

export async function speak(text: string) {

    const voice = await findLocaleVoice();

    await TextToSpeech.speak({
        text: text,
        locale: 'zh_CN',
        speechRate: 1.0,
        pitchRate: 1.0,
        voice: voice,
        volume: 1.0,
        category: 'ambient',
    });
}