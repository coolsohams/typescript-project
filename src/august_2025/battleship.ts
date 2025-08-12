class BattleshipGame {
    private prompts = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit


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

    choosePositions(playerName: string) {
        let playerPlacementArray: Array<string> = [];

        for(let i: number = 0; i <= 3; i++) {
            let currentPlayerPlacement: string = this.prompts(`${playerName}, choose placement #${i+1} (Ex: A1): `);
            const firstCharacter = currentPlayerPlacement[0];
            //Improve the code to check for adjacent value.
            if(firstCharacter != "A" && firstCharacter != "B" && firstCharacter != "C" && firstCharacter != "D" && firstCharacter != "E") {
                console.log("You didn't choose a valid letter for your placement. Game will restart shortly.");
                this.startGame();
            } 
            
            if(Number.parseInt(currentPlayerPlacement[1]) > 5 && Number.parseInt(currentPlayerPlacement[1]) < 1) {
                console.log("You didn't choose a valid number for your placement. Game will restart shortly.");
                this.startGame();
            }
            playerPlacementArray.push(currentPlayerPlacement);
        }
        return playerPlacementArray;
    }
    
    startGame() {
        let player1Name: string;
        let player2Name: string;
        player1Name = this.prompts("What is player 1 name? ")
        player2Name = this.prompts("What is player 2 name? ")
        console.log(`Welcome ${player1Name} and ${player2Name}, Ready to play a mini game of battleship?\n`)
        console.log(`The rules are simple. You get 4 placements that you can place on the grid arywhere. Then player 1 which in this case is ${player1Name} will be first to guess player 2's (${player2Name}) locations on the grid.`)
        let startGameVariable: string = "";
        startGameVariable = this.prompts("Are you ready to play? Enter Key[1] for 'YES' or Key [2] for 'NO' Note: Selecting 2 will restart the whole game. ")
        
        if(startGameVariable == "1") {
            let player1Selections: Array<string | null> = this.choosePositions(player1Name);
            let player2Selections: Array <string | null> = this.choosePositions(player2Name);
            console.log("Alright, now that everyone has picked let's start guessing.")
            console.log(`Your first, ${player1Name}.`)
            let player1Guess: string = "";
            let player2Guess: string = "";
            let i1: number = 1;
            let i2: number = 1;
            while(true) {
                player1Guess = this.prompts(`What is your guess, ${player1Name}? `);
                    if(this.findPositionInArray(player2Selections,player1Guess) > 3) {
                        console.log("Nice try! but your guess is wrong.")
                    } else {
                        player2Selections[this.findPositionInArray(player2Selections, player1Guess)] = null;
                        if(i1 != 4) {
                            console.log(`Nice! You guessed it. ${player2Selections.length - i1} more to go.`)
                        }
                        i1++;
                        if(this.checkArrayIsAllNull(player2Selections) == true) {
                            console.log("GAME OVER! PLAYER 1 WINS!")
                            break;
                        }
                    }
                player2Guess = this.prompts(`What is your guess, ${player2Name}? `);
                    if(this.findPositionInArray(player1Selections,player2Guess) > 3) {
                        console.log("Nice try! but your guess is wrong.")
                    } else {
                        player1Selections[this.findPositionInArray(player1Selections, player2Guess)] = null;
                        if(i2 != 4) {
                            console.log(`Nice! You guessed it. ${player2Selections.length - i1} more to go.`)
                        }
                        i2++;
                        if(this.checkArrayIsAllNull(player1Selections) == true) {
                            console.log("GAME OVER! PLAYER 2 WINS!")
                            break;
                        }
                    }
            }
        } else if (startGameVariable == "2") {
            this.startGame();
        }
    }
}

let testObject3: BattleshipGame = new BattleshipGame();
testObject3.startGame();