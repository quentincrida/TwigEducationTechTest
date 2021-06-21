const assert = require('assert');
const arraySplit = require('./arraySplit.js');


describe('arraySplit', function() {
  let arr;

  beforeEach(function() {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  it('should split the array into nested arrays of a given number', function() {
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
  it('should function even when the size parameter is greater than the original array', function() {
    actual = arraySplit(arr, 10);
    assert.deepStrictEqual(actual, [
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]);
  })

});
