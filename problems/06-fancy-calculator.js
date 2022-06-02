const Calculator = require('./02-calculator')

class FancyCalculator extends Calculator {
	constructor(total = 0) {
		super(total)
		this.total = total
	}
	setTotal(newTotal) {
		return this.total = newTotal
	}
	modulo(num) {
		this.total = this.total % num
		return this.total
	}
	squared() {
		return this.total ** 2
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
