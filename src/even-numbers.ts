export class EvenNumberArray {
    
    getOddNumbers(arrayParam: Array<number>) {
        var array: Array<number> = [];
        for(var i: number = 0; i <= arrayParam.length; i++) {
            if (arrayParam[i] % 2 != 0) {
                array.push(arrayParam[i])
            }
        }
        return array;
    }
    
    getEvenNumbers(arrayParam: Array<number>) {
        return this.getNumbersInTable(arrayParam, 2);
    }

    getNumbersInTable(arrayParam: Array<number>, tableNumber: number) {
        var array: Array<number> = [];
        for(var i: number = 0; i <= arrayParam.length; i++) {
            if (arrayParam[i] % tableNumber == 0) {
                array.push(arrayParam[i]);
            }
        }
        return array;
    }
}


