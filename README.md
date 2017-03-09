array-reduce-sum
================
Package for summing numbers in an array.

* Returns sum of numbers in an array.
* Takes an optional second argument for initial value

Behavior similar to [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) accumulator pattern that takes value inputs in an array from left-to-right and reduces to a single value.

```Javascript
var sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);
// sum is 6

```



Installation
-----

```bash
npm install array-reduce-sum --save
```

Syntax
-----

```Javascript
var fn = require('array-reduce-sum');
fn(array, [initialValue]);     // initialValue optional
                               // initialValue should be a number not a string
```

Usage
-----


```Javascript
var sumArray = require('array-reduce-sum');

sumArray([5]);
// => 5

sumArray([5,10]);
// => 15

// Coerces numbers as strings to behave like numbers
sumArray(["5", "10"]);
// => 15

// Optional second argument with initial value
sumArray([5,10], 20);
// => 35
```

Support
-----

Find this package useful? Support it on [GitHugz](http://www.githugz.com/projects/npm/array-reduce-sum)!