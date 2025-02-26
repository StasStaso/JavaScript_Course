"use strict";

// try {
//   console.log("Normal");
//   console.log(a);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// } finally {
//   console.log("Finally");
// }

// console.log("Still normal");

const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "",
    tag: "nav",
  },
  {
    id: "circle",
    tag: "span",
  },
];

try {
  data.forEach((blockObj) => {
    const block = document.createElement(blockObj.tag);

    if (blockObj.id) throw new Error("ErrorWithThrow");

    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (e) {
  console.log(e);
}

// const err = new Error("asdlkfasjdfkjsa");
// console.log(err.name, err.message, err.stack);
