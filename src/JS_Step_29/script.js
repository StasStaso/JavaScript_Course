"use strict";

// console.log(Number.MAX_SAFE_INTEGER);

const bigint = 123123123123192187492074982190487128740981274n;

const sameBigint = BigInt(2913487921837491207349872913084791238741290);

// console.log(bigint, sameBigint);
// console.log(typeof(bigint));

//console.log(5n + 1);

console.log(5n / 2n);

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number));
console.log(Number(bigInt) + number);