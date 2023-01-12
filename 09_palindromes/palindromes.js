const palindromes = function (sentence) {
	let noSym = sentence.replace(/[!,. ]/g, '');
	//removes punctuation and spaces
	noSym = noSym.toLowerCase();
	//converts to lowercase
	noSym = [...noSym];
	//converts string to array
	let noSymReverse = [...noSym].reverse();	
	// //creates duplicate, in reverse
	let stringA = noSym.toString();
	let stringB = noSymReverse.toString();
	//converts to string (adds in commas unfortunately, but not really an issue)
	if (stringA === stringB){
		return true
	}	else {return false}
	
};

// Do not edit below this line
module.exports = palindromes;
