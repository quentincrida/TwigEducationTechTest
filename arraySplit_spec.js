const assert = require('assert');
const arraySplit = require('./arraySplit.js');


describe('arraySplit', function () {
  let arr;

  beforeEach(function () {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  it('should split the array into even sub arrays of 3', function () {
        assert.deepStrictEqual(arraySplit(arr, 3), [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  xit('should enable the final sub array to be shorter', function () {
    assert.deepStrictEqual(arraySplit(arr, 2), [[1,2],[3, 4], [5,6], [7,8], [9]]);
  })


});
