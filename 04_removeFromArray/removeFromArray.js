//expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
//https://dmitripavlutin.com/foreach-iterate-array-javascript/

const removeFromArray = function(array, ...num) {
    //vvWORKS
    // array.splice(num - 1, 1);
    // return array;
    //^^WORKS
   

    ////WORKS
    // function index(item){
    //     array.splice((array.indexOf(item)), 1);
    //     return array;
    // }
    // num.forEach(index);
    // return array;
    ////WORKS

for (let numLength = (num.length - 1); numLength >= 0; numLength = numLength - 1){
    let indexToSplice = array.indexOf(num[numLength]);
    array.splice(indexToSplice, 1);
    //return array;
}


// function callback(item, index, arr){
//     array.splice(item, 1);
//     return array;
// }
// num.forEach(callback);
// return array;


//WORKS!! Why doesn't function work?
// let numLength = num.length - 1;
// let indexToSplice = array.indexOf(num[numLength]);
//     array.splice(indexToSplice, 1);
//WORKS!! Why doesn't function work?
return array;

};

// Do not edit below this line
module.exports = removeFromArray;
