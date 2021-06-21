
'use strict';

// 1. given an array of length >=0
//2. Return the contents of the array divided into N sized arrays
//3. Where the remainder can't be divided by n, final array should be equal in length to the remainder

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr3 = [10, 12, 15];
const result = [];

//declare a function that takes 2 arguments: array and size
 const arraySplit = function (arr, size) {
  //loop through the array (arr)
  for(let i = 0; i < arr.length; i += size){
    //push the result to a new empty array, using slice() method to create sub arrays
  result.push(arr.slice(i, i + size));
  }
  //print the result (an array of arrays) to the console to see that it is working correctly
  return result;
  // console.log(result);
}
//call the function using the two parameters arr, and size of the sub arrays
// arraySplit(arr2, 8);
// console.log(arr2.length);

module.exports = arraySplit;
