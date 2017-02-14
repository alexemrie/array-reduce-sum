var sumReduce = function(array, optInitialValue){

    var initValue = typeof optInitialValue == 'number' ? optInitialValue : 0;

    var sum = array.reduce(function(prev, curr){
        return Number(prev) + Number(curr);
    }, initValue);

    return sum;
};

module.exports = sumReduce;