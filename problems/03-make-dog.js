class Dog {
	constructor(name){
		this.name = name

	}
	static makeJet(){
		const Jet = new Dog('Jet');
		// Jet.name = "Jet"
		return Jet
	}
	changeName(newName){
		// this.name = newName
		// return this.name
		return this.name = newName;
	}
	speak(word){
		return `${this.name} says ${word}`
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
