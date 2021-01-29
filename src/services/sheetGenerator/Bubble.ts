import {Size} from './Size'
import Section from './Section'
import Config from './Config'


export default class Bubble extends Section {

    public text: string;

    constructor(text: string) {
        super();

        this.text = text;
    }

    get size(): Size {
        return {
            height: Config.BUBBLE.HEIGHT,
            width: Config.BUBBLE.WIDTH
        }
    }
}
