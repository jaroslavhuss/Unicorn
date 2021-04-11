System.register(["./jmenaaprijmeni"], function (exports_1, context_1) {
    "use strict";
    var jmenaaprijmeni_1, fs, GenerujJmenoAPrijmeni, generator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jmenaaprijmeni_1_1) {
                jmenaaprijmeni_1 = jmenaaprijmeni_1_1;
            }
        ],
        execute: function () {
            fs = require("fs");
            GenerujJmenoAPrijmeni = /** @class */ (function () {
                function GenerujJmenoAPrijmeni(pocet) {
                    if (pocet === void 0) { pocet = 0; }
                    this.pocet = pocet;
                }
                GenerujJmenoAPrijmeni.prototype.randomNumber = function () {
                    //generates 0-99
                    return Math.floor(Math.random() * jmenaaprijmeni_1.arrayofsurnamesAll.length);
                };
                GenerujJmenoAPrijmeni.prototype.generateAllNames = function (pocet) {
                    var generatedNames = [];
                    for (var i = 0; i < pocet; i++) {
                        generatedNames.push(jmenaaprijmeni_1.arrayofnamesMale[this.randomNumber()] + " " + jmenaaprijmeni_1.arrayofsurnamesAll[this.randomNumber()]);
                    }
                    return generatedNames;
                };
                return GenerujJmenoAPrijmeni;
            }());
            generator = new GenerujJmenoAPrijmeni();
            console.time("namegeneration");
            fs.writeFile("sourceofnames.txt", generator.generateAllNames(100000).toString(), function (err) {
                if (err) {
                    throw new Error("Bohužel, něco se posralo");
                }
            });
            console.timeEnd("namegeneration");
            //nechce se commitnout?
        }
    };
});
//# sourceMappingURL=generatorJmen.js.map