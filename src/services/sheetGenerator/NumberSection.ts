import { Size } from './Size'
import Section from './Section'
import Config from './Config'
import Bubble from './Bubble';


export default class NumberSection extends Section {

    public digits = 6;

    protected bubbles: Bubble[] = [];

    constructor(digits: number) {
        super();

        this.digits = digits
    }

    get size(): Size {
        if (this._size) return this._size;

        const width = this.digits * Config.BUBBLE.RADIUS +
            this.digits * 2 * Config.NUMBER_SECTION.COLUMN_PADDING_X +
            Config.NUMBER_SECTION.BORDER_WIDTH +
            this.digits * 2 * Config.NUMBER_SECTION.COLUMN_BORDER_WIDTH +
            Config.NUMBER_SECTION.PADDING_LEFT + Config.NUMBER_SECTION.PADDING_RIGHT + Config.NUMBER_SECTION.MARGIN_LEFT
            + 9 * this.columnGap;

        const height = 10 * Config.BUBBLE.RADIUS +
            this.columnPaddingY * 2 +
            Config.NUMBER_SECTION.BORDER_WIDTH +
            Config.NUMBER_SECTION.PADDING_BOTTOM +
            Config.NUMBER_SECTION.MARGIN_BOTTOM

        this._size = {
            width,
            height
        }
        return this._size;
    }

    get columnGap(): number {
        return Config.NUMBER_SECTION.COLUMN_GAP
    }

    get columnPaddingY(): number {
        return Config.NUMBER_SECTION.COLUMN_PADDING_Y;
    }


    get columnPaddingX(): number {
        return Config.NUMBER_SECTION.COLUMN_PADDING_X;
    }



}
