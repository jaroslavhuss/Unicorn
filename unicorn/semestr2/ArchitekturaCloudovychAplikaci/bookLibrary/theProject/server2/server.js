const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {dbConnect} = require("./databse/connect");
const saveRecipe = require("./routes/saveRecipe");
/**
 * MIDDLEWARE
 */

 app.use(express.text({ extended: false }));
 app.use(express.json({ extended: false }));

/**
 * Připojení k databázi
 */
new dbConnect().connect();

/**
 * ROUTY
 */
app.use("/", saveRecipe)

app.get("/", (req,res) => {
    res.send("Ahoj");
})

/**
 * Běh serveru
 */
app.listen(PORT, (err) => {
    if(err) throw new Error("Server nebylo možné nastartovat");
    console.log(`
    =============================================
    Server běží na adrese http://localhost:${PORT}
    `);
    console.table([
        { 
         Popis: "Uloz recept",
         URL:"http://localhost:5000/save-recipe",
         Metoda: "POST" 
        },
      ]
    )
});