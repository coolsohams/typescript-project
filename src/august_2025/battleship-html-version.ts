class Player {
    name: string | undefined;
    playerSelections: Array<string | null> | undefined;
    numberOfCorrectGuesses: number = 0;
    guesses: Array<string> = [];
    
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

function submitPlayer1Guess(player1GuessId: string, divId: string) {
    if(player2 && player1) {
        submitGuess(player1GuessId, player1 ,player2)
    } else {
        alert("Invalid player 1 information");
    }
    const divShowGuesses = getDivElement(divId);
    divShowGuesses.innerText = player1?.guesses.toString()?? "";
}

function submitPlayer2Guess(player2GuessId: string, divId: string) {
    if(player1 && player2) {
        submitGuess(player2GuessId, player2 ,player1)
    } else {
        alert("Invalid player 2 information");
    }
    const divShowGuesses = getDivElement(divId);
    divShowGuesses.innerText = player2?.guesses.toString()?? "";
}

function submitGuess(player1GuessId: string, guessingPlayer: Player, player: Player) {
    const guessInputElement = getInputValue(player1GuessId)
    const guess = guessInputElement;
    const playerSelections = player.playerSelections?? [];
    const returnValue: number = findPositionInArrayBattleship(playerSelections, guess)?? -1;
    
    guessingPlayer.guesses.push(guess);
    
    if(returnValue != undefined) {
        if(returnValue > 3) {
            alert("Nice try! but your guess is wrong.")
        } else {
            if(player.playerSelections) {
                player.playerSelections[returnValue] = null;
                if(guessingPlayer.numberOfCorrectGuesses != undefined ) {
                    if(guessingPlayer.numberOfCorrectGuesses < 4) {
                        alert(`Nice! You guessed it. ${playerSelections.length -  guessingPlayer.numberOfCorrectGuesses - 1} more to go.`)
                    }
                    guessingPlayer.numberOfCorrectGuesses++;
                }
            }
        }
    } else {
        alert("Invalid Selection.")
    }
    
    if(checkArrayIsAllNull(player2?.playerSelections?? []) == true) {
        alert(`GAME OVER! PLAYER 1 WINS!`)
    } else if(checkArrayIsAllNull(player1?.playerSelections??[]) == true) {
        alert(`GAME OVER! PLAYER 2 WINS!`)
    }
    resetInputValue(player1GuessId);
}

function resetGame() {
    player1 = undefined;
    player2 = undefined;
    battleShipGame = undefined;
    disbleButton("startButton");
    disbleButton("player1Submit");
    disbleButton("player2Submit");
}

function startGame() {
    battleShipGame = new BattleshipGameHtml(player1, player2);
    enableButton("player1Submit");
    enableButton("player2Submit");
}

function enableButton(buttonId: string) {
    const btn = (document.getElementById(buttonId) as HTMLButtonElement);
    btn.disabled = false;
}

function disbleButton(buttonId: string) {
    const btn = (document.getElementById(buttonId) as HTMLButtonElement);
    btn.disabled = true;
}

function showChoices(player: string, divId: string) {
    const divIdVar = getDivElement(divId);
    let playChoices:string = '';
    
    if(player == 'player1') {
        playChoices = player1?.playerSelections?.toString()?? '';
    } else if(player == 'player2') {
        playChoices = player2?.playerSelections?.toString()?? '';
    }
    
    divIdVar.innerText = playChoices;
}

function hideChoices(divId: string) {
    const divIdVar = getDivElement(divId);
    divIdVar.innerText = '';
}

function removeSelection(arr: Array<string | null>, removeVar: string) {
    let index: number = findPositionInArrayBattleship(arr, removeVar);
    arr.splice(index, 1);
    return arr;
}

function enableStartButtom() {
    if(player1 && player1.playerSelections && player1.playerSelections?.length == 4 && player1 && player2?.playerSelections?.length == 4) {
        enableButton('startButton');
    }
}

function selectGridItem1(event: any) {
    const selectedValue = event.target.innerText;
    const player1Name = getInputValue('player1Name');
    if(player1 == undefined) {
        player1 = new Player(player1Name, []);
    }
    
    if(event.target.className.includes('bg-green-400')) {
        event.target.className = 'border border-b-emerald-700 bg-red-400 rounded-sm p-2';
        if(player1.playerSelections != null) {
            player1.playerSelections = removeSelection(player1.playerSelections, selectedValue);
        }
    } else {
        if(player1?.playerSelections != null && player1?.playerSelections?.length >= 4) {
            alert("You have selected maximum choices.")
        } else {
            event.target.className = 'border border-b-emerald-700 bg-green-400 rounded-sm p-2';
            player1?.playerSelections?.push(selectedValue);
            enableStartButtom();
        } 
    }
}

function selectGridItem2(event: any) {
    const selectedValue = event.target.innerText;
    const player2Name: string = getInputValue('player2Name')
    if(player2 == undefined) {
        player2 = new Player(player2Name, []);
    }
    
    if(event.target.className.includes('bg-green-400')) {
        event.target.className = 'border border-b-emerald-700 bg-red-400 rounded-sm p-2';
        if(player2.playerSelections != null) {
            player2.playerSelections = removeSelection(player2.playerSelections, selectedValue);
        }
    } else {
        if(player2?.playerSelections != null && player2?.playerSelections?.length >= 4) {
            alert("You have selected maximum choices.")
        } else {
            event.target.className = 'border border-b-emerald-700 bg-green-400 rounded-sm p-2';
            player2?.playerSelections?.push(selectedValue);
            enableStartButtom();
        }
    }
}

const choices: HTMLCollectionOf<Element> = document.getElementsByClassName('choice');
const choices2: HTMLCollectionOf<Element> = document.getElementsByClassName('choice2');

for(let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', selectGridItem1);
}

for(let j = 0; j < choices2.length; j++) {
    choices2[j].addEventListener('click', selectGridItem2);
}