function calculateAverage(numbers: number[]): number {
    for(let i: number = numbers.length - 1; i >=0; i--) {
        var storeNumberForSum: number = numbers[i] + numbers[i-1];
        var sum = storeNumberForSum + numbers[i - 2];
       
    }
    return sum / numbers.length;
}

var numbers = [10, 20, 30, 40, 50];
var average = calculateAverage(numbers);

console.log(`The average is: ${average}`);