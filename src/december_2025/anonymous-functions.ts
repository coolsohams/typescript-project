let prompts2 = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit;
// // Example of filter with numbers in array.
// let numbersArray: Array<number> = [45,22,54,78,61,14324,2341,432,67,69];
// let filteredNumbersArray: Array<number> = numbersArray.filter((number: number) => number <= 100);

import { Fruit } from "../general/my-classes"

// console.log(filteredNumbersArray);

// // Example of filter with string in array.
// let stringArray: Array<string> = ['q','r','p','m','c','q','q'];
// let anonymousFunction1 = (str: string, index: number) => {
//     console.log(`Index (A): ${index}`);
//     return str == 'q';
// };

// function myFunction(param: string, index: number) {
//     console.log(`Index (B): ${index}`);
//     return param == 'q';
// }

// let filteredStringArray: Array<string> = stringArray.filter(anonymousFunction1);
// console.log(filteredStringArray)

// let text3: string = prompts2('Enter the text: ');
// let textSeperated: Array<string> = text3.split(' ');

// if(text3) {
//     let findingWord: string = prompts2('Enter the word you want to filter: ');
//     let filteredText: Array<string> = textSeperated.filter((word: string) => word == findingWord);
//     console.log(filteredText);
// }

// let familyArray: Array<string> = ['Soham', 'Surya', 'Deepa', 'sudhamati', 'Dnynoba'];

// console.log('Names with length of 5 letters: ' + familyArray.filter((name: string) => name.length == 5));
// console.log('Names that start with S: ' + familyArray.filter((name: string) => { 
//     name = name.toUpperCase();
//     return name.startsWith('S')}
// ));

// console.log("Names with 2 e's: " + familyArray.find((name: string) => name.indexOf('ee') > -1));

class Fruits {
    colour: string = '';
    hasSeed: boolean = false;
    amountOfSeeds: number = 0;
    name: string = '';

    constructor(colourParam: string, hasSeedParam: boolean, amountOfSeedsParam: number, nameParam: string) {
        this.colour = colourParam;
        this.hasSeed = hasSeedParam;
        this.amountOfSeeds = amountOfSeedsParam;
        this.name = nameParam;
    }

    toString() {
        console.log(`Name: ${this.name}, Colour: ${this.colour}, hasSeed: ${this.hasSeed}, amountOfSeeds: ${this.amountOfSeeds}`);
    }

}

let apple: Fruits = new Fruits('red', true, 4, 'Apple');
let banana: Fruits = new Fruits('yellow', false, 0, 'Banana');
let cantaloupe: Fruits = new Fruits('beige', true, 300 , 'Cantaloupe');
let mango: Fruits = new Fruits('orange', true, 1, 'Mango');
let persimmon: Fruits = new Fruits('orange', true, 1, 'Persimmon');

let arrayOfFruits: Array<Fruits> = [apple, banana, cantaloupe, mango, persimmon];
let orangeFruits: Array<Fruits> = arrayOfFruits.filter((fruit: Fruits) => fruit.colour == 'orange');
let firstFruit: Fruits | undefined = arrayOfFruits.find((fruit: Fruits) => fruit.amountOfSeeds < 5);

console.log('Fruits with the colour orange: ');
console.log(orangeFruits);

console.log('The first fruit with seeds less than 5: ');
console.log(firstFruit);

let previousSeedsSum: number = 0;
arrayOfFruits.map((fruit: Fruits) => previousSeedsSum = previousSeedsSum + fruit.amountOfSeeds)
console.log(previousSeedsSum)
let uppercasedFruitColors: Array<Fruits> = arrayOfFruits.map((fruit: Fruits) => {
    fruit.colour = fruit.colour.toUpperCase()
    return fruit;
});

console.log(uppercasedFruitColors)

let testPrompt = prompts2('Hello: ')