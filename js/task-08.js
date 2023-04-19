const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: {email, password},
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    };

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log("user:", user);
  event.currentTarget.reset();
};
