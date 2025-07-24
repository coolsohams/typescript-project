export class Multiples {
    
    getMultiples(numberOfMultipleParam: number, amountToPrintMultiplesParam: number): Array<number> {
        let multiplesArray:Array<number> = [];
        
        for(let i: number = 1; i <= amountToPrintMultiplesParam;i++) {
            multiplesArray.push(numberOfMultipleParam * i);
        }
        
        return multiplesArray;
    }

     isNumberPrime(inputNumberParam: number): boolean {
        return !(inputNumberParam % 2  == 0 || inputNumberParam % 3  == 0 || inputNumberParam % 5  == 0 || inputNumberParam % 7  == 0);
     }
    
    getPrimeNumbers(numberOfMultipleParam: number, amountToPrintMultiplesParam: number): Array<number> {
        let multiplesArray: Array<number> = this.getMultiples(numberOfMultipleParam, amountToPrintMultiplesParam);
        let primeNumbers: Array<number> = [];
        for(let i: number = 0; i <= multiplesArray.length; i++){
            let currentNumber: number = multiplesArray[i];
            if(this.isNumberPrime(currentNumber)) {
                primeNumbers.push(currentNumber);
            }
        }
        return primeNumbers;
    }
}

// Example
var testObject: Multiples = new Multiples();
console.log(testObject.getPrimeNumbers(1,100));
var primeNumberArray: Array<number> = [1, 11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,72,79,83,89,97];

for (var i:number = 0; i <= primeNumberArray.length - 1; i++) {
    var currentNumber: number = primeNumberArray[i];
    console.log(`Is ${currentNumber} Prime? ${testObject.isNumberPrime(currentNumber)}`);
}