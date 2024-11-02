//defining a function 
//functions are also called as first class citizen because
//it assign to variable,as a argument,return function,used in data sturucture, used as a property
function reverse(number) {
    if (number <= 0) {
        return 0;
    }
    let rev = 0;
    while (number > 0) {
        let rem = number % 10;
        rev = rev * 10 + rem;
        number = Math.floor(number / 10);
    }
    return rev;
}
//assign a variable to a function
let rev = reverse(123457);
console.log(rev);

let greet = function () {
    console.log("this is anusha");

}
greet();

// function as a argument
function greetMe(greet1, fullname) {
    console.log("hello" + fullname);
    greet1();
}
function greet1() {
    console.log("greetings of the day");
}
greetMe(greet1, "akkk");

//return functions

function solve(number) {
    return function (number) {
        return number * number;
    }
}
let ans = solve(5);
let finalAns = ans(10);
console.log(finalAns);

//dataStructures
let arr1 = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a - b;
    },
    function (a, b) {
        return a * b;
    }
];
let first = arr1[0];
let finalAns1 = first(20, 30);
console.log(finalAns1); // This will log 50

let obj1 = {
    fullname: "ansuha",
    ht: 6,
    wt: 55,
    greet2: () => {
        console.log("hi this is anu");
    }
}
console.log(obj1.wt);
obj1.greet2();
