const saveRecipe = require("express").Router();
const recept = require("../models/recept");
saveRecipe.post("/save-recipe", async (req,res) => {
    const {name,description,finalAmount,preparationLength,materials} = req.body;
    const ulozeniReceptu = new recept({
        name,
        description,
        finalAmount,
        preparationLength,
        materials
    })
    ulozeniReceptu.save().then((response) => {
       if(response._id){
        res.json({
            msg:"Recept byl úspěšně uložen"
        })
       }else{
           res.json({
               msg:"Recept nebyl uložen"
           })
       }
        
    }).catch((err) => {
        if(err){
            res.json({
                msg:err
            })
        }
    })
})
module.exports = saveRecipe;