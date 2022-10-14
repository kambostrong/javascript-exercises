var array;
var result = '';
var arrayLength;
var combinedResult = '';
//STRING STARTS AS NORMAL WORD, FEED BACK THE REVERSE
//EG, it's fed 'hello' and you need to give back 'olleh'
//As an array, hello has 5 characters which means an array length of 5
//----- H 0    E 1    L 2    L 3    O 4
//the reverse would be
//----- 43210 OLLEH


const reverseString = function(string) {
////THIS WORKS
    array = string.split('');
    arrayLength = array.length;
    array = array.reverse();
    result = array.join("");
////THIS WORKS
    //array = string.split('');
    // result = array[arrayLength - 1];
    //  for (arrayLength - 1; arrayLength >= 0; arrayLength - 1) {
    //     result = result + array[arrayLength - 1]
    //   return result; 
    //  }

   
     






    // arrayLength = array.length;

    // result += array[arrayLength - 1];
    // //combinedResult = combinedResult + result;
    // arrayLength = --arrayLength;

    // result += array[arrayLength - 1];
    // //combinedResult = combinedResult + result;
    // arrayLength = --arrayLength;

    // result += array[arrayLength - 1];
    // //combinedResult = combinedResult + result;
    // arrayLength = --arrayLength;

    // result += array[arrayLength - 1];
    // //combinedResult = combinedResult + result;
    // arrayLength = --arrayLength;

    // result += array[arrayLength - 1];
    // //combinedResult = combinedResult + result;
    // arrayLength = --arrayLength;

    return result;
};

// Do not edit below this line
module.exports = reverseString;
