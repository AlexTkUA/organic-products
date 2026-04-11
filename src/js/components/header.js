"use strict";
import { correctPath } from "./url.js";
import Cart from "./Cart.js";
const renderHeader = () => {
  const displayHeader = () => {
    const startUrl = correctPath(true);
    const html = `<header class = "header">
        <div class="container header-container">
          <a href="${startUrl === "../../" ? startUrl + "../" : ""}index.html" class = "logo">
            <div class = "logo_img">
              <img src="${startUrl}assets/logo/logo.svg" alt="logo">
            </div>
            <span class = "logo_text">Organic</span>
          </a>
          <div class = "burger show">
            <img src="${startUrl}assets/icons/burger-menu.svg" alt="menu">
          </div>
          <nav class = "nav">
            <ul class ="nav_list">
              <li class = "nav_list_item"><a href="${startUrl}pages/aboutUs/index.html">About</a></li>
              <li class = "nav_list_item"><a href="${startUrl}pages/shop/index.html">Shop</a></li>
              <li class = "nav_list_item"><a href="#">Projects</a></li>
              <li class = "nav_list_item"><a href="${startUrl}pages/news/index.html">News</a></li>
              <li class = "nav_list_item"><a href="${startUrl}pages/services/index.html">Services</a></li>
            </ul>
          </nav>
          <nav class = "nav_mob">
          <div class = "nav_mob_closer">X</div>
            <ul class ="nav_mob_list">
              <li class = "nav_mob_list_item"><a href="${startUrl}pages/aboutUs/index.html">About</a></li>
              <li class = "nav_mob_list_item"><a href="${startUrl}pages/shop/index.html">Shop</a></li>
              <li class = "nav_mob_list_item"><a href="#">Projects</a></li>
              <li class = "nav_mob_list_item"><a href="${startUrl}pages/news/index.html">News</a></li>
              <li class = "nav_list_item"><a href="${startUrl}pages/services/index.html">Services</a></li>

              </ul>
          </nav>
          <form id = "formForSearch" class = "search" action="">
            <div class = search_placeholder>
              <input class = "search_placeholder_input" type="text">
              <button type="submit" class="search_placeholder_btn"><div class="search_placeholder_btn_img"><img src="${startUrl}assets/icons/search.svg" alt=""></div></button>
            </div>
          </form>
          <div class = "cart_icon">
            <a href="${correctPath(true)}pages/cart/index.html" class = "cart_icon_block"><div class = "cart_icon_block_img"><img src="${startUrl}assets/icons/cart.svg" alt=""></div></a>
            <span class = "cart_icon_count">Cart (<span data-cart >${Cart.getCartAmount()}</span>)</span>
          </div>
        </div>
    </header>`;
    return html;
  };
  return displayHeader();
  
};
export default renderHeader;
