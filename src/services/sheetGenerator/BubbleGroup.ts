import {Size} from './Size'
import Section from './Section'
import Config from './Config'
import Bubble from './Bubble'


export default class BubbleGroup extends Section {

    public label: string;

    protected bubbles: Bubble[] = [];


    constructor(label: string, choices: string) {
        super();

        this.label = label;
        this.choices = choices;
    }

    set choices(choices: string) {
        const bubbles = [];
        for (let i = 0; i < choices.length; i++) {
            const text = choices[i];
            bubbles.push(new Bubble(text));
        }
        this.bubbles = bubbles;
    }

    get size(): Size {
        if (this._size) return this._size

        let width = this.bubbles.reduce((acc, bubble) => {
            return acc + bubble.width
        }, 0)

        width += (this.bubbles.length - 1) * this.gap + this.gap + this.labelWidth;

        this._size = {
            width,
            height: this.bubbles[0].height
        }

        return this.size
    }

    get bubbleRadius(): number {
        return Config.BUBBLE_GROUP.BUBBLE_RADIUS
    }

    get gap(): number {
        return Config.BUBBLE_GROUP.BUBBLE_GAP
    }

    get labelWidth(): number {
        return Config.BUBBLE_GROUP.LABEL_WIDTH
    }

}
