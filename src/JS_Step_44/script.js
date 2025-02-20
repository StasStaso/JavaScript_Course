"use strict";

// localStorage.setItem("number", 6);
// console.log(localStorage.getItem("number"));
// localStorage.removeItem("number");
// localStorage.clear();

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if (localStorage.getItem("isCheck")) {
  checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isCheck", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});

const person = {
  name: "Alex",
  age: 25,
};

const serealizedPerson = JSON.stringify(person);
localStorage.setItem("person", serealizedPerson);

console.log(localStorage.getItem("person"));
