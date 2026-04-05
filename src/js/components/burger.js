"use strict";
const burgerAction = () => {
  const burgerElement = document.querySelector(".burger");
  const mobMenuElement = document.querySelector(".nav_mob");
  const closerEl = document.querySelector(".nav_mob_closer");
  burgerElement.addEventListener("click", () => {
    mobMenuElement.classList.toggle("nav_mob-show");
  });
  closerEl.addEventListener("click", () => {
    mobMenuElement.classList.toggle("nav_mob-show");
  });
};
export default burgerAction;
