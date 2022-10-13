//Write a function that simply repeats the string a given number of times:
//repeatString('hey', 3) // returns 'heyheyhey'
//
let result;
let resultToAdd;
const repeatString = function(string, num) {
    result = string;
    for (; num > 1; num--){
        result = result + string;
    } 
    if (string == undefined){
        return result;
    }
    if (num === 0){
        return "";
    } else if (num < 0){
        return "ERROR";
    } else {return result;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
