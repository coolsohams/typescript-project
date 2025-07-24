import {Utility} from "./utilities"

export class RandomRange {
    private startRange: number;
    private stopRange: number;
    private numberArray: Array<number> = [];
    
    constructor(startRangeParam: number, stopRangeParam: number){
        this.startRange = startRangeParam;
        this.stopRange = stopRangeParam;
    }
    // 1752111178431
    randRange() : number {
        var i: number = this.startRange;
        
        while (i <= this.stopRange) {
            this.numberArray.push(i);
            i++;
        }
        
        var ms:Date = new Date();
        var millisecond:string = ms.getTime().toString();
        var lastMillisecondDigit:number =  Number.parseInt(millisecond.substring(millisecond.length - 1, millisecond.length));
        return(this.numberArray[lastMillisecondDigit]); 
    }
    
}

// Example
// var randomNumber: RandomRange = new RandomRange(1,10);
// randomNumber.randRange();
