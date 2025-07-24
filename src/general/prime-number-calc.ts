export interface ICalculator {
    isPrime(num: number): boolean;
}

export class PrimeCalculator implements ICalculator {

    isPrime(num: number): boolean {
        var returnValue = true;
        var factors: number = 0;
        for(var counter: number = 1; counter <= num; counter++) {
            if(num % counter == 0) {
                factors++
            }
            if(factors >= 3){
                returnValue = false;
            }
        }

        return returnValue;
    }
}

let firstName = "test";
let calc: PrimeCalculator;
const arr: Array<number> = [10, 20];
const myTuple: [number, string] = [10, "Hello"];


