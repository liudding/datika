import { TextToSpeech } from '@capacitor-community/text-to-speech';

let voice = -1;

async function findLocaleVoice() {
    if (voice >= 0) {
        return voice;
    }

    const result = await TextToSpeech.getSupportedVoices();

    const lang = 'zh-CN' ;

    voice = result.voices.findIndex((i: any) => {
        return i.lang.indexOf(lang) >= 0;
    })

    if (voice < 0) {
        voice = result.voices.findIndex((i: any) => i.default);
    }


    return voice;
}

/**
 * 只有在用户有交互动作之后，才能有效
 * @param text 
 */
export async function speak(text: string) {

    const voice = await findLocaleVoice();

    await TextToSpeech.speak({
        text: text,
        locale: 'zh-CN',
        speechRate: 1,
        pitchRate: 1,
        voice: voice,
        volume: 1.0,
        category: 'ambient',
    });
}