const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const sizeCurrent = inputEl.value;
textEl.style.fontSize = sizeCurrent + "px";

inputEl.addEventListener("input", (event) => {
  const size = event.currentTarget.value + "px";
  textEl.style.fontSize = size;
});