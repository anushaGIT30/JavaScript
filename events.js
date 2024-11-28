
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
//event is nothing but a action
//in webpage also whatever user do everything in an action
//mouse events-click,double click,mouseover,mouseout,mouse move
//keyboard events-key down,key press, key up
//focus events-focus,blur,focusout
//form events-submit,reset,change
