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
define(["require", "exports", "./Section", "./Config"], function (require, exports, Section_1, Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BubbleSection = (function (_super) {
        __extends(BubbleSection, _super);
        function BubbleSection(groups) {
            var _this = _super.call(this) || this;
            _this.groups = [];
            _this._bubbles = 0;
            _this.groups = groups;
            return _this;
        }
        Object.defineProperty(BubbleSection.prototype, "bubbles", {
            get: function () {
                var _this = this;
                if (this._bubbles)
                    return this._bubbles;
                this.groups.forEach(function (item) {
                    _this._bubbles = Math.max(_this._bubbles, item.bubbles.length);
                });
                return this._bubbles;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleSection.prototype, "size", {
            get: function () {
                if (!this._size) {
                    var width_1 = 0, height_1 = 0;
                    this.groups.forEach(function (item) {
                        width_1 = Math.max(width_1, item.width);
                        height_1 += item.height;
                    });
                    height_1 += this.gap * (this.groups.length - 1) + this.paddingY * 2;
                    width_1 += Config_1.default.BUBBLE_SECTION.PADDING_LEFT + Config_1.default.BUBBLE_SECTION.PADDING_RIGHT;
                    this._size = {
                        width: width_1,
                        height: height_1
                    };
                }
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleSection.prototype, "gap", {
            get: function () {
                return Config_1.default.BUBBLE_SECTION.GROUP_GAP;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleSection.prototype, "paddingX", {
            get: function () {
                return Config_1.default.BUBBLE_SECTION.PADDING_X;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BubbleSection.prototype, "paddingY", {
            get: function () {
                return Config_1.default.BUBBLE_SECTION.PADDING_Y;
            },
            enumerable: false,
            configurable: true
        });
        return BubbleSection;
    }(Section_1.default));
    exports.default = BubbleSection;
});
