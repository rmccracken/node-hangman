let letters = require('./letters.js');


function word(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = '';
	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new letterCons.letter(this.value[i]));
	}
};