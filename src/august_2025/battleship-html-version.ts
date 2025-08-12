
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

    checkArrayIsAllNull(arr: Array<any>) {
        if(arr[0] == null && arr[1] == null && arr[2] == null && arr[3] == null) {
            return true;
        } else {
            return false;
        }
    }

    findPositionInArray(arr: Array<any>, findingVariable: any) : number {
        let i: number = 0
        for(i; i <= 3; i++) {
            if(arr[i] == findingVariable) {
                break;
            }
        }
        return i;
    }
}

let player1: Player | undefined;
let player2: Player | undefined;
let battleShipGame: BattleshipGameHtml | undefined;

function savePlayerDetails1(nameId: string, choicesId: string) {
    const name = (document.getElementById(nameId) as HTMLInputElement).value;
    const choices = (document.getElementById(choicesId) as HTMLInputElement).value;
    
    const playerChoices: Array<string> = choices.split(",");
    player1 = new Player(name, playerChoices);

    if(player1 && player2) {
        enableButton("startButton");
    }
}

function savePlayerDetails2(nameId: string, choicesId: string) {
    const name = (document.getElementById(nameId) as HTMLInputElement).value;
    const choices = (document.getElementById(choicesId) as HTMLInputElement).value;

    const playerChoices: Array<string> = choices.split(",");
    player2 = new Player(name, playerChoices);

    if(player1 && player2) {
        enableButton("startButton");
    }
}

function submitPlayer1Guess(player1GuessId: string, divId: string) {
    if(player2 && player1) {
        submitGuess(player1GuessId, player1 ,player2)
    } else {
        alert("Invalid player 1 information");
    }
    const divShowGuesses = document.getElementById(divId) as HTMLDivElement;
    divShowGuesses.innerText = player1?.guesses.toString()?? "";
}

function submitPlayer2Guess(player2GuessId: string, divId: string) {
    if(player1 && player2) {
        submitGuess(player2GuessId, player2 ,player1)
    } else {
        alert("Invalid player 2 information");
    }
    const divShowGuesses = document.getElementById(divId) as HTMLDivElement;
    divShowGuesses.innerText = player2?.guesses.toString()?? "";
}

function submitGuess(player1GuessId: string, guessingPlayer: Player, player: Player) {
    const guessInputElement = (document.getElementById(player1GuessId) as HTMLInputElement);
     const guess = guessInputElement.value;
     const playerSelections = player.playerSelections?? [];
     const returnValue: number = battleShipGame?.findPositionInArray(playerSelections, guess)?? -1;

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

    if(battleShipGame?.checkArrayIsAllNull(player2?.playerSelections?? []) == true) {
        alert(`GAME OVER! PLAYER 1 WINS!`)
    } else if(battleShipGame?.checkArrayIsAllNull(player1?.playerSelections??[]) == true) {
        alert(`GAME OVER! PLAYER 2 WINS!`)
    }
    guessInputElement.value = '';
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

function showChoices(playerInputId:string, divId: string) {
    const playerInput = (document.getElementById(playerInputId) as HTMLInputElement);
    const divIdVar = (document.getElementById(divId) as HTMLDivElement);
    divIdVar.innerText = playerInput.value;
}

function hideChoices(divId: string) {
    const divIdVar = (document.getElementById(divId) as HTMLDivElement);
    divIdVar.innerText = '';
}