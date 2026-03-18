// const cart = ["shoes", "pants", "kurta"];

// api.Createorder(cart, function(orderid){
//       api.proceedpaymet(orderid);
// })

// when we use callback function we give the control of our code to other 
// function and we have to wait for that function to complete its task and 
// so here proceedpaymet function give his control to Createorder function and we have to wait for Createorder function
//  to complete its task and then we can move forward here proceedpaymet function 
// is dependent on Createorder function and if Createorder function takes more time to 
// complete its task then we have to wait for that time and then we can move forward 
// and this is called callback hell and it is not good for our code because 
// it makes our code hard to read and understand and it also makes our code hard to maintain and debug.

// const promise = Createorder(cart); // createorder is an asynchronous function and it returns a promise object and we can use that promise object to handle the asynchronous code and we can use then method to handle the success case and catch method to handle the error case and we can also use async await to handle the asynchronous code in a more elegant way and it makes our code more readable and maintainable.
// // it returns empty object {data : undefined}  // after some time it will return the orderid and automatically called proceedpayment and we can use that orderid to proceed payment and show order details and we can also use that orderid to handle the error case if there is any error in createorder function and we can also use that orderid to handle the success case if there is no error in createorder function.

// promise.then(function(orderid){
//       return api.proceedpaymet(orderid);
// })


// const google_url = "https://www.google.com"; // fetch is an asynchronous function and it returns a promise object and we can use that promise object to handle the asynchronous code and we can use then method to handle the success case and catch method to handle the error case and we can also use async await to handle the asynchronous code in a more elegant way and it makes our code more readable and maintainable.
// const user = fetch(google_url); // it returns empty object {data : undefined}  // after some time it will return the response and we can use that response to handle the success case and catch method to handle the error case and we can also use async await to handle the asynchronous code in a more elegant way and it makes our code more readable and maintainable.
// console.log(user); // it will return the promise object and we can use that promise object to handle the asynchronous code and we can use then method to handle the success case and catch method to handle the error case and we can also use async await to handle the asynchronous code in a more elegant way and it makes our code more readable and maintainable.


// user.then(function(response){
//       console.log(response); // it will return the response object and we can use that response object to handle the success case and catch method to handle the error case and we can also use async await to handle the asynchronous code in a more elegant way and it makes our code more readable and maintainable.
// });



// to overcome from callback Hell we use promise chaining---------

// const cart = ["shoes", "pants", "kurta"];

// api.Createorder(cart, function(orderid){
//       api.proceedpaymet(function(paymentisp){
//          api.showorder(function(){
//             api.showorder()
//          })
//       })
// })   // this is callback hell example 

// Createorder(cart).then(function(orderid){
//       return api.proceedpaymet(orderid); // if i am not return we may loose some data 
// })
// .then(function(paymentisp){
//       return api.showorder(paymentisp);
// })
// .then(function(){
//       return api.showorder();
// })
// .catch(function(error){
//       console.log(error);
// }) // this is promise chaining example and it is more readable and maintainable than callback hell and it also makes our code more elegant and it also makes our code more error handling and it also makes our code more flexible and it also makes our code more scalable.



const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // it store promise object in promise variable and we can use that promise object to handle the asynchronous code and we can use then method to handle the success case and catch method to handle the error case and we can also use async await to handle the asynchronous code in a more elegant way and it makes our code more readable and maintainable.

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    // proceedToPayment(orderId);
  })
  // .catch(function (err) {
  //   console.log(err.message);
  // })
  .then(function (orderId) {
     return proceedToPayment(orderId);
  })
  .then(function (paymentStatus) {
    console.log(paymentStatus);
  })
  .catch(function (err) {
    console.log(err.message);
  });  // if i am writting catch here then if error is getting then next part of code not executes but when we write catch at the top then after the error part code will executes .

/// Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {

    // createOrder
    // validateCart
    // orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      return reject(err);
    }

    // logic for createOrder
    const orderId = "12345";

    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful for orderId: " + orderId);
})
}

function validateCart(cart) {
  return false;
}
