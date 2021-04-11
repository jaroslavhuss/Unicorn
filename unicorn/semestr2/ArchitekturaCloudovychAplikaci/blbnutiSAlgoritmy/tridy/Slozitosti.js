System.register([], function (exports_1, context_1) {
    "use strict";
    var DemonstraceSlozitosti;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DemonstraceSlozitosti = /** @class */ (function () {
                function DemonstraceSlozitosti() {
                }
                /**
                 * @description Konstantní složitost.
                 * @param i index, vrátí hodnotu z pole
                 */
                DemonstraceSlozitosti.prototype.konstantniSlozitost = function (i) {
                    var constantArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    if (i > constantArray.length - 1) {
                        throw new Error("Zadaná hodnota převyšuje délku pole");
                    }
                    console.log(constantArray[i]);
                };
                /**
                 * @description Logaritmická složitost
                 */
                DemonstraceSlozitosti.prototype.logaritmickaSlozitos = function () {
                    //Zde bude logika aloritmu
                };
                return DemonstraceSlozitosti;
            }());
            exports_1("DemonstraceSlozitosti", DemonstraceSlozitosti);
            //nechce se commitnout?
        }
    };
});
//# sourceMappingURL=Slozitosti.js.map