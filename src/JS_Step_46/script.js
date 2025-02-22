"use strict";

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Name is: ${this.name}, Age is: ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (typeof age === "number" && age > 0 && age < 100) {
//       userAge = age;
//     } else {
//       console.log("Bad numbers");
//     }
//   };
// }

class User {
  constructor(name, age) {
    this.name = name;
    this._userAge = age;
  }

  say() {
    console.log(`Name is: ${this.name}, Age is: ${userAge}`);
  }

  getAge() {
    return userAge;
  }

  setAge(age) {
    if (typeof age === "number" && age > 0 && age < 100) {
      userAge = age;
    } else {
      console.log("Bad numbers");
    }
  }
}

const ivan = new User("Ivan", 27);
console.log(ivan.getAge());

ivan.setAge(20);
ivan.setAge(2000);

ivan.say();
