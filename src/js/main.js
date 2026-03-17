"use strict"
import renderHeader from "./components/header.js";
import showMobMenu from "./components/burger.js";
document.addEventListener("DOMContentLoaded", () => {

    document.body.insertAdjacentHTML("afterbegin", renderHeader());

    /**============Burger Action ==============*/
    const burgerElement = document.querySelector(".burger");
    const mobMenuElement = document.querySelector(".nav_mob");
    showMobMenu(burgerElement, mobMenuElement)


})