//binding of required data to a function is called closure\
//to create a closure we required 2 things first is function and next is required data(lexical scope or surrounding state)
function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();
//it is nested function
