//in javascript objects are dynamic in nature because we can change it in runtime
let obj = {
    name1: "anusha",
    age: 21,
    wt: 55,
    ht: 180,
};
obj.color = "white";
console.log(obj);
// OBJECT CLONING CAN BE DONE BY
//1. USING SPREAD OPERATOR (...)
let src = {
    name2: "akkkk",
    age: 24,
    wt: 56,
    ht: 6,
};
let src1 = {
    name2: "asharmi",
    age: 24,
    wt: 56,
    ht: 6,
};

let dest = { ...src };
src.age = 20;
dest.ht = 7;
console.log("src:", src);
console.log("dest:", dest);

//2.assign method

let dest1 = Object.assign({}, src, src1);
console.log("src:", src);
console.log("dest1:", dest1);

//3. iteration method

let dest2 = {};
for (let key in src) {
    let newKey = key;
    let newValue = src[key];
    dest2[newKey] = newValue;
}
src.age = 18;

console.log("src:", src);
console.log("dest2:", dest1);