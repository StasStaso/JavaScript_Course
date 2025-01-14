"use strict";

const persone = {
  name: "Alex",
  phone: "+3805071239812",
  parents: {
    mom: "Olga",
    dad: "Mike",
  },
};

const clone = JSON.parse(JSON.stringify(persone));
console.log(clone);

console.log(JSON.parse(JSON.stringify(persone)));
console.log(JSON.stringify(persone));
