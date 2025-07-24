class FactorialsCalculator {
    calculateFactorial(numberParam: number) {
        let calculateFactorialArray: Array<number> = [];
        let storeCurrentMultiplication: number = 1;
        for(let i: number = 1; i <= numberParam; i++) {
            calculateFactorialArray.push(i);
        }
        for(let j: number = 1; j <= calculateFactorialArray.length - 1; j++) {
            storeCurrentMultiplication = storeCurrentMultiplication * calculateFactorialArray[j];
        }
        return storeCurrentMultiplication;
    }

    calculateFactorialSmall(numberParam: number) {
        let storeCurrentMultiplication: number = 1;
        for(let i: number = 1; i <= numberParam; i++) {
            storeCurrentMultiplication = storeCurrentMultiplication * i;
        }
        return storeCurrentMultiplication;
    }
}

let testObject: FactorialsCalculator = new FactorialsCalculator();

console.log(testObject.calculateFactorial(9));