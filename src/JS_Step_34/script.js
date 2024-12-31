"use strict";

//#region
// let user = { name: "Ivan" };

// // const arr = [user];
// let map = new Map();
// map.set(user, 'data');

// user = null;

// console.log(user);

// // console.log(arr[0]);
// console.log(map.keys());

//

// let maps = new WeakMap();
// maps.set(user);
// user = null;
// console.log(maps.keys);
//#endregion

let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }

  return cache.get(user);
}

let lena = { name: "Elena" };
let alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena), cache.has(alex));

let messages = [
  { text: "Hello", from: "John" },
  { text: "word", from: "Alex" },
  { text: "....", from: "m" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[2]));