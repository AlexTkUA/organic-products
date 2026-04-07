"use strict";
import Cart from "./Cart.js";
import { renderPrice } from "./singleProductPage.js";
import { correctPath } from "./url.js";
const increase = () => {
  const plus = document.querySelectorAll(".plus");
  if (!plus) {
    return;
  }
  plus.forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.dataset.idPlus;
      Cart.increaseAmount(id);
      const quantityEl = document.querySelector(`[data-quantity-${id}]`);
      const cartStorage = Cart.getCart();
      quantityEl.textContent = `Quantity : ${cartStorage[id]}`;
    });
  });
};
const decrease = () => {
  const minus = document.querySelectorAll(".minus");
  if (!minus) {
    return;
  }
  minus.forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.dataset.idMinus;
      console.log(id);
      Cart.decreaseAmount(id, true, el);
      const quantityEl = document.querySelector(`[data-quantity-${id}]`);
      const cartStorage = Cart.getCart();
      quantityEl.textContent = `Quantity : ${cartStorage[id]}`;
    });
  });
};
const deleteProductEl = () => {
  const deleter = document.querySelectorAll(".cart-item-deleter");
  deleter.forEach((el) => {
    el.addEventListener("click", () => {
      const productId = el.dataset.deleter;
      Cart.deleteProduct(productId);
      const block = el.closest(`[data-cart-item-${productId}]`);
      block.remove();
    });
  });
};
const renderListCart = (data, placeholder) => {
  const place = document.querySelector(placeholder);
  const cartList = Cart.getCart();
  const arrKeys = Object.keys(cartList);
  let productList = [];
  for (let index = 0; index < arrKeys.length; index++) {
    productList.push(data.find((el) => el.id === arrKeys[index]));
  }
  let html = ``;
  productList.forEach(({ id, name, discountPrice, price, isDiscount, scr }) => {
    html += `<div data-cart-item-${id} class="product-info_main-block cart-item">
            <div data-deleter = ${id} class = "cart-item-deleter"><img src = "${correctPath(true)}assets/icons/closer.png"></div>
            <div class="product-info_main-block_photo cart-item-photo">
              <img src="${correctPath(true)}assets/productPhotos/${scr}" alt="" />
            </div>
            <div class="product-info_main-block_wrapper">
              <h3 class="h3">${name}</h3>
              <div class="product-card_lowerBlock_price">
                ${renderPrice(isDiscount, price, discountPrice)}
              </div>
              <div class="counter-block">
                <span data-quantity-${id} class="counter-block_text">Quantity : ${cartList[id]}</span>
                <div class = "counter-block_cart-cation">
                    <div data-id-plus = ${id} class = "plus">+</div>
                    <div data-id-minus = ${id} class = "minus">-</div>
                </div>
              </div>
            </div>
          </div>`;
  });
  place.innerHTML = html;
};
export { renderListCart, increase, decrease, deleteProductEl };
