import Form from './Form'
import BubbleGroup from './BubbleGroup';
import BubbleSection from './BubbleSection';
import NumberSection from './NumberSection';



export default class Renderer {
    protected form: Form;


    protected canvas: HTMLElement;

    constructor(form: Form) {
        this.form = form

        this.canvas = this.createCanvas();
    }

    createCanvas(): HTMLElement {
        const htmlString = `
        <div id="form-container" style="user-select: none; padding: 16px;background: white;">
            <div class="header" style="position: relative;width: 100%;"></div>
            <div class="box" style="width:${this.form.width}px;min-width:${this.form.width}px;height:${this.form.height}px;min-height:${this.form.height}px;border: ${this.form.border}px solid black;position: relative;">
                <div class="number" id="number" style="position: absolute; right: 0;top: 0;display: flex;border-left: 9px solid black;border-bottom: 9px solid black;"></div>
                <div id="bubbles" class="bubbles"></div>
            </div>
        </div>`;

        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        return div.firstChild as HTMLElement;
    }

    makeGroup(group: BubbleGroup) {
        let ele = `<div class="group" style="grid-column-gap:${group.gap}px;"><div class="label" style="width:${group.labelWidth}px;">${group.label}</div>`
        for (let index = 0; index < group.choices.length; index++) {
            ele += this.makeBubble(group.choices[index], group.bubbleRadius);
        }

        ele += ' </div>'

        return ele;
    }

    makeBubble(text: string, radius: number, border = 8) {
        const lineHeight = this.form.bubbleRadius - border * 2;
        return `<div class="bubble" style="height:${radius}px;width: ${radius}px;border: ${border}px solid black;box-sizing: border-box; line-height:${lineHeight};">${text}</div>`
    }

    makeSection(section: BubbleSection, x: number, y = 0) {
        let ele = `<div class="section" style="left:${x}px; top: ${y}px;grid-row-gap:${section.gap}px; padding:${section.paddingY}px ${section.paddingX}px;">`
        for (let index = 0; index < section.groups.length; index++) {
            ele += this.makeGroup(section.groups[index])

        }
        ele += ' </div>'

        return ele;
    }

    makeNumberGroup(number: NumberSection) {
        let ele = `<div class="number-group" style="grid-row-gap:${number.columnGap}px;padding: ${number.columnPaddingY}px ${number.columnPaddingX}px;">`;

        for (let i = 0; i < 10; i++) {
            ele += this.makeBubble(i + '', this.form.bubbleRadius);
        }

        ele += '</div>';

        return ele;
    }

    drawNumber() {
        if (!this.form.numberSection) {
            return;
        }

        let html = '';
        for (let i = 0; i < this.form.numberSection.digits; i++) {
            const numberHtml = this.makeNumberGroup(this.form.numberSection)

            html += numberHtml;
        }

        const number = this.canvas.getElementsByClassName('number')[0]
        number.innerHTML = html

        this.drawNumberGrid()
    }

    drawNumberGrid() {
        if (!this.form.numberSection) {
            return;
        }

        let html = '<div class="number-grid" style="right: 12px;">'
        for (let i = 0; i < this.form.numberSection.digits; i++) {
            const width = this.form.bubbleRadius + this.form.numberSection.columnPaddingX * 2
            const height = 90;
            html += `<div class="item" style="width:${width}px;height:${height}px;"></div>`
        }
        html += '</div>'

        const header = this.canvas.getElementsByClassName('header')[0]
        header.innerHTML = html
    }


    render() {
      
        let x = 0, y = 0;
        let html = ''


        const sections = this.form.bubbleSections;

        for (let index = 0; index < sections.length; index++) {
            const section = sections[index];

            const sectionHtml = this.makeSection(section, x, y)
            html += sectionHtml;

            x += section.width
        }

        if (this.form.subBubbleSections && this.form.numberSection) {
            for (let index = 0; index < this.form.subBubbleSections.length; index++) {
                const section = this.form.subBubbleSections[index];

                y = this.form.numberSection.height
                const sectionHtml = this.makeSection(section, x, y)
                html += sectionHtml;

                x += section.width
            }
        }

        const bubbles = this.canvas.getElementsByClassName('bubbles')[0]
        bubbles.innerHTML = html


        if (this.form.numberSection) {
            this.drawNumber()
        }

        return this.canvas;
    }
}

