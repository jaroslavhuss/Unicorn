const saveSurovina = require("express").Router();
const Surovina = require("../models/surovina");
saveSurovina.post("/save-surovina", async (req,res) => {

    const {name} = req.body;
    const ulozeniSuroviny = new Surovina({
        nazevSuroviny:name
    })
    //Nejdřív najdi, zda už taková surovina neexistuje
  Surovina.findOne({"nazevSuroviny":name}, (err,data) => {
      if(err){
          res.json({
              msg:"Bohužel došlo k neznámě chybě"
          })
      }
      //Pokud ano, tak už surovinu neukládejme
      if(data!== null){
          res.json({
              msg:"Bohužel, tuhle surovinu už evidujeme!"
          })
      }else{
          //Jinak ji tady na klid uložíme
          ulozeniSuroviny.save((err,msg) => {
              if(msg._id){
              res.json({
                  msg:"Surovina byla úspěšně uložena v našem seznamu!"
              })
            }else{
                res.json({
                msg:"Surovina nemohla být uložena" + err.toString()
                })
            }
          })
      }
  })
})
module.exports = saveSurovina;