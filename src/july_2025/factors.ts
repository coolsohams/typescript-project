export class Factors {

    findFactors(productNumber: number) : Array<number> {
       var factorsArray: Array<number> = [];
        for(var i: number = 1; i <= productNumber; i++) {
            if(productNumber % i == 0) {
                factorsArray.push(i);
            }
        }
        return factorsArray;
    }
}

// Example
var testObject2: Factors = new Factors();                                                                                              
let productNumber: number = 36;
let factorsArray: Array<number> = testObject2.findFactors(productNumber);
console.log(testObject2.findFactors(productNumber));
// console.log(`Found ${factorsArray.length} factors for the product ${productNumber}. The factors are: ${factorsArray}`);
