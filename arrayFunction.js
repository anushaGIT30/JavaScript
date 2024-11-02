let array = [10, 20, 30, 40];

function getSum(array) {
    let len = array.length; // Use array.length without parentheses
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += array[i]; // Add each element to sum
    }
    return sum; // Return the total sum
}

let totalSum = getSum(array); // Call the function
console.log(totalSum); // Output: 100

let getAdd = (array) => {
    let sum = 0;
    array.forEach((value) => {
        sum += value;
    });
    return sum;
}
let getRes = getAdd(array);
console.log(getRes);