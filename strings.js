//****creation of string  */
let string1 = "annusha";
console.log(string1);
//let str = "this is 
//good";
let str = `this
is a `;
console.log(str);
let string2 = new String("my name is anu");//  the difference between let name ="hello";
// and let Name = new String("hello"); is that if we print the typeof() both the string then the first one 
//will give output as string and the second one will give the output as object.
example: -
    //let str = new String('Hello') - Converts string to object

    //let str = 'Hello' - Maintain type (string)
    console.log(string2);
//string operations
let op1 = "english";
let op2 = "hinDDDi";
let finalAns = op1 + op2;
console.log(finalAns);

let op11 = "english ";
let op22 = "TELUGU";
let finalAns1 = `${op11}${op22}`;
console.log(finalAns1);
console.log(op1.length);
//upper and lower
console.log(op1.toUpperCase());
console.log(op2.toLowerCase());
//substring 
console.log(op1.substring(1, 5));
console.log(op2.substring(3));

//split
let sentance = "hi this is javascript";
let words = sentance.split(' ');
console.log(words);
console.log(words.join(','));

//blackslash when we use " " within the string

let se = "hi iam  learning \"javascript\"";
console.log(se);