"use strict";

let a = 5,
  b = a;

b = b + 5;

console.log(b, a);

//

const obj = {
  a: 5,
  b: 1,
};

const copy = obj;

copy.a = 10;

console.log(copy, obj);

//
function copy(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 8,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers, "\n", numbers);

//

const number = {
  a: 2,
  b: 5,
  c: {
    x: 8,
    y: 4,
  },
};

const add = {
  d: 17,
  e: 20,
};

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add, clone);

//
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[0] = "d";

console.log(oldArray, "\n", newArray);

//
const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

//
const nArray = ["a", "b"];
const nArrays = [...nArray];

const q = {
  one: 1,
  two: 2,
};

const newq = {...q};
