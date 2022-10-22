// contact form validation
let inputName = document.getElementById("input-name");
let inputEmail = document.getElementById("input-email");
let inputPhone = document.getElementById("input-phone");
let inputMessage = document.getElementById("input-message");
let inputAdress = document.getElementById("input-adress");
let emailInput = document.getElementById("input-email");

function validation() {
  let spanText = document.getElementById("error-email");
  let emailStructure =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailInput.value.match(emailStructure)) {
    spanText.innerHTML = "Your email is valid";
    spanText.style.color = "green";
  } else {
    spanText.innerHTML = "Your email is not valid";
    spanText.style.color = "red";
  }
}

// Form validation
document
  .getElementById("mainForm")
  .addEventListener("submit", function (event) {
    let errorTextName = document.getElementById("error-name");
    let errorTextEmail = document.getElementById("error-email");
    let errorTextPhone = document.getElementById("error-phone");
    let errorTextAdress = document.getElementById("error-adress");
    let errorTextMessage = document.getElementById("error-message");
    event.preventDefault();
    if (inputName.value == "") {
      errorTextName.innerHTML = "Name Can not be empty";
      errorTextName.style.color = "red";
    } else {
      errorTextName.innerHTML = "";
    }

    if (emailInput.value == "") {
      errorTextEmail.innerHTML = "Email Can not be empty";
      errorTextEmail.style.color = "red";
    }

    if (inputPhone.value == "") {
      errorTextPhone.innerHTML = "Phone Can not be empty";
      errorTextPhone.style.color = "red";
    } else {
      errorTextPhone.innerHTML = "";
      console.log(typeof inputPhone.value);
    }

    if (inputAdress.value == "") {
      errorTextAdress.innerHTML = "Adress Can not be empty";
      errorTextAdress.style.color = "red";
    } else {
      errorTextAdress.innerHTML = "";
    }

    if (inputMessage.value == "" || inputMessage.value.length > 25) {
      errorTextMessage.innerHTML =
        "Messgae can not be empty and more than 25 charachter";
      errorTextMessage.style.color = "red";
    } else {
      errorTextMessage.innerHTML = "";
    }
  });
