let word = require('./word');
let wordbank = require('./wordbank');
let letter = require('./letter');
let inquirer = require('inquirer');

startApp();
function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "app",
            message: "Are you ready to play Hangman, Fixer-Upper Edition?",
            choices: [
                "yes",
                'no',
            ]
        }
    ]).then((results) => {
        if (results.app === "yes") {
            console.log("Its time to make Chip and JoJo proud!")
            startGame();
        }
        else{
            console.log("What the shiplap is wrong with you?\n If you want come back again sometime")
        }
    })
let startGame = (this) => {
    let _this = this;
    let guesses = 10;
    let lettersGuessed = 0;
    let wordBank = wordbank.newWord.wordBank;

    if (this.lettersGuessed.length > 0){
        this.lettersGuessed = [];
        newGame();
    }
// let newGame = () => {
//     if (this.guesses === 10)
// }
    inquirer.prompt([{
        name: "guess",
        type: "input",
        message: "Pick a letter"
    }]).then((character) =>{
        let currentChoice = (guess.character).toLowerCase;
        let alreadyGuessed = false;
        for(i = 0; i < lettersGuessed.length; i++);
    })
}
}