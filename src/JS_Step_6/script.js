"use strict";

//
const str = "teSt";
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);

console.log((str[2] = "d"));
console.log(str);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("Q"));

//
const logg = "Hello world";

console.log(logg.slice(6,11));
console.log(logg.slice(6,10));
console.log(logg.slice(6));
console.log(logg.slice(2));
console.log(logg.slice(-5, -1));
console.log(logg.slice(-10));

//
const logger = "Hello world";

console.log(logger.substring(6, 11));

//
const message = "Hello world";

console.log(message.substr(6, 5)); 

//
const num = 12.2;

console.log(Math.round(num));

//
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));