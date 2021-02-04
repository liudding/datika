import { Size } from './Size'
import Section from './Section'
import Config from './Config'
import BubbleGroup from './BubbleGroup';
import Bubble from './Bubble';
import NumberSection from './NumberSection';
import BubbleSection from './BubbleSection';



export default class Form extends Section {
    gap = 16;
    padding = 100;
    bubbleRadius = 75;
    maxWidth = 2500;
    maxHeight = 3600;

    protected groups: BubbleGroup[] = []

    public numberSection: NumberSection | null = null;

    public bubbleSections: BubbleSection[] = [];
    public subBubbleSections: BubbleSection[]|null = null;

    public static make(data: any, digits=0) {
        const groups: BubbleGroup[] = [];
        for (const group of data) {
            groups.push(new BubbleGroup(group.label, group.choices));
        }

        const form = new Form();
        form.setGroups(groups);

        if (digits > 0) {
            form.setNumber(new NumberSection(digits));
        }

        return form;
    }

    findBestLayout() {
        const layouts = this.findPossibleLayouts(this.groups)

        let theLayout;
        let minLayoutHeight = Number.MAX_VALUE;

        for (const layout of layouts) {

            if (layout.height < minLayoutHeight) {
                minLayoutHeight = layout.height;
                theLayout = layout;
            }
        }

        if (!theLayout) {
            return;
        }

        this.bubbleSections = theLayout.sections;
        this.subBubbleSections = theLayout.subSections as BubbleSection[] | null;
    }

    divideSections(groups: BubbleGroup[], max: number) {
        max = max || groups.length

        function chunk(arr: any[], size: number) {
            const chunks: any[] = [];

            arr.forEach((item: any) => {
                if (chunks.length === 0) {
                    chunks.push([])
                }
                const lastChunk = chunks[chunks.length -1];

                if (lastChunk.length === size) {
                    chunks.push([item]);
                } else {
                    lastChunk.push(item);
                }
            })

            return chunks
        }

        const s = chunk(groups, max)

        return s.map((item: BubbleGroup[]) => {
            return new BubbleSection(item)
        })
    }


    checkInSuitableInBlock(sections: BubbleSection[], block: any) {
        if (sections.length === 0) return false

        let totalWidth = 0;
        let totalHeight = 0;
        for (const section of sections) {
            totalWidth += section.width;
            totalHeight = Math.max(totalHeight, section.height);
        }


        if (sections.length > 1 && block.minHeight) { // 优先填满最低高度
            const firstGroupOfSecondSection = sections[1].groups[0];
            if (sections[0].height + firstGroupOfSecondSection.height < block.minHeight) {
                // 未填满第一列的最低高度
                return false;
            }
        }

        if (block.height < sections[0].height) return false;

        if (totalWidth > block.width || totalHeight > block.height) {
            return false;
        }

        return true;
    }

    checkIsSuitable(sections: BubbleSection[], sub = false) {

        const blocks = this.getBubbleBlocks(sections);
        const mainBlock = blocks[0];

        // 暂时只允许学号栏下面放置一列
        if (!sub) {
            return this.checkInSuitableInBlock(sections, mainBlock);
        } else if (blocks.length > 1) {
            return this.checkInSuitableInBlock(sections.slice(0, -1), mainBlock) && this.checkInSuitableInBlock(sections.slice(-1), blocks[1]);
        }

        return false;
    }

    findPossibleLayouts(groups: BubbleGroup[]) {

        let maxGroupsPerSection = 1;

        const possibleLayouts = [];

        while (maxGroupsPerSection <= groups.length) {

            const sections = this.divideSections(groups, maxGroupsPerSection);

            if (this.checkIsSuitable(sections)) {
                const height = sections.reduce((acc, section) => {
                    return Math.max(acc, section.height)
                }, 0)

                const width = sections.reduce((acc, section) => {
                    return acc + section.width
                }, 0)

                possibleLayouts.push({
                    height: height,
                    width,
                    sections: sections,
                })
            }

            if (this.checkIsSuitable(sections, true)) {
                const height = sections.reduce((acc, section) => {
                    return Math.max(acc, section.height)
                }, 0)

                const width = sections.reduce((acc, section) => {
                    return acc + section.width
                }, 0)

                possibleLayouts.push({
                    height: height,
                    width,
                    sections: sections.slice(0, -1),
                    subSections: sections.slice(-1)
                })
            }

            maxGroupsPerSection++;
        }

        return possibleLayouts
    }


    getBubbleBlocks(sections: BubbleSection[]) {
        const hasNumber = !!this.numberSection;
        if (!hasNumber) {
            return [{
                width: this.maxWidth,
                height: this.maxHeight,
                minHeight: Config.BUBBLE_BLOCK_MIN_HEIGHT
            }];
        }

        const numberSection = this.numberSection as NumberSection;

        const numberSize = numberSection.size;

        // const lastSection = sections[sections.length - 1];

        const mainHeight = sections[0].height
        const mainWidth = sections.reduce((acc, section) => {
            return acc + section.width
        }, 0)

        // console.log('aaa', sections, mainHeight, mainHeight - numberSize.height)
        return [{
            width: this.maxWidth - numberSize.width,
            height: this.maxHeight,
            minHeight: numberSize.height
        }, {
            width: this.maxWidth - mainWidth,
            height: mainHeight - numberSize.height
        }]


        // if (sections.length === 1 || lastSection.groups.length < 4) {
        //     return [{
        //         width: this.maxWidth - numberSize.width,
        //         height: this.maxHeight,
        //         minHeight: numberSize.height
        //     }];
        // }




        // const subWidth = this.maxWidth - mainWidth ;
        // const subHeight =  mainHeight - numberSize.height

        // if (subWidth < lastSection.width() || subHeight < lastSection.height()) {
        //     return [{
        //         width: this.maxWidth - numberSize.width,
        //         height: this.maxHeight,
        //         minHeight: numberSize.height
        //     }];
        // }


        // return [{
        //     width: this.maxWidth - numberSize.width,
        //     height: this.maxHeight,
        //     minHeight: numberSize.height
        // }, {
        //     width: this.maxWidth - mainWidth ,
        //     height: mainHeight - numberSize.height
        // }]
    }


    get sections(): Section[] {
        const s = this.bubbleSections.concat() as Section[];
        if (this.numberSection) {
            s.push(this.numberSection)
        }

        return s;
    }

    setGroups(groups: BubbleGroup[]) {
        this.groups = groups
    }

    setNumber(number: NumberSection) {
        this.numberSection = number;
    }

    get size(): Size {
        if (this._size) return this._size

        const { height, width } = this.sections.reduce((acc, section) => {
            acc.height = Math.max(acc.height, section.height)
            acc.width += section.width
            return acc
        }, {width: 0, height: 0});

        this._size = { height, width } as Size;

        return this._size
    }

    get border(): number {
        return Config.BORDER_WIDTH
    }
}

