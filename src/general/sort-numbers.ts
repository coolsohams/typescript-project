import {Utility} from "./utilities"

class SortNumbers {
    array: Array<number> = [];

    constructor(arrayParam: Array<number>) {
        this.array = arrayParam;
    }
    
    sortAscendingOrder() {
       Utility.sortAscendingOrder(this.array);
    }
}

