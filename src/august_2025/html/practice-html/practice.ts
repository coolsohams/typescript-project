
class SpliaceAndSplit {
    private oddColor = `bg-amber-400`;
    private evenColor = `bg-green-400`;

    constructor(oddColor: string, evenColor: string) {
        this.oddColor = oddColor;
        this.evenColor = evenColor;
    }

    findPositionInArray(arr: Array<any>, findingVariable: any) : number {
        let i: number = 0
        for(i; i <= arr.length; i++) {
            if(arr[i] == findingVariable) {
                break;
            }
        }
        return i;
    }
    
    displayItems(inputId: string, targetDivId: string) {
        const inputSplitValues = (document.getElementById(inputId) as HTMLInputElement).value;
        const myArray: Array<string> = inputSplitValues.split(',');
        const targetDiv = document.getElementById(targetDivId) as HTMLDivElement;
        
        for(let i: number = 1; i <= myArray.length; i++) {
            let currentColour: string = '';
            if(i % 2 == 0) {
                currentColour = this.evenColor;
            } else {
                currentColour = this.oddColor;
            }
            
            targetDiv.innerHTML = targetDiv.innerHTML + `<div class="border-2 p-1 ${currentColour} rounded-sm"> ${myArray[i - 1]} </div>`;
        }
    }
    
    displaySplitValues() {
        this.displayItems('splitValues', 'splitDiv');
    }
    
    displaySplicingValues() {
        this.displayItems('spliceValues', 'splicingDiv');
    }
    
    displaySplicedValues() {
        const inputSplitValues = (document.getElementById('splitValues') as HTMLInputElement).value;
        const inputSpliceValues = (document.getElementById('spliceValues') as HTMLInputElement).value;
        const myArray: Array<string> = inputSplitValues.split(',')
        const myArray2: Array<string> = inputSpliceValues.split(',')
        
        for(let j: number = 0; j <= myArray2.length - 1; j++) {
            let startingIndex: number = this.findPositionInArray(myArray, myArray2[j]);
            myArray.splice(startingIndex, 1);
        }
        
        (document.getElementById('splitValues') as HTMLInputElement).value = myArray.toString();
        
        this.displayItems('splitValues', 'splicedDiv');
    }
    
}

const spliaceAndSplit: SpliaceAndSplit = new SpliaceAndSplit(`bg-blue-400`, `bg-red-400`);