"use strict";

// filter

const names = ["ivan", "stas", "ksenia", "voldemart"];

const shortName = names.filter((name) => {
  return name.length < 5;
});

console.log(shortName);

// map

const answers = ["Ivan", "AnnA", "HEllo"];

const result = answers.map((answer) => {
  return answer.toLowerCase();
});

console.log(result);

// every/some

const some = [2, 4, "qwe", "sfrefasdf"];

console.log(some.some((item) => typeof item === "number"));
console.log(some.every((item) => typeof item === "number"));

// reduce

const arr = [1, 3, 5, 6, 3, 2, 1];

const res = arr.reduce((sum, current) => {
  return sum + current;
});

console.log(res);

const arr2 = ["apple", "pear", "plum"];

const res2 = arr2.reduce((sum, current) => {
  return sum + ", " + current;
});

console.log(res2);

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] === "persone")
  .map((item) => item[0]);

console.log(newArr);
