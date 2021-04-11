"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var receptSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    description: {
        type: String,
        require: true,
        min: 10
    },
    finalAmount: {
        type: Number,
        require: true,
        min: 1
    },
    preparationLength: {
        type: Number,
        require: true,
        min: 1
    },
    materials: {
        type: Array
    }
});
exports.default = mongoose_1.model("receiptSchema", receptSchema);
