let letters = require('./letter.js');


 Word = (value) => {
	
	let _this = this; 
	this.value = value;
	this.letters = [];
	this.solved =false;

	this.getLetters = () => {
		for (let i = 0; i < _this.word.length; i++){
		let newLetter = new Letter(this.word[i]);
		this.letters.push(newLetter);
		}
	};
	this.letterFound = (letterGuessed) => {
		let eachspace = 0;
		this.letters.forEach((rightLetters) => {
			if (right.letter === letterGuessed){
				rightLetter.visible === true;
				eachspace++;
			}
		})
		return eachspace;
	};
	this.showLetter = () => {
		let show = "";
		letters.forEach((rightLetters) => {
			let display = rightLetter.makeVisible();
			show += display
		});
		return show;
	};
	this.wordFound = () => {
		if(this.letter.every((rightLetters)=>{
			return rightLetter
		})){
			this.solved = true;
			return true;
		}
	};
};
module.exports = Word;