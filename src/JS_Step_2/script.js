"use strict";

if (4 == 9) {
  console.log("Ok");
} else {
  console.log("Bad");
}

const num = 55;

if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Error");
} else {
  console.log("Ok");
}

num == 50 ? console.log("Ok") : console.log("Bad");

switch (num) {
  case 49:
    console.log("Bad");
    break;
  case 51:
    console.log("Bad");
    break;
  case 50:
    console.log("Cool");
    break;
  default:
    console.log("OMG");
    break;
}
