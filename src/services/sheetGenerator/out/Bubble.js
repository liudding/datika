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
    var Bubble = (function (_super) {
        __extends(Bubble, _super);
        function Bubble(text) {
            var _this = _super.call(this) || this;
            _this.text = text;
            return _this;
        }
        Object.defineProperty(Bubble.prototype, "size", {
            get: function () {
                return {
                    height: Config_1.default.BUBBLE.HEIGHT,
                    width: Config_1.default.BUBBLE.WIDTH
                };
            },
            enumerable: false,
            configurable: true
        });
        return Bubble;
    }(Section_1.default));
    exports.default = Bubble;
});
