class WordleGrid {
    elements: Array<Array<string>> = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ];
    
    constructor(elements?:  Array<Array<string>>) {
        if(elements) {
            this.elements = elements;
        }
    }
    
    drawGrid(document: Document, divId: string, className: string) {
        let gridHtml: string = '';
        for(let i: number = 0; i < this.elements.length; i++) {
            
            let row: Array<string> = this.elements[i];
            let rowHtml: string =  ``;
            for(let j: number = 0; j < row.length; j++) {
                let currentDivIdCoordinate: string = j.toString() + '_' + i.toString() 
                rowHtml = rowHtml + this.createGridItem(className, row[j], currentDivIdCoordinate);
            }
            
            gridHtml =  gridHtml + `
            <!--Row 1 Div-->
            <div class="space-y-2 p-1">
                ${rowHtml}
            </div>`
        }
        
        const displayDiv =  document.getElementById(divId) as HTMLDivElement;
        if(displayDiv) {
            displayDiv.innerHTML =  gridHtml;
        }
    }
    
    createGridItem(className: string, value: string, divId: string): string {
        return `<div id="${divId}" class="border border-b-emerald-700 rounded-sm p-2 ${className}">${value}</div>`;
    }
}


class WordleGameHTML {
    private prompts = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit;
    startGame() {
        let guessingWord: string = this.prompts('Write a 5 letter word: ');
        guessingWord = guessingWord.toUpperCase();
        if(guessingWord.length != 5){
            console.log("The word you chose is not 5 letters! Game will restart and you can write a 5 letter word.");
            this.startGame()
        } else {
            let didPlayerWin: boolean = false;
            for(let i = 0; i < 5 && !didPlayerWin; i++) {
                let guessedWord: string = this.prompts("Guess a word: ");
                guessedWord = guessedWord.toUpperCase();
            }
        }
    }
}

let guessingWord: string = '';
let wordleGridObject: WordleGrid = new WordleGrid();

wordleGridObject.drawGrid(document, 'displayDiv', 'p-5 m-2');
function submitWord() {
    const guessingWordInputValue: string = (document.getElementById('wordInput') as HTMLInputElement).value;
    if(guessingWordInputValue.length != 5) {
        alert('Choose a 5 letter word!')
    } else {
        alert('Word sucessfully chosen!')
        guessingWord =  guessingWordInputValue;
    }
}

function submitGuessWordle() {
    let currentGuess: string = '';
    let wordleGridObject: WordleGrid = new WordleGrid();
    const guessedWordInputValue: string = (document.getElementById('guessInput') as HTMLInputElement).value;
    if(guessedWordInputValue.length != 5) {
        alert('Choose a 5 letter word!')
    } else {
        const numberOfGuessesLeftDiv = (document.getElementById('numberOfGuessesLeftDisplayDiv') as HTMLDivElement);
        numberOfGuessesLeftDiv.innerText = (Number.parseInt(numberOfGuessesLeftDiv.innerText) + 1).toString();
        currentGuess = guessedWordInputValue
        for(let i = 0; i < 5; i++) {
            if(guessingWord == currentGuess) {
                alert('Nice, You found the word!');
                for(let i = 0; i < 5; i++) {
                    const currentDiv = (document.getElementById((Number.parseInt(numberOfGuessesLeftDiv.innerText) - 1).toString() + '_' + i.toString()) as HTMLDivElement);
                    currentDiv.innerHTML = `<div class="border border-b-emerald-700 rounded-sm p-2 bg-green-600">${currentGuess[i]}</div>`;
                }
                break;
            } else if (currentGuess[i] == guessingWord[i]) {
                const currentDiv = (document.getElementById((Number.parseInt(numberOfGuessesLeftDiv.innerText) - 1).toString() + '_' + i.toString()) as HTMLDivElement);
                currentDiv.innerHTML = `<div class="border border-b-emerald-700 rounded-sm p-2 bg-green-600">${currentGuess[i]}</div>`;
                // wordleGridObject.elements[i][Number.parseInt(numberOfGuessesLeftDiv.innerText)] = guessingWord[i]
                // wordleGridObject.drawGrid(document, 'displayDiv', 'p-5 m-2');
            } else if (currentGuess[i] == guessingWord[0] || currentGuess[i] == guessingWord[1] || currentGuess[i] == guessingWord[2] || currentGuess[i] == guessingWord[3] || currentGuess[i] == guessingWord[4]) {
                const currentDiv = (document.getElementById((Number.parseInt(numberOfGuessesLeftDiv.innerText) - 1).toString() + '_' + i.toString()) as HTMLDivElement);
                currentDiv.innerHTML = `<div class="border border-b-emerald-700 rounded-sm p-2 bg-yellow-300">${currentGuess[i]}</div>`;
            } else if (currentGuess[i] != guessingWord[0] || currentGuess[i] != guessingWord[1] || currentGuess[i] != guessingWord[2] || currentGuess[i] != guessingWord[3] || currentGuess[i] != guessingWord[4]) {
                const currentDiv = (document.getElementById((Number.parseInt(numberOfGuessesLeftDiv.innerText) - 1).toString() + '_' + i.toString()) as HTMLDivElement);
                currentDiv.innerHTML = `<div class="border border-b-emerald-700 rounded-sm p-2 bg-red-600">${currentGuess[i]}</div>`;
            }
        }
    }
}

