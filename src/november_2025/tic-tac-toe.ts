class TicTacToeGame {
    private prompts = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit;
    currentPlayer: string = 'X'
    grid: Array<Array<string | null>> = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    // printColumn(columnIndex: number) {
    //     for(let i = 0; i < 3; i++) {
    //         console.log(this.grid[i][columnIndex]);
    //     }
    // }
    
    // printRow(rowIndex: number) {
    //     for(let i = 0; i < 3; i++) {
    //         console.log(this.grid[rowIndex][i]);
    //     }
    // }
    
    
    startGame() {
        for(let i = 0; i < 9; i++) {
            let currentPlayerSelection = this.prompts(`Player ${this.currentPlayer}, Enter your Location: `);
            let positionX = Number.parseInt(currentPlayerSelection[0]);
            let positionY = Number.parseInt(currentPlayerSelection[1]);
            this.grid[positionX][positionY] = this.currentPlayer;
            
            console.log(this.grid[0]);
            console.log(this.grid[1]);
            console.log(this.grid[2]);

            let checkIsWinner: boolean = this.checkForWinner();

            if(checkIsWinner) {
                break;
            }
            
            if(this.currentPlayer == 'X') {
                this.currentPlayer = 'O'
            } else {
                this.currentPlayer = 'X';
            }
        }
    }
    
    checkForWinner(): boolean {
        // Checks column values.
        for(let c = 0; c < 3; c++) {
            let didColumnMatch: boolean = false;
            if(this.grid[0][c] == this.currentPlayer && this.grid[1][c] == this.currentPlayer && this.grid[2][c] == this.currentPlayer) {
                didColumnMatch = true;
            }
            if(didColumnMatch) {
                console.log(`Player ${this.currentPlayer} is Winner!`);
                return true;
            }
        }
        
        
        // Checks row values.
        for(let r = 0; r < 3; r++) {
            let didRowMatch: boolean = false;
            if(this.grid[r][0] == this.currentPlayer && this.grid[r][1] == this.currentPlayer && this.grid[r][2] == this.currentPlayer) {
                didRowMatch = true;
            }
            if(didRowMatch) {
                console.log(`Player ${this.currentPlayer} is Winner!`);
                return true;
            }
            
        }

        if((this.grid[0][0] == this.currentPlayer && this.grid[1][1] == this.currentPlayer && this.grid[2][2] == this.currentPlayer) || (this.grid[2][0] == this.currentPlayer && this.grid[1][1] == this.currentPlayer && this.grid[0][2] == this.currentPlayer)) {
            console.log(`Player ${this.currentPlayer} is Winner!`);
            return true;
        } 
        
        return false;
    }
    
}

let ticTacToeObject: TicTacToeGame = new TicTacToeGame();

ticTacToeObject.startGame();