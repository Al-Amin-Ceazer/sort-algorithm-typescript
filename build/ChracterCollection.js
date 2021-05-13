"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChracterCollection = void 0;
var ChracterCollection = /** @class */ (function () {
    function ChracterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(ChracterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    ChracterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    ChracterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var chracter = this.data.split('');
        var temp = chracter[leftIndex];
        chracter[leftIndex] = chracter[rightIndex];
        chracter[rightIndex] = temp;
        this.data = chracter.join('');
    };
    return ChracterCollection;
}());
exports.ChracterCollection = ChracterCollection;
