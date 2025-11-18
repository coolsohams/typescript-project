class TicTacToeGrid {
    elements: Array<Array<string>> = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
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
        return `<div id="${divId}" class=" flex flex-col border border-b-emerald-700 bg-red-400 rounded-sm max-w-10 max-h-10 min-h-10 min-w-10 text-center justify-center ${className}">${value}</div>`;
    }
}

class TicTacToeGameHTML {
    currentPlayer: string = 'X';
    grid: TicTacToeGrid = new TicTacToeGrid();
    
    selectElement(event: any) {
        const clickedDiv: HTMLDivElement = event.target;
        clickedDiv.innerText = this.currentPlayer;
        
        const divIdSplitted = clickedDiv.id.split('_');
        let x = Number.parseInt(divIdSplitted[0]);
        let y = Number.parseInt(divIdSplitted[1]);
        
        this.grid.elements[x][y] = this.currentPlayer;
        const checkIsPlayerWinner: boolean =  this.checkForWinner();
        
        if(checkIsPlayerWinner) {
            console.log(`Player ${this.currentPlayer} is Winner!`);   
            alert(`Player ${this.currentPlayer} is Winner!`);   
        } else {
            if(this.currentPlayer == 'X') {
                this.currentPlayer = 'O';
            } else {
                this.currentPlayer = 'X';
            } 
        }
        
        
    }
    
    private checkForWinner(): boolean {
        // Checks column values.
        for(let c = 0; c < 3; c++) {
            let didColumnMatch: boolean = false;
            if(this.grid.elements[0][c] == this.currentPlayer && this.grid.elements[1][c] == this.currentPlayer && this.grid.elements[2][c] == this.currentPlayer) {
                didColumnMatch = true;  
            }
            if(didColumnMatch) {
                return true;
            }
        }
        
        
        // Checks row values.
        for(let r = 0; r < 3; r++) {
            let didRowMatch: boolean = false;
            if(this.grid.elements[r][0] == this.currentPlayer && this.grid.elements[r][1] == this.currentPlayer && this.grid.elements[r][2] == this.currentPlayer) {
                didRowMatch = true;
            }
            if(didRowMatch) {
                return true;
            }
            
        }
        
        if((this.grid.elements[0][0] == this.currentPlayer && this.grid.elements[1][1] == this.currentPlayer && this.grid.elements[2][2] == this.currentPlayer) 
            || (this.grid.elements[2][0] == this.currentPlayer && this.grid.elements[1][1] == this.currentPlayer && this.grid.elements[0][2] == this.currentPlayer)
    ) {
        return true;
    } 
    
    return false;
}

}

let ticTacToeObjectHTML: TicTacToeGameHTML = new TicTacToeGameHTML();
ticTacToeObjectHTML.grid.drawGrid(document, 'displayGridDiv', 'bg-red-400 ticTacToe');


let ticTacToeDivs: HTMLCollectionOf<Element> = document.getElementsByClassName('ticTacToe');

const selectFunction = (event: any) => {
    ticTacToeObjectHTML.selectElement(event);
}

for(let i = 0; i < ticTacToeDivs.length; i++) {
    ticTacToeDivs[i].addEventListener('click', selectFunction);
}





