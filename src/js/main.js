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
    const products = [
  {
    category: "Vegetable",
    name: "Calabrese Broccoli",
    price: "$20.00",
    discountPrice: "$13.00",
    rating: 5,
    isDiscount: true,
    scr: "product01.png"
  },
  {
    category: "Fresh",
    name: "Fresh Banana Fruites",
    price: "$18.00",
    discountPrice: "$14.00",
    rating: 4,
    isDiscount: true,
    scr: "product02.png"
  },
  {
    category: "Millets",
    name: "White Nuts",
    price: "$15.00",
    discountPrice: "$15.00",
    rating: 4,
    isDiscount: false,
    scr: "product03.png"
  },
  {
    category: "Vegetable",
    name: "Vegan Red Tomato",
    price: "$17.00",
    discountPrice: "$12.00",
    rating: 5,
    isDiscount: true,
    scr: "product04.png"
  },
  {
    category: "Health",
    name: "Mung Bean",
    price: "$11.00",
    discountPrice: "$11.00",
    rating: 3,
    isDiscount: false,
    scr: "product05.png"
  },
  {
    category: "Nuts",
    name: "Brown Hazelnut",
    price: "$25.00",
    discountPrice: "$18.00",
    rating: 5,
    isDiscount: true,
    scr: "product06.png"
  }
];
getData("src/data/products.json", true, "[data-loader]").then(data => {
  renderList(data, ".shop_list")
})
})