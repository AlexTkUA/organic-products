"use strict";
import Cart from "./Cart.js";
import { renderPrice } from "./singleProductPage.js";
import { correctPath } from "./url.js";
let dataCache = []; // Глобальна перемінна !!!!!!!!!!
const updateQuantity = (id) => {
  const quantityEl = document.querySelector(`[data-quantity-${id}]`);
  const cartStorage = Cart.getCart();
  quantityEl.textContent = `Quantity : ${cartStorage[id]}`;
};
const updateTotalPrice = () => {
  const totalPriceEl = document.querySelector(".cart-total-price");
  totalPriceEl.innerHTML = `Total price: $${countTotalPrice(dataCache)}`;
};
const updateCartIcon = () => {
  const cartIcon = document.querySelector("[data-cart]");
  cartIcon.textContent = Cart.getCartAmount();
};
const increase = () => {
  const plus = document.querySelectorAll(".plus");
  if (!plus) {
    return;
  }
  plus.forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.dataset.idPlus;
      Cart.increaseAmount(id);
      updateQuantity(id);
      updateTotalPrice();
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
      const productStatus = Cart.decreaseAmount(id);
      if (productStatus) {
        const block = el.closest(`[data-cart-item-${id}]`);
        block.remove();
        updateCartIcon();
        updateTotalPrice();
        return;
      }
      updateQuantity(id);
      updateTotalPrice();
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
      updateCartIcon();
      updateTotalPrice();
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
  dataCache = productList;
  let html = ``;
  productList.forEach(({ id, name, discountPrice, price, isDiscount, scr }) => {
    html += `<div data-cart-item-${id} class="cart-item">
            <div data-deleter = ${id} class = "cart-item-deleter"><img src = "${correctPath(true)}assets/icons/closer.png"></div>
            <div class="cart-item-photo">
              <img src="${correctPath(true)}assets/productPhotos/${scr}" alt="" />
            </div>
            <div class="product-info_main-block_wrapper cart-item-wrapper">
              <h3 class="h3 cart-item-title">${name}</h3>
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
  //я знаю що тут піздец
  place.innerHTML = html;
  const htmlPrice = `<div class="cart-price-wrapper">
          <span class="cart-total-price">Total price: $${countTotalPrice(productList)}</span>
          <a href="src/pages/aboutUs/index.html" class="button btn-dark-color">
            <span class="button_text text-white">Offer</span>
          </a>
        </div>`;
  place.insertAdjacentHTML("beforeend", htmlPrice);
};
const countTotalPrice = (productList) => {
  const cart = Cart.getCart() || {};
  const arrKeys = Object.keys(cart);
  const totalPrice = arrKeys.reduce((accumulator, id) => {
    const product = productList.find((el) => el.id === id);
    let price = product.isDiscount ? product.discountPrice : product.price;
    price = price.replace("$", ""); //костиль
    const quantity = cart[id];
    return accumulator = accumulator + (price * quantity);
  }, 0);
  return totalPrice;
};
const renderEmptyCart = (placeholder) => {
  const place = document.querySelector(placeholder);
};
export { renderListCart, increase, decrease, deleteProductEl };
