"use strict";

// console.log("Query data...");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Predict data....");

//     const product = {
//       name: "TV",
//       price: 200,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "Order";
//         resolve(product);
//       }, 2000);
//     }).then((data) => {
//       data.modify = true;
//       return data;
//       console.log(data);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

test(1000).then(() => console.log("1000"));
test(2000).then(() => console.log("2000"));

Promise.all([test(1000), test(5000)]).then(() => {
  console.log("All");
});

Promise.race([test(1000), test(5000)]).then(() => {
  console.log("Race");
});