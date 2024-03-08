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
// const cart = ["shoes", "shirts"];
// createOrder(cart)
//   .then(function (orderId) {
//     return proceedtoPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (OrderSumm) {
//     return updateWallet(OrderSumm);
//   });

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

// const cart = ["shoes", "shirt", "belt"];

// const createOrder = (cart) => {
//   return;
// };

// createOrder
// .then(function (orderId) {
//   proceedToPayment(orderId)
// })
// .then(function(receiptId){
//   showOrderSummary(receiptId)
// })

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (false) {
//       const err = new Error("invalid");
//       reject(err);
//     }

//     if (true) {
//       resolve("orderId : 23");
//     }
//   });

//   return pr;
// }

// function proceedToPayment(orderId){

//   const pr = new Promise(function(resolve, reject){
//     if(true){
//       reject()
//     }
//     if(true){
//       resolve()
//     }
//   })
//   return pr
// }

// Promise Apis

// const pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("pr1 resolve");
//   }, 3000);
// });

// const pr2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("pr2 resolve")
//     reject("pr2 reject");
//   }, 1000);
// });

// const pr3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("pr3 resolve");
//   }, 2000);
// });

// Promise.all([pr1, pr2, pr3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.allSettled([pr1, pr2, pr3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   Promise.race([pr1, pr2, pr3])
//   .then( (res) => {
// console.log(res)
//   })
//   .catch( (err) => {
//     console.error(err)
//   })

//   Promise.any([pr1, pr2, pr3])
//   .then( (res) => {
//     console.log(res)
//       })
//       .catch( (err) => {
//         console.error(err)
//         // to get the aggregate errors in console
//         console.error(err.errors)
//       })


// async function getData () {
//   return "beauti"
// }
// const data = getData()
// console.log(data)
// data
// .then( res => {
// console.log(res)
// })

const p = new Promise( (resolve,reject) => {
setTimeout( () => {
    resolve("promise resolved")
}, 3000)
})

// async function solvePromise() {
//  const val =  await p
//  console.log(val)
// }

// solvePromise()

// p.then((res) => {
//   console.log(res)
// })

// function getData () {
//     p
// .then( (res) => {
//     console.log(res)
//     console.log("ruiwoantenous")
// })
// }

// getData()


// async function handlePromise() {
//  const value =   await p
//  console.log(value)
//  console.log("uiow")
// }
// handlePromise()

const p1 = new Promise( (resolve,reject) => {
setTimeout( () => {
    resolve("p! resolved")
}, 6000)
})
const p2 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("p2 reisolved")
    }, 3000);
})

async function solvePromise ()  {

    const val1 = await p1
    console.log(val1)

    const val2 = await p2
    console.log(val2)

}
solvePromise()