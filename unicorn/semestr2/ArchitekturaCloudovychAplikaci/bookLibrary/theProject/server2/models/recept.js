const mongoose = require("mongoose");
const recept = new mongoose.Schema({
    name:{
        type:String,
       
    },
    description:{
        type:String,
    },
    finalAmount:{
        type:String,
    },
    preparationLength:{
     type:String,
    },
    materials:{
        type:String,
    }
})

module.exports = mongoose.model("Recipe", recept);