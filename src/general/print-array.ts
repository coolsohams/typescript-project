export class PrintArray {
    private array: Array<number> = [];
    
    constructor(arrayParam: Array<number>) {
        this.array = arrayParam;
    }
    
    printArray() {
        var arrayLength: number = this.array.length;
        for(var i: number = 0; i < arrayLength; i++) {
            console.log(this.array[i]);
        } 
    }
    
    printArrayReverse() {
        var arrayLength: number = this.array.length - 1;
        for(var i: number = arrayLength; i >= 0; i--) {
            console.log(this.array[i]);
        }
    }
}

