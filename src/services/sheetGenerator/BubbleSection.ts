import {Size} from './Size'
import Section from './Section'
import Config from './Config'
import BubbleGroup from './BubbleGroup';


export default class BubbleSection extends Section {

    public groups: BubbleGroup[] = [];

    private _bubbles = 0;

    constructor(groups: BubbleGroup[]) {
        super();

        this.groups = groups
    }


    get bubbles(): number {
        if (this._bubbles) return this._bubbles;

        this.groups.forEach(item => {
            this._bubbles = Math.max(this._bubbles, item.bubbles.length)
        })

        return this._bubbles;
    }

    get size(): Size {
        if (!this._size) {
            let width = 0, height = 0;

            this.groups.forEach(item => {
                width = Math.max(width, item.width)
                height += item.height
            })

            height += this.gap * (this.groups.length - 1) + this.paddingY * 2;
            width += this.paddingX * 2;

            this._size = {
                width,
                height
            }
        }

        return this._size
    }

    get gap(): number {
        return Config.BUBBLE_SECTION.GROUP_GAP;
    }

    get paddingX(): number {
        return Config.BUBBLE_SECTION.PADDING_X;
    }

    get paddingY(): number {
        return Config.BUBBLE_SECTION.PADDING_Y;
    }
}

