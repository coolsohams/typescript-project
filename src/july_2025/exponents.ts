export class Exponents {
    baseNumber: number = 0;
    exponentNumber: number = 0;
    
    constructor(baseNumberParam: number, exponentNumberParam: number) {
        this.baseNumber = baseNumberParam;
        this.exponentNumber = exponentNumberParam;
    }
    
    getExponentNumberValue(): number {
        if(this.exponentNumber == 0){
            return 1;
        } else {
            let storeLoopNumber: number = this.baseNumber;
            for(let i: number = 1; i <= this.exponentNumber - 1; i++){
                storeLoopNumber = this.baseNumber * storeLoopNumber;
            }
            return storeLoopNumber;
        }
    }
    
    addExponents(testObject: Exponents, testObject2: Exponents) : number {
        return testObject.getExponentNumberValue() + testObject2.getExponentNumberValue();
    }
    
    substractExponents(testObject: Exponents, testObject2: Exponents) : number {
        return testObject.getExponentNumberValue() - testObject2.getExponentNumberValue();
    }
    
    multiplyExponents(testObject: Exponents, testObject2: Exponents) : number {
        return testObject.getExponentNumberValue() * testObject2.getExponentNumberValue();
    }
    
    divideExponents(testObject: Exponents, testObject2: Exponents) : number {
        return testObject.getExponentNumberValue() / testObject2.getExponentNumberValue();
    }
    
    findGreaterExponentValue(testObject: Exponents, testObject2: Exponents) : Exponents | number {
        let testObjectExponentValue: number = testObject.getExponentNumberValue();
        let testObject2ExponentValue: number = testObject2.getExponentNumberValue();
        if(testObjectExponentValue > testObject2ExponentValue) {
            return testObject;
        } else if (testObjectExponentValue == testObject2ExponentValue) {
            return 0;
        } else {
            return testObject2;
        }
    }
    
    compareExponents(testObject: Exponents, testObject2: Exponents) : string | undefined {
        let testObjectExponentValue: number = testObject.getExponentNumberValue();
        let testObject2ExponentValue: number = testObject2.getExponentNumberValue();
        let greaterObject: Exponents | number = this.findGreaterExponentValue(testObject, testObject2);
        
        if (greaterObject == testObject){
            return `The first exponent number ${testObjectExponentValue} is greater than the second exponent number ${testObject2ExponentValue}.`
        } else if (greaterObject == 0){
            return `The first exponent number ${testObjectExponentValue} is equal to the second exponent number ${testObject2ExponentValue}.`
        } else if (greaterObject == testObject2) {
            return `The first exponent number ${testObjectExponentValue} is less than than the second exponent number ${testObject2ExponentValue}.`
        }
    }
}

// Example

let testObject: Exponents = new Exponents(7,1);
let testObject2: Exponents = new Exponents(7,2);

// console.log(testObject.findGreaterExponentValue(testObject, testObject2));
// console.log(testObject.compareExponents(testObject, testObject2));
// console.log(testObject.addExponents(testObject, testObject2));
// console.log(testObject.substractExponents(testObject, testObject2));
// console.log(testObject.multiplyExponents(testObject, testObject2));
// console.log(testObject.divideExponents(testObject, testObject2));