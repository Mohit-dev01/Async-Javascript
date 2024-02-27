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
