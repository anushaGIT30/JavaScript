
//writting function
function changeText(event) {
    console.log(event);
    let fpara = document.querySelector("#fpara");
    fpara.textContent = "hello ak";
}
let fpara = document.querySelector("#fpara");
fpara.addEventListener('click', changeText);

//default behaviour of objects
let anchorElement = document.getElementById("anchor");
//we are stopting the default behaviour
anchorElement.addEventListener('click', function (event) {
    event.preventDefault();
    anchorElement.textContent = "click done ";
})