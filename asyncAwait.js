//by using async-Await we can convert asynchronous code into synchronous

async function getData() {
    setTimeout(function () {
        console.log("i am inside set timeout")
    }, 3000)
}
getData();
//by using async we can handle promises it returns promise
//FETCH API 
/* 1. get request
   2. post request
   3. put request   
   4.delete request
 */