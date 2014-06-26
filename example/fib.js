'use strict'
var bint = require('bignum'),
    isGobj = require('is-genobj');

// nifty
var fib = function*(){
  let x = bint(0), y = bint(1), z = bint(0);
  while(true){
    z = x.add(y);
    x = y;
    y = z;
    yield y;
  }
};

// no
console.log("Is it a generator object? " + isGobj(fib);

// yes
console.log("Is it a generator object? " + isGObj(fib());


