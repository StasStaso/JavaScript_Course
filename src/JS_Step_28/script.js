"use strict";

const arr = [1, 1, 1, 2, 2, 5, 6, 2, 5, 3];

const set = new Set(arr);

console.log(set);

//

const arr2 = ["alex", "ann", "alex"];
const set2 = new Set(arr2);

set2.add("oleg");
set2.add("ann");

console.log(set2);

set2.delete(value);
set2.has(value);
set2.clear();
set2.size();

for(let value of set2){
    console.log(value);
}

set2.forEach((value, valueAgain, set2)=>{
    console.log(value);
})

console.log(set2.values);
console.log(set2.keys());
console.log(set2.entries());

function unique(arr){
    return Array.from(new Set(arr));
}