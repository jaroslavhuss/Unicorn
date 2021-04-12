const getSuroviny = require("express").Router();
const Surovina = require("../models/surovina");

getSuroviny.get("/get-suroviny", async (req,res) => {
     Surovina.find({}, (err,docs) => {
         if(err){
             res.json({
                 msg:"Došlo k neznáme chybě"
             })
         }
        if(docs){
            res.json(
                {
                data:docs,
            msg:"Data byla získána"
        })
        }else{
            res.json({
                data:[],
                msg:"Bohužel, nešlo načíst seznam potravin"
            })
        }
    });
   
 
})

module.exports = getSuroviny;