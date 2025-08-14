class Factorial {
    private inputNumber: number = 0

    constructor(inputNumberParam: number) {
        this.inputNumber = inputNumberParam;
    }

    calculateFactorial() {
        let storeCurrentMultiplication: number = 1;
        for(let i: number = 1; i <= this.inputNumber; i++) {
            storeCurrentMultiplication = storeCurrentMultiplication * i;
        }
        return storeCurrentMultiplication;
    }

    factorial(calculatedValue: number = this.inputNumber, i: number = 1) {
        if(i < this.inputNumber) {
            calculatedValue = calculatedValue * i
            this.factorial(calculatedValue, ++i);
        }
        return calculatedValue;
    }

}

let testObject: Factorial = new Factorial(5);
testObject.factorial();

console.log(testObject.calculateFactorial());