'use strict';

// 1. given an array of length >=0
//2. Return the contents of the array divided into N sized arrays
//3. Where the remainder can't be divided by n, final array should be equal in length to the remainder

//declare a function that takes 2 arguments: array and size
const arraySplit = function(arr, size) {
  //declare an empty array to store the nested arrays
  const result = [];
  //loop through the array (arr)
  for (let i = 0; i < arr.length; i += size) {
    //push the result to a new empty array, using slice() method to create nested arrays
    result.push(arr.slice(i, i + size));
  }
  //return the new array of sub arrays
  return result;
}


module.exports = arraySplit;