export class Grid {
    elements: Array<Array<string>> = [
        ['A1', 'A2', 'A3', 'A4', 'A5'], 
        ['B1', 'B2', 'B3', 'B4', 'B5'],
        ['C1', 'C2', 'C3', 'C4', 'C5'],
        ['D1', 'D2', 'D3', 'D4', 'D5'],
        ['E1', 'E2', 'E3', 'E4', 'E5']
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
                rowHtml = rowHtml + this.createGridItem(className, row[j]);
            }
            
            gridHtml =  gridHtml + `
            <!--Row 1 Div-->
            <div class="space-y-2">
                ${rowHtml}
            </div>`
        }
        
        const displayDiv =  document.getElementById(divId) as HTMLDivElement;
        if(displayDiv) {
            displayDiv.innerHTML =  gridHtml;
        }
    }
    
    createGridItem(className: string, value: string): string {
        return `<div class="border border-b-emerald-700 bg-red-400 rounded-sm p-2 ${className}">${value}</div>`;
    }
}