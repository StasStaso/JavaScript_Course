"use strict";

const log = function(a, b, ...rest){
  console.log(a, b, rest);
}

log('a', 'b', 'rest', 'rest1', 'rest2', 'rest3');

function calcOrDouble(number, basic = 2){
  console.log(number * basic);
}

calcOrDouble(2);