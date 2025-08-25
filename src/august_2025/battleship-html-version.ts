class Player {
    name: string | undefined;
    playerSelections: Array<string | null> | undefined;
    numberOfCorrectGuesses: number = 0;
    guesses: Array<string> = [];
    arrayOfCorrectGuesses: Array<string> = [];
    
    constructor(name: string, playerSelections: Array<string | null> ) {
        this.name = name;
        this.playerSelections = playerSelections;
    }
}

class BattleshipGameHtml {
    player1: Player | undefined;
    player2: Player | undefined;
    
    constructor(p1: Player | undefined, p2: Player | undefined) {
        this.player1 = p1;
        this.player2 = p2;
    }
}

function checkArrayIsAllNull(arr: Array<any>) {
    if(arr[0] == null && arr[1] == null && arr[2] == null && arr[3] == null) {
        return true;
    } else {
        return false;
    }
}

function findPositionInArrayBattleship(arr: Array<any>, findingVariable: any) : number {
    let i: number = 0
    for(i; i <= 3; i++) {
        if(arr[i] == findingVariable) {
            break;
        }
    }
    return i;
}

function getInputValue(inputElementId: string) {
    const inputElement = document.getElementById(inputElementId) as HTMLInputElement;
    return inputElement.value;
}

function getDivElement(inputElementId: string) {
    const divElement = document.getElementById(inputElementId) as HTMLDivElement;
    return divElement;
}

function resetInputValue(inputElementId: string) {
    const inputElement = document.getElementById(inputElementId) as HTMLInputElement;
    inputElement.value = '';
}

let player1: Player | undefined;
let player2: Player | undefined;
let battleShipGame: BattleshipGameHtml | undefined;

function displayGuesses(divId: string, player: Player) {
    const divShowGuesses = getDivElement(divId);
    divShowGuesses.innerHTML = '';
    if(player?.guesses && player.arrayOfCorrectGuesses) {
        for (let index = 0; index < player.guesses.length; index++) {
            let currentGuessValue: string = player.guesses[index];
            if(player.arrayOfCorrectGuesses.includes(currentGuessValue)) {
                divShowGuesses.innerHTML = divShowGuesses.innerHTML + `<div class="border border-b-emerald-700 bg-green-400 rounded-sm p-2 m-1">${currentGuessValue}</div>`;
            } else {
                divShowGuesses.innerHTML = divShowGuesses.innerHTML + `<div class="border border-b-emerald-700 bg-red-400 rounded-sm p-2 m-1">${currentGuessValue}</div>`;
            }
        }
    }
}

function submitPlayer1Guess(event: any) {
    const guess = event.target.innerText;
    
    if(player2 && player1) {
        submitGuess(guess, player1 ,player2);
    } else {
        alert("Invalid player 1 information");
    }
    
    if(player1) {
        displayGuesses('player1GuessesDiv', player1);
    }
}

function submitPlayer2Guess(event: any) {
    const guess = event.target.innerText;

    if(player1 && player2) {
        submitGuess(guess, player2 ,player1)
    } else {
        alert("Invalid player 2 information");
    }
    
    if(player2) {
        displayGuesses('player2GuessesDiv', player2);
    }
}

function submitGuess(guess: string, guessingPlayer: Player, opponentPlayer: Player) {
    const playerSelections = opponentPlayer.playerSelections?? [];
    const returnValue: number = findPositionInArrayBattleship(playerSelections, guess)?? -1;
    
    if(guess == '') {
        alert('Invalid Guess.')
    } else {
        guessingPlayer.guesses.push(guess);
        if(returnValue != undefined) {
            if(!(returnValue > 3)) {
                if(opponentPlayer.playerSelections) {
                    opponentPlayer.playerSelections[returnValue] = null;
                    if(guessingPlayer.numberOfCorrectGuesses != undefined ) {
                        if(guessingPlayer.numberOfCorrectGuesses < 4) {
                            alert(`Nice! You guessed it. ${playerSelections.length -  guessingPlayer.numberOfCorrectGuesses - 1} more to go.`)
                            guessingPlayer.arrayOfCorrectGuesses.push(guess);
                        }
                        guessingPlayer.numberOfCorrectGuesses++;
                    }
                }
            } 
        }
    }
    
    if(checkArrayIsAllNull(player2?.playerSelections?? []) == true) {
        alert(`GAME OVER! PLAYER 1 WINS!`)
    } else if(checkArrayIsAllNull(player1?.playerSelections??[]) == true) {
        alert(`GAME OVER! PLAYER 2 WINS!`)
    }
}

function resetGame() {
    const choicesPlayer1 = document.getElementsByClassName('choice');
    const choicesPlayer2 = document.getElementsByClassName('choice2');
    battleShipGame = undefined;
    if(player1) {
        for(let i: number = 0; i < choicesPlayer1.length; i++) {
            deSelectItem(choicesPlayer1[i], player1, choicesPlayer1[i].innerHTML);
        }
    }
    
    if(player2) {
        for(let j: number = 0; j < choicesPlayer2.length; j++) {
            deSelectItem(choicesPlayer2[j], player2, choicesPlayer2[j].innerHTML);
        }
    }
    
    player1 = undefined;
    player2 = undefined;
    disbleButton("startButton");
}

function startGame() {
    battleShipGame = new BattleshipGameHtml(player1, player2);
    enableButton("player1Submit");
    enableButton("player2Submit");
    enableButton("player1Guess");
    enableButton("player2Guess");
}

function enableButton(buttonId: string) {
    const btn = (document.getElementById(buttonId) as HTMLButtonElement);
    btn.disabled = false;
}

function disbleButton(buttonId: string) {
    const btn = (document.getElementById(buttonId) as HTMLButtonElement);
    btn.disabled = true;
}

function showChoices(player: string, divId: string, gridDivId: string) {
    const divIdVar = getDivElement(divId);
    let playChoices:string = '';
    
    if(player == 'player1') {
        playChoices = player1?.playerSelections?.toString()?? '';
    } else if(player == 'player2') {
        playChoices = player2?.playerSelections?.toString()?? '';
    }
    
    divIdVar.innerText = playChoices;
    
    const gridDiv = getDivElement(gridDivId) as HTMLDivElement;
    gridDiv.className = 'flex justify-center m-2 rounded-md p-2 space-x-2';
}

function hideChoices(choiceTextdivId: string, gridDivId: string) {
    const divIdVar = getDivElement(choiceTextdivId) as HTMLDivElement;
    divIdVar.innerText = '';
    
    const gridDiv = getDivElement(gridDivId) as HTMLDivElement;
    gridDiv.className = 'hidden';
}

function removeSelection(arr: Array<string | null>, removeVar: string) {
    let index: number = findPositionInArrayBattleship(arr, removeVar);
    arr.splice(index, 1);
    return arr;
}

function enableStartButton() {
    if(player1 && player1.playerSelections && player1.playerSelections?.length == 4 && player1 && player2?.playerSelections?.length == 4) {
        enableButton('startButton');
    }
}

function selectItem(target: HTMLElement, player: Player, selectedValue: string) {
    if(player?.playerSelections != null && player?.playerSelections?.length >= 4) {
        alert("You have selected maximum choices.")
    } else {
        target.className = 'border border-b-emerald-700 bg-green-400 rounded-sm p-2 choice';
        player?.playerSelections?.push(selectedValue);
        enableStartButton();
    } 
}

function selectGuess(event: any, guessingPlayer: Player, opponentPlayer: Player , guessingPlayerNumber: number) {
    const selectedValue = event.target.innerText;

    event.target.className = `border border-b-emerald-700 bg-green-400 rounded-sm p-2 player${guessingPlayerNumber}Guess`;
    submitGuess(selectedValue, guessingPlayer, opponentPlayer);
}

function deSelectItem(target: Element, player: Player, selectedValue: string) {
    if(battleShipGame == undefined && target) {
        target.className = 'border border-b-emerald-700 bg-red-400 rounded-sm p-2 choice';
        if(player.playerSelections != null) {
            player.playerSelections = removeSelection(player.playerSelections, selectedValue);
        }
        
        if(player.playerSelections && player.playerSelections?.length < 4) {
            disbleButton('startButton');
            disbleButton('player1Submit');
            disbleButton('player2Submit');
            disbleButton('player1Guess');
            disbleButton('player2Guess');
        }
    } else {
        alert("You cannot change choices after you started game. You can reset game to reselect choices.")
    }
    
    
}


function selectGridItem1(event: any) {
    const selectedValue = event.target.innerText;
    const player1Name = getInputValue('player1Name');
    if(player1 == undefined) {
        player1 = new Player(player1Name, []);
    }
    
    if(event.target.className.includes('bg-green-400')) {
        deSelectItem(event.target, player1, selectedValue);
    } else {
        selectItem(event.target, player1, selectedValue);
    }
}

function selectGridItem2(event: any) {
    const selectedValue = event.target.innerText;
    const player2Name: string = getInputValue('player2Name')
    if(player2 == undefined) {
        player2 = new Player(player2Name, []);
    }
    
    if(event.target.className.includes('bg-green-400')) {
        deSelectItem(event.target, player2, selectedValue);
    } else {
        selectItem(event.target, player2, selectedValue);
    }
}

const choices: HTMLCollectionOf<Element> = document.getElementsByClassName('choice');
const choices2: HTMLCollectionOf<Element> = document.getElementsByClassName('choice2');
const guess: HTMLCollectionOf<Element> = document.getElementsByClassName('player1Guess');
const guess2: HTMLCollectionOf<Element> = document.getElementsByClassName('player2Guess');

for(let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', selectGridItem1);
}

for(let j = 0; j < choices2.length; j++) {
    choices2[j].addEventListener('click', selectGridItem2);
}

for(let k = 0; k < guess.length; k++) {
    guess[k].addEventListener('click', submitPlayer1Guess);
}

for(let l = 0; l < choices2.length; l++) {
    guess2[l].addEventListener('click', submitPlayer2Guess);
}


// Practice Code Area

// const practiceDiv = getDivElement('practiceDiv');
// for (let index = 0; index < 5; index++) {
//     practiceDiv.innerText = practiceDiv.innerText + `<div class="border border-blue-500 min-h-10 p-1">Div ${index}</div>`;
// }

// for (let index = 0; index < 5; index++) {
//     practiceDiv.innerHTML = practiceDiv.innerHTML + `<div class="border border-blue-500 min-h-10 p-1">Div ${index}</div>`;
// }