/**
 * Napsat třídu, která řeší faktoriál
 */

 class factorial{
    num:number;
    results:number;
    constructor(num:number){
        this.num = num;
        this.results = num;
    }
    
    calculateFactorialAsRecursion(){
        this.num--;
        this.results = this.results * this.num;
        if(this.num <= 1){
            return this.results * 1;
        }else{
            this.calculateFactorialAsRecursion();
        }
        return this.results;
    }

    calculateFactorialAsLoop(){
      while(this.num>0){
          this.num--;
         if(this.num>0){
         this.results = this.results * this.num; 
         }
      }
      return this.results;
      
    }
}

const loop = new factorial(10).calculateFactorialAsLoop();
console.log(loop)

const recursion = new factorial(10).calculateFactorialAsRecursion();
console.log(recursion)

