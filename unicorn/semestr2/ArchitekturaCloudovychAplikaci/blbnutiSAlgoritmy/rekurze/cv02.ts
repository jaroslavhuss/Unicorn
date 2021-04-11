/**
 * Třída - najít největšího společného dělitele NSD
 */

class NSD {
    recursionNDS(numA:number, numB:number):number{
        if (!numB) {
            return numA;
          }
          console.log(numA%numB)
          return this.recursionNDS(numB, numA % numB);
    }
}

const nsd = new NSD().recursionNDS(5000,24);
