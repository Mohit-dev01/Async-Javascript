// console.log('namaste');
// setTimeout(function call () {
//     console.log('js');
// },5000)
// console.log('season 2');

// const cart  =['shoe','belts']

// api.createOrder()
// api.proceedToPayment()
// api.showOrderSummary()
// api.updateWallet()

// api.createOrder( function() {

//     api.proceedToPayment( function() {

//         api.showOrderSummary( function() {

//             api.updateWallet()

//         })

//     })
// })

// const cart = ["shoes", "belts"];

// async operation using callback
// createOrder(cartDetails, function (orderId) {
//   proceedtoPayment(orderId);
// });

// async operaion using promises
// const promise = createOrder(cart);
// {data : undefined}
// after some TimeRanges
// {data : orderId}

// now after getting the data .then will call our callbackfun automatically to proceed with the payment
// promise.then(function (orderId) {
//   proceedtoPayment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users"
// const user =  fetch(GITHUB_API)
// console.log(user)

// attaching callback func to the promise or solved the problem of inversion of control
// user.then(function(data){
//     console.log(data);
// })


// Promise Chaining
const cart = ["shoes", "shirts"];
createOrder(cart)
  .then(function (orderId) {
    return proceedtoPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (OrderSumm) {
    return updateWallet(OrderSumm);
  });

  // promise
// .then(function(orderId){
//   console.log(orderId)
// })
// .catch(function(err){
//   console.log(err.message)
// })

// function validateOrder(){
//   console.log('vali')
//   return false
// }

// function createOrder(cart){

//   const pr = new Promise(function(resolve, reject){

//     if(!validateOrder()){
//       const err = new Error('invalid order')
//       reject(err)
//     }

//     const orderId = 23
//     if(orderId){
//      setTimeout(function(){
//       resolve(orderId)
//      },5000)
//     }

//   })
//   return pr
// }

const cart = ["shoes", "shirt", "belt"];

const createOrder = (cart) => {
  return;
};

createOrder
.then(function (orderId) {
  proceedToPayment(orderId)
})
.then(function(receiptId){
  showOrderSummary(receiptId)
})

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (false) {
      const err = new Error("invalid");
      reject(err);
    }

    if (true) {
      resolve("orderId : 23");
    }
  });

  return pr;
}

function proceedToPayment(orderId){

  const pr = new Promise(function(resolve, reject){
    if(true){
      reject()
    }
    if(true){
      resolve()
    }
  })
  return pr
}
kjj