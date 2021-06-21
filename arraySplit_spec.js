const assert = require('assert');
const arraySplit = require('./arraySplit.js');


describe('arraySplit', function() {
  let arr;


  beforeEach(function() {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  it('should split the array into even sub arrays of 3', function() {
    const actual = arraySplit(arr, 3);
    assert.deepStrictEqual(actual, [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });

  it('should enable the final sub array to be shorter', function() {
    actual = arraySplit(arr, 2);
    assert.deepStrictEqual(actual, [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9]
    ]);
  });

});
