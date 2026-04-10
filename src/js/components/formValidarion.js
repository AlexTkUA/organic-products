"use strict";
import renderSuccessStatus from "./successStatusForm.js";
const showError = (placeHolder, arrErrors, input) => {
  const ulEl = document.createElement("ul");
  arrErrors.forEach((error) => {
    const liEl = document.createElement("li");
    liEl.textContent = error;
    ulEl.append(liEl);
  });
  placeHolder.append(ulEl);
  input.classList.add("input-error");
  return false;
};

const validateName = (input, errorPlace) => {
  const errorHolder = document.querySelector(errorPlace);
  input.classList.remove("input-success");
  input.classList.remove("input-error");
  errorHolder.innerHTML = ``;
  const arrErr = [];
  const strValue = input.value.trim();
  if (strValue.length > 100) {
    arrErr.push("Name is too long, max 100 characters");
  }
  if (strValue.length < 2) {
    arrErr.push("Please enter at least 2 characters");
  }
  if (/[^a-zA-Zа-яА-ЯіїєґІЇЄҐ\s]/.test(strValue)) {
    arrErr.push("Please use only letters and spaces");
  }
  if (arrErr.length > 0) {
    return showError(errorHolder, arrErr, input);
  }
  input.classList.add("input-success");
  return true;
};

const validatePhone = (input, errorPlace) => {
  const errorHolder = document.querySelector(errorPlace);
  input.classList.remove("input-success");
  input.classList.remove("input-error");
  errorHolder.innerHTML = ``;
  const arrErr = [];
  const strValue = input.value.trim();
  if (/[^\d]/.test(strValue)) {
    arrErr.push("Phone number must contain only digits");
  }
  if (strValue.length > 12) {
    arrErr.push("Number is too long. Max 12 digits");
  }
  if (arrErr.length > 0) {
    return showError(errorHolder, arrErr, input);
  }
  input.classList.add("input-success");
  return true;
};

const validateEmail = (input, errorPlace) => {
  const errorHolder = document.querySelector(errorPlace);
  input.classList.remove("input-success");
  input.classList.remove("input-error");
  errorHolder.innerHTML = ``;
  const arrErr = [];
  const strValue = input.value.trim();
  if (strValue.length > 200) {
    arrErr.push("Email is too long. Max 200 characters");
  }
  if (arrErr.length > 0) {
    return showError(errorHolder, arrErr, input);
  }
  input.classList.add("input-success");
  return true;
};

const sendForm = (form) => {
  const formEl = document.querySelector(form);
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true
    if (validateName(formEl.personName, ".input_name_error") === false) {
      isValid = false
    }
    if (validatePhone(formEl.personPhone, ".input_phone_error") === false) {
      isValid = false
    }
    if (validateEmail(formEl.personEmail, ".input_email_error") === false) {
      isValid = false
    }
    if (isValid) {
      const orderStorage = JSON.parse(localStorage.getItem("order"));
      const formData = new FormData(formEl);
      //У мене не має сервера для відправки

      const numberOfOrder = Date.now();
      formData.append("numberOrder", numberOfOrder);
      renderSuccessStatus(formEl, numberOfOrder);
      

    } 
  });
};
export { sendForm };
