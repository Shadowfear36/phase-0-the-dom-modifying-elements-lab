// Write your code here!
const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('H1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'Dylan is the champion';
document.body.appendChild(newHeader);
