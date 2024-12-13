"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

console.log(options.name);
delete options.name;
console.log(options);

//
const obj = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function() {
    console.log('Test');
  }
};

obj.makeTest();

const {border, bg} = obj.colors;
console.log(border, bg);

console.log(obj["colors"]["border"]);

for (let key in obj) {
  if (typeof obj[key] === "object") {
    for (let i in obj[key]) {
      console.log(i + " : " + obj[key][i]);
    }
  } else {
    console.log(key + " : " + obj[key]);
  }
}

console.log(Object.keys(obj).length);