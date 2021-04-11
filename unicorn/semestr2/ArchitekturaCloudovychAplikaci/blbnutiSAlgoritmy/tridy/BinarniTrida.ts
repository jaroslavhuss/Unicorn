export class BinarniTrida {

    public async prevadecDvojkoveNaDesitkovou(nums:number){
        /**
         * @description Převede čísla z dvojkové soustavy na desítkovou;
         */
        let dvojkovaCisla = nums.toString().split("");
        const mocniny = await this.vygenerujMocniny(dvojkovaCisla.length);
        const finalniCislo = await this.vynasobMocninyDvojkovouSoustavou(mocniny,dvojkovaCisla);
        return finalniCislo;
    }
    /**
     * 
     * @description Vrátí podle délky pole jeho mocniny (2^délku pole)
     */
    private vygenerujMocniny(delkaPole){
        return new Promise((res) => {
            const poleMocnin = [];
            for (let i = 0; i < delkaPole; i++) {
                poleMocnin.push(Math.pow(2,i));
            }
            res(poleMocnin.reverse());
        })
    }
    /**
     * @description Vypočítá finální číslo
     */
    private vynasobMocninyDvojkovouSoustavou(mocniny,dvojkovacisla){
        return new Promise((res) => {
            let finalniCislo = 0;
            for (let i = 0; i < mocniny.length; i++) {
               finalniCislo += parseInt(mocniny[i])* parseInt(dvojkovacisla[i]);              
            }
            res(finalniCislo);
        })
    }
}