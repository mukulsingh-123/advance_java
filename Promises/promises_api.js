// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise 1 resolved");
//   },2000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise 2 resolved");
//   },4000);
// });

// const p3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise 3 resolve");
//   },1000);
// });

// const p4 = new Promise((resolve, reject)  => {
//   setTimeout(function () {
//     resolve("Promise 4 resolved");
//   },3000);
// });


// Promise.race([p1, p2, p3, p4]).then(function (values) {
//   console.log(values);
// }).catch((err) => {
//   console.log(err);
// });



const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Promise 1 reject");
  },2000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Promise 2 reject");
  },4000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Promise 3 reject");
  },1000);
});

const p4 = new Promise((resolve, reject)  => {
  setTimeout(function () {
    reject("Promise 4 reject");
  },3000);
});


Promise.any([p1, p2, p3, p4]).then(function (values) {
  console.log(values);
}).catch((err) => {
  console.log(err); // print the whole aggrregate error object
  console.log(err.errors) // it resolve the aggregate error and it will give us the array of errors which are rejected in the promises and we can use that array to handle the errors in a better way and we can also use that array to display the error messages to the user in a more user friendly way.
});