const getSuroviny = require("express").Router();
const Surovina = require("../models/surovina");

getSuroviny.get("/get-suroviny", async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
const sampleData = [
    {nazevSuroviny:"Čočka"},
    {nazevSuroviny:"Hovězí"},
    {nazevSuroviny:"Pepř"},
    {nazevSuroviny:"Prdel"},
    {nazevSuroviny:"Křen"},
    {nazevSuroviny:"Prase"},
    {nazevSuroviny:"Jelito"},
    {nazevSuroviny:"Karel"},
    {nazevSuroviny:"Marek"},
    {nazevSuroviny:"Lesba"}
]
res.json(sampleData);


   /**
    * Surovina.find({}, (err,docs) => {
         if(err){
           return  res.json({
                 msg:"Server není připojený k databázi"
             })
         }
        if(docs){
          return  res.json(
                {
                data:docs,
            msg:"Data byla získána"
        })
        }else{
          return  res.json({
                data:[],
                msg:"Bohužel, nešlo načíst seznam potravin"
            })
        }
    }).catch(() => {
        console.log("Server není připojený k databázi")
    })
    */
     
 
})

module.exports = getSuroviny;