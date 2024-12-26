"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  //birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

Object.defineProperty(user, "birthday", {
  value: prompt("Data?"),
  enumerable: true,
  configurable: true,
});

Object.defineProperty(user, "showMyPublicData", { enumerable: false });

console.log(Object.getOwnPropertyDescriptor(user, "birthday"));

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

for (let key in user) console.log(key);

Object.defineProperties(user, {
  name: {
    writable: false,
    enumerable: false,
  },
  surname: {
    writable: false,
    enumerable: false,
  },
});

//#region Test
// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Object.defineProperty(user, "name", { writable: false });

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Object.defineProperty(user, "gender", { value: 'male' });
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// writable
// enumerable
// configurable

//#endregion
