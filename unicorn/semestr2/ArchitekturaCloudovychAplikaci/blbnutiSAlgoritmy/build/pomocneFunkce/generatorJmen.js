"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jmenaaprijmeni_1 = require("./jmenaaprijmeni");
var fs = require("fs");
var GenerujJmenoAPrijmeni = (function () {
    function GenerujJmenoAPrijmeni(pocet) {
        if (pocet === void 0) { pocet = 0; }
        this.pocet = pocet;
    }
    GenerujJmenoAPrijmeni.prototype.randomNumber = function () {
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
var generator = new GenerujJmenoAPrijmeni();
console.time("namegeneration");
fs.writeFile("sourceofnames.txt", generator.generateAllNames(100000).toString(), function (err) {
    if (err) {
        throw new Error("Bohužel, něco se posralo");
    }
});
console.timeEnd("namegeneration");
