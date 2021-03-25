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
    var NumberSection = (function (_super) {
        __extends(NumberSection, _super);
        function NumberSection(digits) {
            var _this = _super.call(this) || this;
            _this.digits = 6;
            _this.bubbles = [];
            _this.digits = digits;
            return _this;
        }
        Object.defineProperty(NumberSection.prototype, "size", {
            get: function () {
                if (this._size)
                    return this._size;
                var width = this.digits * Config_1.default.BUBBLE.RADIUS +
                    this.digits * 2 * Config_1.default.NUMBER_SECTION.COLUMN_PADDING_X +
                    Config_1.default.NUMBER_SECTION.BORDER_WIDTH +
                    this.digits * 2 * Config_1.default.NUMBER_SECTION.COLUMN_BORDER_WIDTH +
                    Config_1.default.NUMBER_SECTION.PADDING_LEFT + Config_1.default.NUMBER_SECTION.PADDING_RIGHT + Config_1.default.NUMBER_SECTION.MARGIN_LEFT
                    + 9 * this.columnGap;
                var height = 10 * Config_1.default.BUBBLE.RADIUS +
                    this.columnPaddingY * 2 +
                    Config_1.default.NUMBER_SECTION.BORDER_WIDTH +
                    Config_1.default.NUMBER_SECTION.PADDING_BOTTOM +
                    Config_1.default.NUMBER_SECTION.MARGIN_BOTTOM;
                this._size = {
                    width: width,
                    height: height
                };
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NumberSection.prototype, "columnGap", {
            get: function () {
                return Config_1.default.NUMBER_SECTION.COLUMN_GAP;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NumberSection.prototype, "columnPaddingY", {
            get: function () {
                return Config_1.default.NUMBER_SECTION.COLUMN_PADDING_Y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NumberSection.prototype, "columnPaddingX", {
            get: function () {
                return Config_1.default.NUMBER_SECTION.COLUMN_PADDING_X;
            },
            enumerable: false,
            configurable: true
        });
        return NumberSection;
    }(Section_1.default));
    exports.default = NumberSection;
});