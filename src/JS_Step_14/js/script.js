"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

// box.style.width = '500px';
// box.style.cssText = "background-color: purple; width: 250px;";

// btns[1].style.borderRadius = "100%";

// circles.style.backgroundColor = 'red';
// for(let i = 0; i < circles.length; i++){
//     circles[i].style.backgroundColor = 'green';
// }

// hearts.forEach((item) => {
// 	item.style.backgroundColor = "blue";
// });

// const div = document.createElement("div");
// console.dir(div);

// const text = document.createTextNode("Hello world");

// div.classList.add('black');

// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[2])

// wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

const block = document.createElement("div");

block.classList.add("black");
wrapper.append(block);

block.innerHTML = "<h1>Hello World</h1>";
// block.textContent = "Hello";

block.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");
