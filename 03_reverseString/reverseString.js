let array;
let result;

const reverseString = function(string) {
    array = string.split('');
    arrayLength = array.length;
    for (; arrayLength > 0; arrayLength - 1) {
        result = array[arrayLength];
        arrayLength - 1;
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
