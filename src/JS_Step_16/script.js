"use strict";

const btn = document.querySelector("button"),
  btn1 = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

const deleteElement = (event) => {
  console.log(event.currentTarget);
  console.log(event.type);
};

//
btn.addEventListener("click", deleteElement);
overlay.addEventListener("click", deleteElement);

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});
