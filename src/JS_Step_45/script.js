"use strict";

// new RegExp("pattern", "flags");
// /pattern/f

const ans = prompt("Input name");

const reg = /n/ig;
const flags = 'i g m';

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt("Password: ") ;
console.log(pass.replace(/./g, "*"));

console.log('12-34-56'.replace(/-/g, ":"));


