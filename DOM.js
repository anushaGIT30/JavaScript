//converting a html code to javascript object model it is called document
//With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
//methods

//***these all methods are used to access the elements */
//1.document.getElementbyID();
//2.document.getElementByClass()
//3. document.getElementByTagName()

//****another way of writing :
//1.document.querySelector('#fpara')
//2.document.querySelectorAll('.hclass');
//3. document.querygetElementByTagName()

//methods to update

//1.inner html--we can get or set
//button.innerHTML=get
//button.innerHTML=<p>hi there!</p>(we can set like this)
//2.outer html
//3.text-content
//4.inner text

//to add an element
//1.first we have to create a child the method used to create a child is "create element"
//2.append
//ex:let element = document.querySelector('#div1');
let fhead = document.createElement('h2'); // Create the h2 element
fhead.textContent = "my name is anu";      // Set text content of the h2 element
let bodyTag = document.querySelector("body"); // Select the body tag
bodyTag.appendChild(fhead);               // Append the h2 element to the body

//we can decide the child where we want to place it
//the method is "insertAdjacentElement"
//it consists of 2 parameters
//(1)position: before begin,after begin,before end,after end
//(2)html content
//ex: parent.insertAdjacentElement()

//to remove an element
parent.removeChild()
