//variable scoping
//1. local scope 2. global scope 3. block scope
var age = 15; //global scope we can use var,let,const
//it can be accesed anywhere 
console.log(age);
{
    console.log(age);
}
if (true) {
    console.log(age);
}
else {
    console.log(age);
}
function sayHello() {
    console.log("hi", age);
}
sayHello();

//so this is declared in the global
//local scope or a functional scope

function sayHi() {
    var full = "anu";
    console.log(full);

}
console.log(full);
sayHi();
{
    let Eat = "potato";
}
//console.log(Eat);//let is a block scope not accessed outside
