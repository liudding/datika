var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Section", "./Config", "./Bubble"], function (require, exports, Section_1, Config_1, Bubble_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BubbleGroup = (function (_super) {
        __extends(BubbleGroup, _super);
        function BubbleGroup(label, choices) {
            var _this = _super.call(this) || this;
            _this.bubbles = [];
            _this.label = label;
            _this.choices = choices;
            return _this;
        }
        Object.defineProperty(BubbleGroup.prototype, "choices", {
            set: function (choices) {
                var bubbles = [];
                for (var i = 0; i < choices.length; i++) {
                    var text = choices[i];
                    bubbles.push(new Bubble_1.default(text));
                }
                this.bubbles = bubbles;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleGroup.prototype, "size", {
            get: function () {
                if (this._size)
                    return this._size;
                var width = this.bubbles.reduce(function (acc, bubble) {
                    return acc + bubble.width;
                }, 0);
                width += (this.bubbles.length - 1) * this.gap + this.gap + this.labelWidth;
                this._size = {
                    width: width,
                    height: this.bubbles[0].height
                };
                return this.size;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleGroup.prototype, "bubbleRadius", {
            get: function () {
                return Config_1.default.BUBBLE_GROUP.BUBBLE_RADIUS;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleGroup.prototype, "gap", {
            get: function () {
                return Config_1.default.BUBBLE_GROUP.BUBBLE_GAP;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleGroup.prototype, "labelWidth", {
            get: function () {
                return Config_1.default.BUBBLE_GROUP.LABEL_WIDTH;
            },
            enumerable: false,
            configurable: true
        });
        return BubbleGroup;
    }(Section_1.default));
    exports.default = BubbleGroup;
});
