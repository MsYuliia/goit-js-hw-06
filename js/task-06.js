const inputElement = document.querySelector("#validation-input");
const dataLength = inputElement.getAttribute("data-length");

inputElement.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const value = event.target.value;
  if (value.length === parseInt(dataLength)) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
    };
};