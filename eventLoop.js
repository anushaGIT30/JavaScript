//synchronous code: any peace of code executes at the same time
//Asynchronous code: it doesnot execute on the spot it may be delay or execute after sometime
//setTimeout(funct,duration)
//Asynchronous we use event loop
//event loop:
/*
1.call stack
2.browser
3.callback queue

for example :
we have synch code like console.log("hi")
->first it will go to the call stack and prints hi
->suppose we have asyn code like setTimeout(sayMyname(),50000s)
first it will go the browser and the timer gets started after that it will go to the callback queue after that 
if the stack is empty then it will go the stack and prints name
*/
