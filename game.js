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
    let guesses = 10;
    let lettersGuessed = [];
    let wordBank = wordbank.newWord.wordBank;
    let currentWord = null;

    let startGame = () => {

    if (lettersGuessed.length > 0){
        this.lettersGuessed = [];
        newGame();
    }
let newGame = () => {
    if (this.guesses === 10){
        console.log("Wlcome to the Silo's")
        let randomNum = Math.floor(Math.random() * wordBank.length);
        currentWord = new word(wordBank[randomNum]);
        currentWord.getLetters();
        // console log blanks
        console.log(currentWord.showLetter());
        andAgain();
    } else {
        let guesses = 10;
        newGame();
    }
}
let andAgain = () => {
    let _this = this;

    inquirer.prompt([{
        name: "guess",
        type: "input",
        message: "Pick a letter"
    }]).then((character) =>{
        let currentChoice = (guess.character).toLowerCase;
        let alreadyGuessed = false;
        for(i = 0; i < lettersGuessed.length; i++);{
            if (currentChoice === lettersGuessed.length[i]){
                alreadyGuessed = true;
            }
        }
        if(alreadyGuessed === false){
            lettersGuessed.push(currentChoice);
        }
    })
}
}
}