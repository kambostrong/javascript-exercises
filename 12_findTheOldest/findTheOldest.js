const findTheOldest = function(people) {
	function getAge(death, birth){
		if (death === undefined){
			return ((new Date().getFullYear()) - birth);
		}
		else return (death - birth);
	}
	
	function callbackFN(accum, curr){
		const oldestAge = getAge(accum.yearOfDeath, accum.yearOfBirth);
		const currAge = getAge(curr.yearOfDeath, curr.yearOfBirth);
		if (oldestAge > currAge){
			return accum;
		} else return curr;
	}

	return people.reduce(callbackFN);

};

// Do not edit below this line
module.exports = findTheOldest;
