let subStringTestVariable: number = 12673;

function createPairs(numberInput: number) : Array<number> {
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

console.log(createPairs(subStringTestVariable));