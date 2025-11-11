class TicTacToeGame {
    private prompts = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit;
    currentPlayer: string = 'X'
    grid: Array<Array<null | string>> = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    
    startGame() {
        for(let i = 0; i < 9; i++) {
            let currentPlayerSelection = this.prompts(`Player ${this.currentPlayer}, Enter your Location: `);
            let positionX = Number.parseInt(currentPlayerSelection[0]);
            let positionY = Number.parseInt(currentPlayerSelection[1]);
            this.grid[positionX][positionY] = this.currentPlayer;

            if(this.currentPlayer == 'X') {
                this.currentPlayer = 'O'
            } else {
                this.currentPlayer = 'X';
            }
            console.log(this.grid);
        }
    }
    
    checkForWinner() {
        
    }
    
}

let ticTacToeObject: TicTacToeGame = new TicTacToeGame();

ticTacToeObject.startGame();