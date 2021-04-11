/**
 * Třída - najít největšího společného dělitele NSD
 */
var NSD = /** @class */ (function () {
    function NSD() {
    }
    NSD.prototype.recursionNDS = function (numA, numB) {
        if (!numB) {
            return numA;
        }
        console.log(numA % numB);
        return this.recursionNDS(numB, numA % numB);
    };
    return NSD;
}());
var nsd = new NSD().recursionNDS(5000, 24);
//# sourceMappingURL=cv02.js.map