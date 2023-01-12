const fibonacci = function(number) {
	if (number <= 0){
		return "OOPS"
	}	else {
	let array = [0, 1];
	for(let i = 1; i < number; i++){		  
    array.push(array[i] + array[i-1])		
	}
	return array.pop();
}
};

// Do not edit below this line
module.exports = fibonacci;
