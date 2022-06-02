class PartyPlanner{
	constructor(guestList = []){
	this.guestList = guestList

	}
	addToGuestList(name){
		return this.guestList.push(name)
	}
	throwParty(){
		if(!this.guestList.length){
			return "Gotta add people to the guest list"
		}
		//If there is one name, I simply greet that one person.
		//If there is more than one name, I greet that one person,
		//And then I "concatenate" the other names to that name string.
		else {
			let welcome = "Welcome to the party "
			this.guestList.forEach((guest, i) => {
				if(i > 0) welcome += " and "
				welcome += guest
			})
			return welcome
		}

	}

}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
