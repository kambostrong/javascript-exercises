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

// for (let numLength = (num.length - 1); numLength > 0; numLength = numLength - 1){
//     let indexToSplice = array.indexOf(num[numLength]);
//     array.splice(indexToSplice, 1);
// }
let numLength = num.length - 1;
let indexToSplice = array.indexOf(num[numLength]);
    array.splice(indexToSplice, 1);
return array;

};

// Do not edit below this line
module.exports = removeFromArray;
