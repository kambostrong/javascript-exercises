let array;
let result = '';
let arrayLength;
let combinedResult = '';
//STRING STARTS AS NORMAL WORD, FEED BACK THE REVERSE
//EG, it's fed 'hello' and you need to give back 'olleh'
//As an array, hello has 5 characters which means an array length of 5
//----- H 0    E 1    L 2    L 3    O 4
//the reverse would be
//----- 43210 OLLEH


const reverseString = function(string) {
    array = string.split('');
    //for (arrayLength = array.length; arrayLength < 0; arrayLength - 1) {
    //    
    //    result = array[arrayLength - 1];
    //    combinedResult = combinedResult + result;
    //    return result;
    //}
    arrayLength = array.length;

    result = array[arrayLength - 1];
    //combinedResult = combinedResult + result;
    arrayLength = --arrayLength;

    result = result + array[arrayLength - 1];
    //combinedResult = combinedResult + result;
    arrayLength = --arrayLength;

    result = result + array[arrayLength - 1];
    //combinedResult = combinedResult + result;
    arrayLength = --arrayLength;

    result = result + array[arrayLength - 1];
    //combinedResult = combinedResult + result;
    arrayLength = --arrayLength;

    result = result + array[arrayLength - 1];
    //combinedResult = combinedResult + result;
    arrayLength = --arrayLength;

    return result;
};

// Do not edit below this line
module.exports = reverseString;
