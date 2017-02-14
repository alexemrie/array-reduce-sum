var assert = require('assert');
var sumReduce = require('./../index');

describe('reduce sum', function(){
    it('reduces the sum of all values in an array: one number', function(){
        var numberArray = [5];
        assert.equal(sumReduce(numberArray), 5);
    });


    it('reduces the sum of all values in an array: two numbers', function(){
        var numberArray = [5,10];
        assert.equal(sumReduce(numberArray), 15);
    });

    it('reduces the sum of all values in an array: three numbers', function(){
        var numberArray = [10, 15, 20];
        assert.equal(sumReduce(numberArray), 45);
    });

    it('takes an optional initial value as a second argument', function(){
        var numberArray = [10, 20];
        var initialValue = 7;
        assert.equal(sumReduce(numberArray, initialValue), 37);
    });
});