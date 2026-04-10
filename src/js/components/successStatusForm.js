"use strict";
import { updateCartIcon } from "./cartPage.js";
const renderSuccessStatus = (placeHolder, orderOfNumber) => {
  placeHolder.innerHTML = ``;

  const loaderEl = document.createElement("div");
  loaderEl.classList.add("mask");
  loaderEl.innerHTML = `<div class ="loader"></div>`;
  placeHolder.append(loaderEl);

  //Імітація затримки відправки даних
  const sleep = () => {
    return new Promise((res) => setTimeout(res, 1000));
  };
  sleep().then(() => {
    loaderEl.remove();
    const html = `<div class="success_message">
  <h3 class = "success_message_title">Thanks for your order!</h3>
  <span class = "success_message_subtitle">Your order number is: ${orderOfNumber}</span>
</div>`;
    placeHolder.insertAdjacentHTML("beforeend", html);
    localStorage.removeItem("order");
    localStorage.removeItem("cart");
    updateCartIcon()
  });
};
export default renderSuccessStatus;
