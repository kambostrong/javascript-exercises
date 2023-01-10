const add = function(value1, value2) {
  return value1 + value2;	
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(array) {
    return array.reduce((cumul, current) => (cumul + current), 0);   
};


const multiply = function(array) {
  return array.reduce((cumul, current) => (cumul * current));
};

const power = function(number, power) {
	return (number ** power);
};

const factorial = function(number) {
  if(number === 1){
    return number;
  } else if(number === 0){
    return 1;
  } 
  return number * factorial(number-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
