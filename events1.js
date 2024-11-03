//avoiding too many listners
/*let paras = document.querySelectorAll('p');
for (let i = 0; i < paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', function () {
        alert("you have clicked on para:" + i);
    })
}
//the output is correct but we are creating for every event listners so it is not a good practice

let paras = document.querySelectorAll('p');
function alertPara(event) {
    alert("you have clicked on para: " + event.target.textContent);
}
for (let i = 0; i < paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', alertPara); // Pass the function without ()
}*/
//another method
let myDiv = document.getElementById('wrapper');
function alertPara(event) {
    if (event.target.nodeName == 'SPAN')
        alert("you have clicked on para: " + event.target.textContent);
}
document.addEventListener('click', alertPara);