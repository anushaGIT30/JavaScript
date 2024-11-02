// we can declare variables using 3 keywords
//1. var     2. let    3. const
//1.var :  var keyword was the traditional way of declaring a varriable
//declared with var are function-scoped or globally-scoped, but not block-scoped.
// This means that variables declared with var are hoisted to the top of their function or global scope
//var is function scoped
//When we declare a variable using var inside a function, we canot access the variable outside the function.
// we can Reassign and Redefine  using var
//2.let :
//In JavaScript, the let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined. Block scope refers to any code block delimited by curly braces {} such as loops,
// conditionals, or function bodies.
//Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope
//3.const
//In JavaScript, the const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.

//var example:

function example() {
    ak = 5;
    console.log(ak);

}
example()


