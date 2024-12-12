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
}

