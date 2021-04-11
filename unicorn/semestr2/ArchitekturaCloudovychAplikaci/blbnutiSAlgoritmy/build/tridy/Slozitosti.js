"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemonstraceSlozitosti = void 0;
var DemonstraceSlozitosti = (function () {
    function DemonstraceSlozitosti() {
    }
    DemonstraceSlozitosti.prototype.konstantniSlozitost = function (i) {
        var constantArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (i > constantArray.length - 1) {
            throw new Error("Zadaná hodnota převyšuje délku pole");
        }
        console.log(constantArray[i]);
    };
    DemonstraceSlozitosti.prototype.logaritmickaSlozitos = function () {
    };
    return DemonstraceSlozitosti;
}());
exports.DemonstraceSlozitosti = DemonstraceSlozitosti;
