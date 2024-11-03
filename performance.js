
/*const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "this is paragraph" + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("performance: " + (t2 - t1) + " milliseconds");

//to calculate the performance we have one method called performance.now() method it gives the output as timestramps

const t3 = performance.now();
let myDiv = document.createElement('div');
for (let i = 0; i <= 100; i++) {
    let para1 = document.createElement('p');
    para1.textContent = "this is a para" + i;
    myDiv.appendChild(para1);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("performance: " + (t4 - t3) + " milliseconds");
//reflow: process of calculating position /dimensions of an element (it takes high resources i.e computationally intensive task)takes high time
//repaint: process of displaying a content or an element by pixel by pixel (it is faster)
//another method is
//Document Fragment: it is a light weight doc object like if we add any element neither it reflow nor repaint


//***best code */

let fragment = document.createDocumentFragment();
for (let i = 0; i <= 100; i++) {
    let para2 = document.createElement('p');
    para2.textContent = "this is anusha" + i;
    fragment.appendChild(para2);
}//till now we didnot took reflow and repaint

document.body.appendChild(fragment);//this line take 1 reflow and 1 repaint