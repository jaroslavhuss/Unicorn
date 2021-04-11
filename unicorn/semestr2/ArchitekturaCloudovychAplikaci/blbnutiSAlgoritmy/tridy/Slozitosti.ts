export class DemonstraceSlozitosti {
   /**
    * @description Konstantní složitost.
    * @param i index, vrátí hodnotu z pole
    */
   public konstantniSlozitost(i){
    const constantArray :number[] = [1,2,3,4,5,6,7,8,9];
       if(i > constantArray.length - 1){
           throw new Error("Zadaná hodnota převyšuje délku pole");
       }
    console.log(constantArray[i]);
   }
   
   /**
    * @description Logaritmická složitost
    */
   public logaritmickaSlozitos(){
       //Zde bude logika aloritmu
   }

} 
//nechce se commitnout?