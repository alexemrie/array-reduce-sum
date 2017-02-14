var sumReduce = function(array){

    var sum = array.reduce(function(prev, curr){
        return prev + curr;
    });

    return sum;
};

module.exports = sumReduce;