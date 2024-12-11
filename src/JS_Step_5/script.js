"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(`Hello world! ${text}`);
  console.log(num);
}

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 4));

showFirstMessage("Mike!");
console.log(num);

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("Hello");
};

logger();

const calculation = (a, b) => {
  return a + b;
};
console.log(calculation(123, 123));

// Convert
const usdCurr = 42;
const eurCurr = 45;
const discount = 0.9;

function convert(amount, curr) {
  return amount * curr;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);
//

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
  console.log("Done");
}

test();

// Test
function doNothing() {};
console.log(doNothing() === undefined);
