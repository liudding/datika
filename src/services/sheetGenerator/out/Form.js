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
define(["require", "exports", "./Section", "./Config", "./BubbleGroup", "./NumberSection", "./BubbleSection"], function (require, exports, Section_1, Config_1, BubbleGroup_1, NumberSection_1, BubbleSection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gap = 16;
            _this.padding = 100;
            _this.bubbleRadius = 75;
            _this.maxWidth = 2500;
            _this.maxHeight = 3600;
            _this.groups = [];
            _this.numberSection = null;
            _this.bubbleSections = [];
            _this.subBubbleSections = null;
            return _this;
        }
        Form.make = function (data, digits) {
            if (digits === void 0) { digits = 0; }
            var groups = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var group = data_1[_i];
                groups.push(new BubbleGroup_1.default(group.label, group.choices));
            }
            var form = new Form();
            form.setGroups(groups);
            if (digits > 0) {
                form.setNumber(new NumberSection_1.default(digits));
            }
            return form;
        };
        Form.prototype.findBestLayout = function () {
            var layouts = this.findPossibleLayouts(this.groups);
            var theLayout;
            var minLayoutHeight = Number.MAX_VALUE;
            for (var _i = 0, layouts_1 = layouts; _i < layouts_1.length; _i++) {
                var layout = layouts_1[_i];
                if (layout.height / layout.width < 1.1) {
                    continue;
                }
                if (layout.height < minLayoutHeight) {
                    minLayoutHeight = layout.height;
                    theLayout = layout;
                }
            }
            if (!theLayout) {
                return;
            }
            this.bubbleSections = theLayout.sections;
            this.subBubbleSections = theLayout.subSections;
        };
        Form.prototype.divideSections = function (groups, max) {
            max = max || groups.length;
            function chunk(arr, size) {
                if (size >= arr.length) {
                    return [arr];
                }
                var chunks = [];
                arr.forEach(function (item) {
                    if (chunks.length === 0) {
                        chunks.push([]);
                    }
                    var lastChunk = chunks[chunks.length - 1];
                    if (lastChunk.length === size) {
                        chunks.push([item]);
                    }
                    else {
                        lastChunk.push(item);
                    }
                });
                return chunks;
            }
            var s = chunk(groups, max);
            return s.map(function (item) {
                return new BubbleSection_1.default(item);
            });
        };
        Form.prototype.checkInSuitableInBlock = function (sections, block) {
            if (sections.length === 0)
                return false;
            var totalWidth = 0;
            var totalHeight = 0;
            for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
                var section = sections_1[_i];
                totalWidth += section.width;
                totalHeight = Math.max(totalHeight, section.height);
            }
            if (sections.length > 1 && block.minHeight) {
                var firstGroupOfSecondSection = sections[1].groups[0];
                if (sections[0].height + firstGroupOfSecondSection.height < block.minHeight) {
                    return false;
                }
            }
            if (block.height < sections[0].height)
                return false;
            if (totalWidth > block.width || totalHeight > block.height) {
                return false;
            }
            return true;
        };
        Form.prototype.checkIsSuitable = function (sections, sub) {
            if (sub === void 0) { sub = false; }
            var blocks = this.getBubbleBlocks(sections);
            var mainBlock = blocks[0];
            var lastSection = sections[sections.length - 1];
            if (lastSection.groups.length < 5)
                return false;
            if (!sub) {
                return this.checkInSuitableInBlock(sections, mainBlock);
            }
            else if (blocks.length > 1) {
                return this.checkInSuitableInBlock(sections.slice(0, -1), mainBlock) && this.checkInSuitableInBlock(sections.slice(-1), blocks[1]);
            }
            return false;
        };
        Form.prototype.findPossibleLayouts = function (groups) {
            var groupsInFirstSection = groups.length <= 12 ? 12 : 1;
            var maxGroupsPerSection = Math.min(groupsInFirstSection, groups.length);
            var possibleLayouts = [];
            while (maxGroupsPerSection <= groups.length) {
                var sections = this.divideSections(groups, maxGroupsPerSection);
                if (this.checkIsSuitable(sections)) {
                    var height = sections.reduce(function (acc, section) {
                        return Math.max(acc, section.height);
                    }, 0);
                    var width = sections.reduce(function (acc, section) {
                        return acc + section.width;
                    }, 0);
                    possibleLayouts.push({
                        height: height,
                        width: width,
                        sections: sections,
                    });
                }
                if (this.checkIsSuitable(sections, true)) {
                    var height = sections.reduce(function (acc, section) {
                        return Math.max(acc, section.height);
                    }, 0);
                    var width = sections.reduce(function (acc, section) {
                        return acc + section.width;
                    }, 0);
                    possibleLayouts.push({
                        height: height,
                        width: width,
                        sections: sections.slice(0, -1),
                        subSections: sections.slice(-1)
                    });
                }
                maxGroupsPerSection++;
            }
            return possibleLayouts;
        };
        Form.prototype.getBubbleBlocks = function (sections) {
            var hasNumber = !!this.numberSection;
            if (!hasNumber) {
                return [{
                        width: this.maxWidth,
                        height: this.maxHeight,
                        minHeight: Config_1.default.BUBBLE_BLOCK_MIN_HEIGHT
                    }];
            }
            var numberSection = this.numberSection;
            var numberSize = numberSection.size;
            var mainHeight = sections[0].height;
            var mainWidth = sections.reduce(function (acc, section) {
                return acc + section.width;
            }, 0);
            return [{
                    width: this.maxWidth - numberSize.width,
                    height: this.maxHeight,
                    minHeight: numberSize.height
                }, {
                    width: this.maxWidth - mainWidth,
                    height: mainHeight - numberSize.height
                }];
        };
        Object.defineProperty(Form.prototype, "sections", {
            get: function () {
                var s = this.bubbleSections.concat();
                if (this.numberSection) {
                    s.push(this.numberSection);
                }
                return s;
            },
            enumerable: false,
            configurable: true
        });
        Form.prototype.setGroups = function (groups) {
            this.groups = groups;
        };
        Form.prototype.setNumber = function (number) {
            this.numberSection = number;
        };
        Object.defineProperty(Form.prototype, "size", {
            get: function () {
                if (this._size)
                    return this._size;
                var _a = this.sections.reduce(function (acc, section) {
                    acc.height = Math.max(acc.height, section.height);
                    acc.width += section.width;
                    return acc;
                }, { width: 0, height: 0 }), height = _a.height, width = _a.width;
                this._size = { height: height, width: width };
                this._size.height += this.border * 2;
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Form.prototype, "border", {
            get: function () {
                return Config_1.default.BORDER_WIDTH;
            },
            enumerable: false,
            configurable: true
        });
        return Form;
    }(Section_1.default));
    exports.default = Form;
});
