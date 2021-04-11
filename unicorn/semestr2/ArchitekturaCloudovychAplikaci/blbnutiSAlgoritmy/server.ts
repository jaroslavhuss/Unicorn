import {BinarniTrida} from "./tridy/BinarniTrida";
const binarniTrida = new BinarniTrida();
const asyncCall = async () => {
    console.log(await binarniTrida.prevadecDvojkoveNaDesitkovou(11010110))
}
asyncCall()