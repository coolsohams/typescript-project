enum Color {
    RED = 'bg-red-600',
    GREEN = 'bg-green-600',
    YELLOW = 'bg-yellow-300',
    EMPTY = ''
}

class GridElement {
    value: string = '';
    color: Color = Color.EMPTY;
    constructor(value?: string, color?: Color) {
        this.value = value!;
        this.color = color!;
    }
}

let emptyGridElemt: GridElement = new GridElement('', Color.EMPTY);
class WordleGrid {
    guessCounter: number = 0;
    elements: Array<Array<GridElement>> = [
        [emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt],
        [emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt],
        [emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt],
        [emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt],
        [emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt, emptyGridElemt]
    ];
    
    constructor(elements?:  Array<Array<GridElement>>) {
        if(elements) {
            this.elements = elements;
        }
    }
    
    drawGrid(document: Document, divId: string) {
        let gridHtml: string = '';
        for(let i: number = 0; i < this.elements.length; i++) {
            
            let row: Array<GridElement> = this.elements[i];
            let rowHtml: string =  ``;
            for(let j: number = 0; j < row.length; j++) {
                let currentDivIdCoordinate: string = i.toString() + '_' + j.toString() 
                rowHtml = rowHtml + this.createGridItem(row[j].color, row[j].value, currentDivIdCoordinate);
            }
            
            gridHtml =  gridHtml + `
            <!--Row 1 Div-->
            <div class="gap-2 p-2 flex flex-row">
                ${rowHtml}
            </div>`
        }
        
        const displayDiv =  document.getElementById(divId) as HTMLDivElement;
        if(displayDiv) {
            displayDiv.innerHTML =  gridHtml;
        }
    }
    
    createGridItem(className: string, value: string, divId: string): string {
        return `<div id="${divId}" class="border border-b-emerald-700 rounded-sm p-5 max-h-4 max-w-4 flex items-center ${className}">${value}</div>`;
    }
}

let guessingWord: string = '';
let wordleGridObject: WordleGrid = new WordleGrid();

wordleGridObject.drawGrid(document, 'displayDiv');
function submitWord() {
    const guessingWordInputValue: string = (document.getElementById('wordInput') as HTMLInputElement).value;
    if(guessingWordInputValue.length != 5) {
        alert('Choose a 5 letter word!')
    } else {
        alert('Word sucessfully chosen!')
        guessingWord =  guessingWordInputValue.toUpperCase();
    }
}

function submitGuessWordle() {
    let guessedWordInputValue: string = (document.getElementById('guessInput') as HTMLInputElement).value.toUpperCase();
    
    if(guessedWordInputValue.length != 5) {
        alert('Choose a 5 letter word!')
    } else {
        const numberOfGuessesLeftDiv = (document.getElementById('numberOfGuessesLeftDisplayDiv') as HTMLDivElement);
        numberOfGuessesLeftDiv.innerText = (wordleGridObject.guessCounter + 1).toString();
        if(guessingWord == guessedWordInputValue) {
            alert('Nice, You found the word!');
            const array: Array<GridElement> = [];
            for(let i = 0; i < 5; i++) {
                const gridElement: GridElement = new GridElement(guessedWordInputValue[i], Color.GREEN);
                array.push(gridElement);
            }
            wordleGridObject.elements[wordleGridObject.guessCounter] = array;
        }  else {
            const array: Array<GridElement> = [];
            for(let i = 0; i < 5; i++) {
                if (guessedWordInputValue[i] == guessingWord[i]) {
                    const gridElement: GridElement = new GridElement(guessedWordInputValue[i], Color.GREEN);
                    array.push(gridElement);
                } else if (guessedWordInputValue[i] == guessingWord[0] || guessedWordInputValue[i] == guessingWord[1] || guessedWordInputValue[i] == guessingWord[2] || guessedWordInputValue[i] == guessingWord[3] || guessedWordInputValue[i] == guessingWord[4]) {
                    const gridElement: GridElement = new GridElement(guessedWordInputValue[i], Color.YELLOW);
                    array.push(gridElement);
                } else if (guessedWordInputValue[i] != guessingWord[0] || guessedWordInputValue[i] != guessingWord[1] || guessedWordInputValue[i] != guessingWord[2] || guessedWordInputValue[i] != guessingWord[3] || guessedWordInputValue[i] != guessingWord[4]) {
                    const gridElement: GridElement = new GridElement(guessedWordInputValue[i], Color.RED);
                    array.push(gridElement);
                }
            }
            wordleGridObject.elements[wordleGridObject.guessCounter] = array;
        }      
        wordleGridObject.drawGrid(document, 'displayDiv');
        wordleGridObject.guessCounter++;
    }
}

