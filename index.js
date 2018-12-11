/* Enter the code to remove the main node element under this comment */
let element = document.getElementById('main');
element.remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
