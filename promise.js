/*let firstPromise = new Promise((resolve, reject) => {
    console.log("hi anu");
    resolve();  // Add this line to resolve the promise
});

let firstPromise = new Promise((resolve, reject) => {
    setTimeout(function sayMyname() {
        console.log("i am ak");

    }, 10000);
    resolve(1);
});
*/
let promise1 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("promise fulfilled");
    }
    else
        reject("promise not fulfilled it is rejected");
});
//usig then
promise1.then((message) => {
    console.log("then mesg is" + message);
})
    .catch((error) => {
        console.log("error" + error);
    })
//we can use multiple "then " so it called promise chaining 