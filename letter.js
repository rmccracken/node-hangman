class Letters {
	constructor(letters) {
		this.letter = letters;
		this.visible = false;

		makeVisible = () => {
			if (this.letter === " ") {
				this.visible = true;
				return " ";
			}
			if (this.visible === true) {
				return "_";
			} else {
				return this.letter;
			}
		}

	};
};
module.exports = Letters;
console.log("there are no errors")