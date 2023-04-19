const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const counter = document.getElementById("value");

let counterValue = 0;

btnDec.addEventListener("click", decrementCount);
btnInc.addEventListener("click", incrementCount);

function decrementCount() {
  counterValue -= 1;
  counter.textContent = counterValue;
};

function incrementCount() {
  counterValue += 1;
  counter.textContent = counterValue;
};