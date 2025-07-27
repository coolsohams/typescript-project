import {Exponents} from "./exponents"
import { Utility } from "../general/utilities";

class SquareCalculator {
    findSquares(amountOfSquares: number) : Array<number> {
        let squaresArray: Array<number> = [];
        for(let i: number = 1; i <= amountOfSquares; i++) {
            let exponentsObject: Exponents = new Exponents(i,2);
            squaresArray.push(exponentsObject.getExponentNumberValue());
        }
        return squaresArray;
    }
    
    findSpecificSquare(baseNumber: number) {
        let exponentsObject: Exponents = new Exponents(baseNumber,2);
        return exponentsObject.getExponentNumberValue();
    }
    
    findSquareRootOfNumber(squareNumber: number) : number {
        let squareForCurrentPair: number = 0;
        for(let i: number = 0; i <= squareNumber; i++) {
            let exponentsObject: Exponents = new Exponents(i,2)
            if(exponentsObject.getExponentNumberValue() <= squareNumber) {
                squareForCurrentPair = i;
            } else {
                break;
            }
        }
        return squareForCurrentPair; 
    }

    isPerfectSquare(sqrtNumber: number) : boolean {
        let squaresArray: Array<number> = this.findSquares(sqrtNumber);
        for(let i: number = 0; i <= sqrtNumber; i++) {
            if(squaresArray[i] == sqrtNumber) {
                return true;
            }
        }
        return false;
    }

    findSecondDigit(firstPartOfDivisor: number, currentDivident: number) : number {
        // Find the second digit of the divisor
        let secondPartDigit: number = 0;

        let result = Number.parseInt((firstPartOfDivisor.toString() +  secondPartDigit.toString())) * secondPartDigit;
        while(!(result > currentDivident)) {
            secondPartDigit++;
            result = Number.parseInt((firstPartOfDivisor.toString() +  secondPartDigit.toString())) * secondPartDigit;
        }
        
        return result > currentDivident ? secondPartDigit - 1 : secondPartDigit;
    }

    findSqrt(sqrtNumber: number) {
        // Calculate squareroot of a non-perfect sqaure number
        let pairsArray: Array<number> = Utility.createPairs(sqrtNumber);
        // if (!this.isPerfectSquare(sqrtNumber)) {
        //     pairsArray.push(0)
        // }

        let quotient: number = 0;
        let currentRemainder: number = 0;
        let overAllQuotient: number = 0;
        let divisor = this.findSquareRootOfNumber(pairsArray[0]);
        let currentDivident: number = 0;
        let firstPartOfDivisor: number = 0;
        let secondPartDigit: number = 0;

        for(let i: number = 0; i <= pairsArray.length - 1; i++) {
            let currentPair: number = pairsArray[i];
            currentDivident = Number.parseInt(currentRemainder.toString() + currentPair.toString());
            quotient = Utility.getQuotient(divisor, currentDivident);
            overAllQuotient = Number.parseInt(overAllQuotient.toString() + quotient.toString()) 
            currentRemainder = currentDivident % divisor;

            firstPartOfDivisor = divisor + Number.parseInt(overAllQuotient.toString()[overAllQuotient.toString().length - 1]);
            
            
            if(pairsArray.length - 1 != i) {
                currentDivident = Number.parseInt(currentRemainder.toString() + pairsArray[i+1].toString());
                secondPartDigit = this.findSecondDigit(firstPartOfDivisor, currentDivident);
                divisor = Number.parseInt(firstPartOfDivisor.toString() + secondPartDigit.toString());
            }
        } 

        if(currentRemainder != 0) {
            // Adding a pair of 0's by multiplying by 100.
            currentDivident = currentRemainder * 100;
            secondPartDigit = this.findSecondDigit(firstPartOfDivisor, currentDivident);
            overAllQuotient = overAllQuotient + Number.parseFloat("." + secondPartDigit.toString());
        }

        return overAllQuotient;
    }
}

let sqrtObject: SquareCalculator = new SquareCalculator();  

console.log(sqrtObject.findSqrt(676767));

