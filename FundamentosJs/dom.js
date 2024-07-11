/*
let output;

// get child elements

const parent = document.querySelector(".parent");
output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "child two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "child one";
parent.lastElementChild.innerText = "child three";

// get parent elements from a child
const child = document.querySelector(".child");

output = child.parentElement;

child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = " 10px";

// sibling elements

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";
console.log(output);
*/

let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = " red";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = "hello";

const child = document.querySelector(".child");

output = child.parentNode.style.backgroundColor = "#ccc";
output = child.parentElement.style.padding = "10px";

// output = child.parentNode;

// sibling

const secondItem = document.querySelector(".child: nth-child(2)");

output = secondItem;
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
