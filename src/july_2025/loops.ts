import {RandomRange} from "../general/random-number";

var randomNumber: RandomRange = new RandomRange(1,10);

class ForLoop {
    returnRandomNumbers(amountOfRandomNumbersParam: number) : Array<number> {
        let randomNumbersArray: Array<number> = [];
        for(let i: number = 1; i <= amountOfRandomNumbersParam; i++) {
            console.log();
            randomNumbersArray.push(randomNumber.randRange());
        }
        return randomNumbersArray;
    }
}

class WhileLoop {
    returnRandomNumbers(amountOfRandomNumbersParam: number) : Array<number> {
        let i: number = 1
        let randomNumbersArray: Array<number> = [];
        while(i <= amountOfRandomNumbersParam) {
            console.log();
            randomNumbersArray.push(randomNumber.randRange());
            i++;
        }
        return randomNumbersArray;
    }
}

class DoWhileLoop {
    
    returnRandomNumbers(amountOfRandomNumbersParam: number) : Array<number> {
        let i: number = 1;
        let randomNumbersArray: Array<number> = [];
        do {
            console.log();
            randomNumbersArray.push(randomNumber.randRange())
            i++;
        } while(i <= amountOfRandomNumbersParam);
        return randomNumbersArray;
    }
}


let forLoopObject: ForLoop = new ForLoop;
let whileLoopObject: WhileLoop = new WhileLoop;
let doWhileLoopObject: DoWhileLoop = new DoWhileLoop;

console.log(`For loop: ${forLoopObject.returnRandomNumbers(20)}`);
console.log(`While loop: ${whileLoopObject.returnRandomNumbers(20)}`);
console.log(`Do while loop: ${doWhileLoopObject.returnRandomNumbers(20)}`);

