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

    findSqrt(sqrtNumber: number) {
        // Calculate squareroot of a non-perfect sqaure number
        let pairsArray: Array<number> = Utility.createPairs(sqrtNumber);
        let quotient: number = 0;
        let currentRemainder: number = 0;
        let overAllQuotient: number = 0;
        let divisor = this.findSquareRootOfNumber(pairsArray[0]);

        for(let i: number = 0; i <= pairsArray.length - 1; i++) {
            let currentPair: number = pairsArray[i];
            let currentDivident: number = Number.parseInt(currentRemainder.toString() + currentPair.toString());
            quotient = Utility.getQuotient(divisor, currentDivident);
            overAllQuotient = Number.parseInt(overAllQuotient.toString() + quotient.toString()) 
            currentRemainder = currentDivident % divisor;

            // Add current divisor and last digit of the quotient
            let firstPartOfDivisor: number = divisor + Number.parseInt(overAllQuotient.toString()[overAllQuotient.toString().length - 1]);
           
            // Find the second digit of the divisor
            let secondPartDigit: number = 0;

            while(firstPartOfDivisor * secondPartDigit <= currentDivident) {
                secondPartDigit++;
                divisor = Number.parseInt(firstPartOfDivisor.toString() + secondPartDigit.toString());
            }
        } 
        
        return overAllQuotient;
    }
}

let sqrtObject: SquareCalculator = new SquareCalculator();  

console.log(sqrtObject.findSqrt(12673));

