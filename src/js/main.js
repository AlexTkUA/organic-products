"use strict"
import renderHeader from "./components/header.js";
import showMobMenu from "./components/burger.js";
import renderList from "./components/productList.js";
import getData from "./components/getData.js";
import { showLoader, hideLoader } from "./components/loader.js";
document.addEventListener("DOMContentLoaded", () => {

    document.body.insertAdjacentHTML("afterbegin", renderHeader());

    /**============Burger Action ==============*/
    const burgerElement = document.querySelector(".burger");
    const mobMenuElement = document.querySelector(".nav_mob");
    showMobMenu(burgerElement, mobMenuElement)
    /*===========================================*/
    
    /**=============Product list on main page=========== */
getData("src/data/products.json", true, "[data-loader]").then(data => {
  renderList(data, ".shop_list")
  let vegetables = data.filter(item => item.category === "Vegetable");
  vegetables = vegetables.slice(0,4);
  renderList(vegetables, ".bestProduct_wrapper")
})
})