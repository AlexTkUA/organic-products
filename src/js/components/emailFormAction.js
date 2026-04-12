"use strict";
const sendEmailForm = () => {
  const emailForm = document.querySelector("#emailForm");
  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("email", emailForm.email.value);
    emailForm.innerHTML = `<span class = "emailForm_success">Thanks for subscribing</span>`;
  });
};
export default sendEmailForm;
