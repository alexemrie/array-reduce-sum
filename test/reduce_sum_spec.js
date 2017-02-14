var assert = require('assert');
var sumReduce = require('./../index');

describe('reduce sum', function(){
   it ('reduces the sum of all values in an array', function(){
      var numberArray = [5,10];
      assert.equal(sumReduce(numberArray), 15);
   });
});