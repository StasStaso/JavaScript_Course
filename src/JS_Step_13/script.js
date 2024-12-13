"use strict";

let number = 5;

function logNumber() {
  console.log(number);
}

number = 6;

logNumber();

number = 8;

logNumber();

//
function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increament = createCounter();
const c1 = increament();
const c2 = increament();
const c3 = increament();

console.log(c1, c2, c3);