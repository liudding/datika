define(["require", "exports", "./Config"], function (require, exports, Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Renderer = (function () {
        function Renderer(form) {
            this.form = form;
            this.canvas = this.createCanvas();
        }
        Renderer.prototype.createCanvas = function () {
            var htmlString = "\n        <div id=\"form-container\" style=\"user-select: none; padding: 16px;background: white;\">\n            <div class=\"header\" style=\"position: relative;width: 100%; margin-bottom: 16px;\">\n\n            </div>\n            <div class=\"box\" style=\"width:" + this.form.width + "px;min-width:" + this.form.width + "px;height:" + this.form.height + "px;min-height:" + this.form.height + "px;border: " + this.form.border + "px solid black;position: relative;\">\n                <div class=\"number\" id=\"number\" style=\"position: absolute; right: 0;top: 0;border-left: 9px solid black;border-bottom: 9px solid black; padding: " + Config_1.default.NUMBER_SECTION.PADDING_TOP + "px " + Config_1.default.NUMBER_SECTION.PADDING_RIGHT + "px " + Config_1.default.NUMBER_SECTION.PADDING_BOTTOM + "px " + Config_1.default.NUMBER_SECTION.PADDING_LEFT + "px; margin-bottom: " + Config_1.default.NUMBER_SECTION.MARGIN_BOTTOM + "px\"></div>\n                <div id=\"bubbles\" class=\"bubbles\"></div>\n            </div>\n        </div>";
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        };
        Renderer.prototype.makeGroup = function (group, section) {
            var ele = "<div class=\"group\" style=\"grid-column-gap:" + group.gap + "px;\"><div class=\"label\" style=\"width:" + group.labelWidth + "px;\">" + group.label + "</div>";
            for (var index = 0; index < section.bubbles; index++) {
                var bubble = group.bubbles[index];
                if (bubble) {
                    ele += this.makeBubble(bubble.text, group.bubbleRadius);
                }
                else {
                    ele += this.makeBubble('', group.bubbleRadius, 8, true);
                }
            }
            ele += ' </div>';
            return ele;
        };
        Renderer.prototype.makeBubble = function (text, radius, border, placeholder) {
            if (border === void 0) { border = 8; }
            if (placeholder === void 0) { placeholder = false; }
            var lineHeight = this.form.bubbleRadius - border * 2;
            return "<div class=\"bubble " + (placeholder ? 'placeholder' : '') + "\" style=\"height:" + radius + "px;width: " + radius + "px;border: " + border + "px solid black;box-sizing: border-box; line-height:" + lineHeight + "px;\">" + text + "</div>";
        };
        Renderer.prototype.makeSection = function (section, x, y) {
            if (y === void 0) { y = 0; }
            var ele = "<div class=\"section\" style=\"left:" + x + "px; top: " + y + "px;grid-row-gap:" + section.gap + "px; padding:" + Config_1.default.BUBBLE_SECTION.PADDING_TOP + "px " + Config_1.default.BUBBLE_SECTION.PADDING_RIGHT + "px " + Config_1.default.BUBBLE_SECTION.PADDING_BOTTOM + "px " + Config_1.default.BUBBLE_SECTION.PADDING_LEFT + "px;\">";
            for (var index = 0; index < section.groups.length; index++) {
                ele += this.makeGroup(section.groups[index], section);
            }
            ele += ' </div>';
            return ele;
        };
        Renderer.prototype.makeNumberGroup = function (number) {
            var ele = "<div class=\"number-group\" style=\"grid-row-gap:" + number.columnGap + "px;padding: " + number.columnPaddingY + "px " + number.columnPaddingX + "px;\">";
            for (var i = 0; i < 10; i++) {
                ele += this.makeBubble(i + '', this.form.bubbleRadius);
            }
            ele += '</div>';
            return ele;
        };
        Renderer.prototype.drawNumber = function () {
            if (!this.form.numberSection) {
                return;
            }
            var html = '';
            for (var i = 0; i < this.form.numberSection.digits; i++) {
                var numberHtml = this.makeNumberGroup(this.form.numberSection);
                html += numberHtml;
            }
            var number = this.canvas.getElementsByClassName('number')[0];
            number.innerHTML = html;
        };
        Renderer.prototype.drawHeader = function () {
            var html = this.drawInput();
            html += this.drawNumberGrid();
            var header = this.canvas.getElementsByClassName('header')[0];
            header.innerHTML = html;
        };
        Renderer.prototype.drawNumberGrid = function () {
            if (!this.form.numberSection) {
                return '';
            }
            var html = '<div class="number-grid" style="right: 12px;">';
            for (var i = 0; i < this.form.numberSection.digits; i++) {
                var width = this.form.bubbleRadius + this.form.numberSection.columnPaddingX * 2;
                var height = 90;
                html += "<div class=\"item\" style=\"width:" + width + "px;height:" + height + "px;\"></div>";
            }
            html += '</div>';
            return html;
        };
        Renderer.prototype.drawInput = function () {
            if (!this.form.numberSection) {
                return '';
            }
            var html = '<div class="name-input">姓名: __________';
            html += '</div>';
            return html;
        };
        Renderer.prototype.render = function () {
            var x = 0, y = 0;
            var html = '';
            var sections = this.form.bubbleSections;
            for (var index = 0; index < sections.length; index++) {
                var section = sections[index];
                var sectionHtml = this.makeSection(section, x, y);
                html += sectionHtml;
                x += section.width;
            }
            if (this.form.subBubbleSections && this.form.numberSection) {
                for (var index = 0; index < this.form.subBubbleSections.length; index++) {
                    var section = this.form.subBubbleSections[index];
                    y = this.form.numberSection.height;
                    var sectionHtml = this.makeSection(section, x, y);
                    html += sectionHtml;
                    x += section.width;
                }
            }
            var bubbles = this.canvas.getElementsByClassName('bubbles')[0];
            bubbles.innerHTML = html;
            if (this.form.numberSection) {
                this.drawNumber();
            }
            this.drawHeader();
            return this.canvas;
        };
        return Renderer;
    }());
    exports.default = Renderer;
});
