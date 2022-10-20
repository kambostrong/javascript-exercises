//expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
//https://dmitripavlutin.com/foreach-iterate-array-javascript/

const removeFromArray = function(array, ...num) {



    for (let numLength = (num.length - 1); numLength >= 0; numLength = numLength - 1){
    if (array.includes(num[numLength]) === false){continue;}
    let indexToSplice = array.indexOf(num[numLength]);
    array.splice(indexToSplice, 1);
}



return array;

};

// Do not edit below this line
module.exports = removeFromArray;
