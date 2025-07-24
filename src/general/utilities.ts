//
export class Utility {
    static myVariable: string | undefined;
    
    static printArrayReverse(array: Array<number>) {
        var arrayLength: number = array.length - 1;
        for(var i: number = arrayLength; i >= 0; i--) {
            console.log(array[i]);
        }
    }
    
    static printArray(array: Array<number>) {
        var arrayLength: number = array.length;
        for(var i: number = 0; i < arrayLength; i++) {
            console.log(array[i]);
        } 
    }
    
    static sortAscendingOrder(array: Array<number>) {
        var numberCount: number =array.length;
        for (var i: number = 0; i < numberCount; i++) {
            for(var counter: number = i + 1; counter < numberCount; counter++){
                if (!(array[i] < array[counter])) {
                    Utility.swap(array, i, counter);
                }
            }
        }
        
        return array;
    }
    
    static swap(array: Array<number>, index1: number, index2: number) {
        var temporaryArrayValue: number = array[index1];
        array[index1] = array[index2];
        array[index2] = temporaryArrayValue;
    }
    
    static checkArrayIsAllNull(arr: Array<number | undefined>) {
        this.myVariable;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != undefined) {
                return true;
            }
        }
    }
    
    static createPairs(numberInput: number) : Array<number> {
        let remainder: number = numberInput.toString().length % 2;
        let numberInputString: string = numberInput.toString();
        let pairsArray: Array<number> = [];
        if (remainder != 0) {
            numberInputString = "0" + numberInput.toString();
        }
        
        let numberOfLoops: number = numberInputString.length / 2;
        for(let i: number = 0; i < numberOfLoops; i++) {
            let pair: number = Number.parseInt(numberInputString.substring(i * 2, i * 2 + 2));
            pairsArray.push(pair);
        }
        return pairsArray
    }

    static getQuotient(divisor: number, divident: number) {
        let i: number = 1;
        let result: number = 0;
        while(result <= divident) {
            i++;
            result = divisor * i;
        }
        return i - 1;
    }

    static calculateFactorialSmall(numberParam: number) {
        let storeCurrentMultiplication: number = 1;
        for(let i: number = 1; i <= numberParam; i++) {
            storeCurrentMultiplication = storeCurrentMultiplication * i;
        }
        return storeCurrentMultiplication;
    }
}

