"use strict";
import { correctPath } from "./url.js";
import Cart from "./Cart.js";

const renderPrice = (isDiscount, price, discountPrice) => {
    if (isDiscount) {
      return `
                    <span class="product-card_lowerBlock_price_previous">${price}</span>
                    <span class="product-card_lowerBlock_price_current">${discountPrice}</span>
                    `;
    } else {
      return `<span class="product-card_lowerBlock_price_current">${price}</span>`;
    }
  };
  const renderRating = (num) => {
    let html = ``;
    for (let index = 0; index < Math.round(num); index++) {
      html += `
                    <div class="starsBlock_img">
                        <img src="${correctPath(true)}assets/icons/star.svg" alt="" />
                    </div>`;
    }
    return html;
  };

const renderSinglePageProduct = (data, placeholder) => {
  const getUrlParams = new URLSearchParams(window.location.search);
  const productIdParam = getUrlParams.get("id");
  const placeEl = document.querySelector(placeholder);
  const product = data.find((el) => el.id === productIdParam);
  const pageTitleEl = document.querySelector("title");
  pageTitleEl.innerText = product.name;

  const renderMainInfo = () => {
    const {id, category, name, price, discountPrice, isDiscount, rating, scr } =
      product;
    placeEl.innerHTML = `<div id = ${id} class="product-info_main-block">
            <div class="product-info_main-block_photo">
              <img src="${correctPath(true)}assets/productPhotos/${scr}" alt="" />
            </div>
            <div class="product-info_main-block_wrapper">
              <span class="product-card_category">${category}</span>
              <h3 class="h3">${name}</h3>
              <div class="starsBlock">
                ${renderRating(rating)}
              </div>
              <div class="product-card_lowerBlock_price">
                ${renderPrice(isDiscount, price, discountPrice)}
              </div>
              <p class="paragraph">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div class="counter-block">
                <a data-cart-btn href="#" class="button btn-dark-color">
                  <span class="button_text text-white">Add</span>
                </a>
              </div>
            </div>
          </div>`;

  };
  const addToCart = () => {
    const btnEl = document.querySelector("[data-cart-btn]");
    btnEl.addEventListener("click", (event) => {
      event.preventDefault();
      const cartObj = new Cart(product.id, 1);
      cartObj.saveCart();
      const cartHederEl = document.querySelector("[data-cart]");
      cartHederEl.textContent = Cart.getCartAmount();
    });
  };
  renderMainInfo();

  addToCart();
};
export {renderSinglePageProduct, renderPrice};
