import {Utility} from "./utilities"

export class RandomRange {
    private startRange: number;
    private stopRange: number;
    private numberArray: Array<number | undefined> = [1,2,3,4];

    constructor(startRangeParam: number, stopRangeParam: number){
        this.startRange = startRangeParam;
        this.stopRange = stopRangeParam;
    }

    randRange(){
        var i: number = this.startRange;

        while (i <= this.stopRange) {
            this.numberArray.push(i);
            i++;
        }

        while (Utility.checkArrayIsAllNull(this.numberArray)) {
            var ms:Date = new Date();
            var millisecond:string = ms.getMilliseconds().toString();
            var lastMillisecondDigit:number =  Number.parseInt(millisecond.slice(2));

            if(this.numberArray[lastMillisecondDigit] != undefined) {
                console.log(this.numberArray[lastMillisecondDigit]);
                this.numberArray[lastMillisecondDigit] = undefined;
            }   
        }
    }

}


