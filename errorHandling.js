//ERROR: which interupts the flow of execution
//1. compiletime error : it is caught during parsing of js code before the execution of program

//syntax error

//2.  runtime  error: it is caught after the execution


//reference error
//******console.log(x);// error

try {
    //the try block gives the where the error has been occured
    console.log("this is the error");
    console.log(x);// reference error

}
catch (error) {//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
    console.log("the error is catched", error);
}

//Finally Block: this will run everytime either we get the error or we dont get the errror
finally {
    console.log("hello boss i will run every time ");
}

//Throw block: we can through this error manually it (is a custom error)
let number = 100;
if (number == 100) {
    throw new Error("INVALID JSON");
}//create obj for throw block
