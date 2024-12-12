"use strict";

const arr = [ 13,6, 8, 1, 2, 3, 12, 123];
arr.sort(compareNumb);
console.log(arr);

function compareNumb(a, b){
  return a - b;
}

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} inside ${arr}`);
});

arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

const str = prompt("", "");
const product = str.split(",");
product.sort();
console.log(product.join("; "));