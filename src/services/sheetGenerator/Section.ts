import {Size} from './Size'

export default class Section {
    protected components: Section[] = []

    protected _size: Size|null = null;

    get size(): Size {
       return { height: 0, width: 0 };
    }

    get height(): number {
        return this.size.height
    }

    get width(): number {
        return this.size.width
    }
}
