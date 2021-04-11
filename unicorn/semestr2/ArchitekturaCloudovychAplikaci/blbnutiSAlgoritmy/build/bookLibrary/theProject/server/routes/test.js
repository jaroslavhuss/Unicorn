"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRoute = void 0;
var express_1 = require("express");
var recipe_1 = require("../models/recipe");
var testRoute = express_1.Router();
exports.testRoute = testRoute;
testRoute.get("/", function (req, res) {
    var schema = new recipe_1.default({
        name: req.body.name,
        description: req.body.description,
        finalAmoutn: req.body.amount,
        preparationLength: req.body.preparationLength,
        materials: req.body.materials
    });
    res.send("Tohle je routa");
});
