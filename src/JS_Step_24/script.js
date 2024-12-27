"use strict";

//1

const obj = {
  name: "Test",
  [Symbol("code")]: 1,
};

let id = Symbol("id");
obj[id] = 1;

console.log(obj[id]);
// console.log(obj[code]);
console.log(obj);

for(let value in obj){
    console.log(value);
}

//2

let id = Symbol("id");

const obj = {
  name: "Test",
  [id]: 1,
  getId: function () {
    return this[id];
  },
};

console.log(obj.getId());
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

//3

const myAwesomeDB = {
  movies: [],
  actors: [],
  [Symbol.for("id")]: 123,
};

myAwesomeDB.ids = "323232";

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
