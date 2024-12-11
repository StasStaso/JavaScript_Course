"use strict";

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

let nums = 50;

do {
  console.log(nums);
  nums++;
} while (nums <= 55);

for (let i = 1; i < 50; i++) {
  console.log(i);
}

for (let i = 1; i < 5; i++) {
  if (i === 4) break;

  console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log("+");
  for (let j = 0; j < 3; j++) {
    console.log("-");
  }
}

// Test
let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = i; j > 0; j--) {
    result += "*";
  }

  result += "\n";
}

console.log(result);
//

//
first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
}

for(let i = 20; i >= 10; i--){
  if(i === 13) break;
  console.log(i);
}

for(let i = 0; i <= 10; i += 2){
  console.log(i);
}