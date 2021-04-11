"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var test_1 = require("./routes/test");
var app = express_1.default();
var PORT = process.env.PORT || 5000;
app.get("/", function (req, res) {
    res.send("Ahoj");
});
app.use("/prdel", test_1.testRoute);
app.listen(PORT, function (err) {
    if (err)
        throw new Error("Server se nenastartoval a něco se posralo");
    console.log("Server b\u011B\u017E\u00ED na adrese http://localhost:" + PORT);
});
