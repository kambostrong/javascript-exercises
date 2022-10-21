


const sumAll = function(a, z) {
let smaller = 0;
let larger = 0;
let finalSum = 0;
if (a > z){
    larger = a;
    smaller = z;
} else if (z > a){
    larger = z;
    smaller = a;
};


    for (let counter = smaller; counter < (larger + 1); counter++) {
        finalSum += counter;
    }


return finalSum;

};
//sumAll(1,4);


//Do not edit below this line
module.exports = sumAll;