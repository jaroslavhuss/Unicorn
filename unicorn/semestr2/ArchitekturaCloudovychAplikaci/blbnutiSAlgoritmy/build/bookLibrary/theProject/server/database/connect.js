"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
var dbConnect = (function () {
    function dbConnect() {
    }
    dbConnect.prototype.connect = function () {
        dotenv.config();
        var mongoose = new mongoose_1.Mongoose();
        mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
            if (err)
                throw new Error("Nepodařilo se připojit k databázi...");
            console.log("Připojeno úspěšně k databázi");
        });
    };
    return dbConnect;
}());
exports.dbConnect = dbConnect;
