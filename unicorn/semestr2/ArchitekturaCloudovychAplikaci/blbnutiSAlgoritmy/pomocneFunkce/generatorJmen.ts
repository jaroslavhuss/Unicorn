import {arrayofnamesMale, arrayofsurnamesAll} from "./jmenaaprijmeni";
const fs = require("fs");
class GenerujJmenoAPrijmeni {
       private pocet:number;
        constructor(pocet = 0){
         this.pocet = pocet;
        }
        private randomNumber():number{
            //generates 0-99
            return Math.floor(Math.random()*arrayofsurnamesAll.length);
        }
        public generateAllNames(pocet){
            const generatedNames:string[] = [];
            for (let i:number = 0; i < pocet; i++) {
                generatedNames.push(`${arrayofnamesMale[this.randomNumber()]} ${arrayofsurnamesAll[this.randomNumber()]}`)
            }
            return generatedNames;
        }
}
const generator = new GenerujJmenoAPrijmeni();
console.time("namegeneration");
fs.writeFile("sourceofnames.txt", generator.generateAllNames(100000).toString(), (err) => {
    if(err){throw new Error("Bohužel, něco se posralo")}
})
console.timeEnd("namegeneration");
//nechce se commitnout?