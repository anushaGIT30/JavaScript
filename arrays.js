//we can declare it by 2 types
//1.using []  2. using array constructor
let arr = ["anu", "ka", "sha"];
console.log(arr);
//using array constructor
let arr1 = new Array('love', 'hate', 11);
arr1.push("anusha");
arr1.push("ak");
arr1.push(5);
arr1.pop();
arr1.shift();
arr1.unshift("akkkk");
console.log(arr1.slice(1, 3));
arr1.splice(1, 4, "bala");
console.log(arr1);
//console.log(arr1[0]);
//build-in methods in arrays
//1.push 2. pop 3. shift: remove the first item  4. unshift: add at the first place  5. slice:new part
//  5. map 6.filter 7.sort 8. reduce
//9.splice: using this we can change the cotnent of the array like we can insert,replace,remove
//10. map:
let array = [1, 2, 3, 4, 5, 6];
let ansArray = array.map((Number) => {
    return Number * Number;
})
console.log(ansArray);

let charArr = ["anu", "ka", "good"];
let charAns = charArr.map((String) => {
    return String + 'anu';
})
console.log(charAns);

let numbers1 = [222, 4, 11, 66, 8, 20, 23, 13];
let evenNum = numbers1.filter((Number) => {
    //if(number%2==0)return true;
    //else return false;
    return Number % 2 == 0;
})
console.log(evenNum);

let example = [1, "anu", null, 6, "aka", "9", 4];
let values1 = example.filter((values) => {
    if (typeof (values) == 'string') {
        return true;
    }
    else
        return false;
})
console.log(values1);
//filter
let example1 = [1, "anu", null, 6, "aka", "9", 4];
let values2 = example.filter((values) => {
    if (typeof (values) == 'number') {
        return true;
    }
    else
        return false;
})
console.log(values2);
//reduce
let AddNumbers = [10, 20, 30, 40];
let numRes = AddNumbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);


console.log(numRes); // Output: 100
//sorting in ascending order
let SortingNum = [22, 441, 1, 6, 8, 44, 29, 11, 33];
SortingNum.sort();
console.log(SortingNum)
//sorting in descending order

//indexof
let x = [1, 4, 7, 33, 22, 11];
console.log(x.indexOf(22));
console.log(x.find(4));


