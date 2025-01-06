"use strict";

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`hello ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log("exit");
};

const ivan = new User("Ivan", 1);
console.log(ivan);
