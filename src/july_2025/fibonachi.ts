class Fibonatchi {
    static getFibonachiNumbers(amountOfFibonachi: number) {
        let currentCalc: number = 0;
        let fibonachiArray: Array<number> = [0,1];
        for(let i: number = 0; fibonachiArray.length < amountOfFibonachi; i++) {
            currentCalc = fibonachiArray[fibonachiArray.length - 2] + fibonachiArray[fibonachiArray.length - 1];
            fibonachiArray.push(currentCalc);
        }
        return fibonachiArray
    }
    
    static getFibonachiNumbersRecursive(amountOfFibonachi: number, fibonachiArray: Array<number> = [0,1]) {
        if(fibonachiArray.length < amountOfFibonachi) {
            let currentCalc: number = fibonachiArray[fibonachiArray.length - 2] + fibonachiArray[fibonachiArray.length - 1];
            fibonachiArray.push(currentCalc);
            this.getFibonachiNumbersRecursive(amountOfFibonachi, fibonachiArray)
        }
        return fibonachiArray
    }
}

console.log(Fibonatchi.getFibonachiNumbersRecursive(6));