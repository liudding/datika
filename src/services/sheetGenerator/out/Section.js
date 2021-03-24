define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Section = (function () {
        function Section() {
            this.components = [];
            this._size = null;
        }
        Object.defineProperty(Section.prototype, "size", {
            get: function () {
                return { height: 0, width: 0 };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Section.prototype, "height", {
            get: function () {
                return this.size.height;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Section.prototype, "width", {
            get: function () {
                return this.size.width;
            },
            enumerable: false,
            configurable: true
        });
        return Section;
    }());
    exports.default = Section;
});
