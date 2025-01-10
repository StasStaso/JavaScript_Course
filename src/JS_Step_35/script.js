"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const offWidth = box.offsetWidth;
// const offHeight = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

// console.log(offWidth, offHeight);

btn.addEventListener("click", () => {
  const currentHeight = parseInt(box.style.height) || 0;
  if (currentHeight < box.scrollHeight) {
    box.style.height = box.scrollHeight + "px";
  } else {
    box.style.height = "350px";
  }
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);