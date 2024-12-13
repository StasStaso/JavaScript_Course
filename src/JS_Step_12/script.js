"use strict";

// To string

//1) letest
console.log(typeof String(null));
console.log(String(null));
console.log(typeof String(45));

//2) concat
console.log(typeof (5 + ""));
console.log(typeof (null + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";
console.log(fontSize);

// To number

//1)
console.log(typeof Number("5"));
console.log(Number("5"));

//2)
console.log(typeof +"5");

//3)
console.log(typeof parseInt("15px", 10));

let answer = +prompt("Hello", "");

// To boolean

//1)
let switcher = null;
if (!switcher) {
  console.log("Working");
}

//2)
console.log(typeof Boolean("5"));

//3)
console.log(typeof(!!"55534"));