
enum TextColor {
    RED = "\u001b[31m",
    GREEN = "\u001b[32m",
    YELLOW = "\u001b[33m",
    RESET = '\x1b[0m'
}

function getColorText(text: string, color: TextColor) {
    return `${color} ${text} ${TextColor.RESET}`;
}

class WordleGame {
    private prompts = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit;
    startGame() {
        let guessingWord: string = this.prompts('Write a 5 letter word: ');
        guessingWord = guessingWord.toUpperCase();
        if(guessingWord.length != 5){
            console.log("The word you chose is not 5 letters! Game will restart and you can write a 5 letter word.");
            this.startGame()
        } else {
            let didPlayerWin: boolean = false;
            for(let i = 0; i < 5 && !didPlayerWin; i++) {
                let guessedWord: string = this.prompts("Guess a word: ");
                guessedWord = guessedWord.toUpperCase();
                for(let i = 0; i < 5; i++) {
                    if(guessingWord == guessedWord) {
                        console.log('Nice, You found the word!');
                        didPlayerWin = true;
                        break;
                    } else if (guessedWord[i] == guessingWord[i]) {
                        console.log(getColorText(guessedWord[i], TextColor.GREEN))
                    } else if (guessedWord[i] == guessingWord[0] || guessedWord[i] == guessingWord[1] || guessedWord[i] == guessingWord[2] || guessedWord[i] == guessingWord[3] || guessedWord[i] == guessingWord[4]) {
                        console.log(getColorText(guessedWord[i], TextColor.YELLOW))
                    } else if (guessedWord[i] != guessingWord[0] || guessedWord[i] != guessingWord[1] || guessedWord[i] != guessingWord[2] || guessedWord[i] != guessingWord[3] || guessedWord[i] != guessingWord[4]) {
                        console.log(getColorText(guessedWord[i], TextColor.RED))
                    }
                }
            }
        }
    }
}

let wordleObject: WordleGame = new WordleGame();

wordleObject.startGame();
