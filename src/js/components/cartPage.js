"use strict";
import Cart from "./Cart.js";
import { renderPrice } from "./singleProductPage.js";
import { correctPath } from "./url.js";
import determinePrice from "./determinePrice.js";
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
      const productStatus = Cart.decreaseAmount(id);
      if (productStatus) {
        const block = el.closest(`[data-cart-item-${id}]`);
        block.remove();
        updateCartIcon();
        updateTotalPrice();
        if (Cart.getCartAmount() == 0) {
          renderEmptyCart();
        }
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
      if (Cart.getCartAmount() === 0) {
        renderEmptyCart();
      }
    });
  });
};
const createOrder = (listProduct) => {
  const cart = Cart.getCart();
  return listProduct.map((product) => ({
    id: product.id,
    productName: product.name,
    productPrice: determinePrice(
      product.isDiscount,
      product.discountPrice,
      product.price,
    ),
    amount: cart[product.id] || 0,
  }));
};

const goToOrderPage = (listProduct) => {
  const btn = document.querySelector("[data-order-btn]");
  btn.addEventListener("click", () => {
    const order = createOrder(listProduct)
    localStorage.setItem("order", JSON.stringify(order));
  });
};

const renderListCart = (data) => {
  const place = document.querySelector(".cart-container");
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
          <a data-order-btn href="${correctPath(true)}pages/buypage/index.html" class="button btn-dark-color">
            <span class="button_text text-white">Buy</span>
          </a>
        </div>`;
  place.insertAdjacentHTML("beforeend", htmlPrice);
  goToOrderPage(productList);
};
const countTotalPrice = (productList) => {
  const cart = Cart.getCart() || {};
  const arrKeys = Object.keys(cart);
  const totalPrice = arrKeys.reduce((accumulator, id) => {
    const product = productList.find((el) => el.id === id);
    let price = determinePrice(
      product.isDiscount,
      product.discountPrice,
      product.price,
    );
    console.log(price);
    price = price.replace("$", ""); //костиль
    const quantity = cart[id];
    return (accumulator = accumulator + price * quantity);
  }, 0);
  return totalPrice;
};
const renderEmptyCart = () => {
  const place = document.querySelector(".cart-container");
  place.innerHTML = ``;
  const wrapper = document.createElement("div");
  wrapper.classList.add("cart-empty");

  const title = document.createElement("h2");
  title.classList.add("cart-empty-title", "h1");
  title.textContent = "CART IS EMPTY :(";
  wrapper.append(title);

  const btnHtml = `<a href="${correctPath(true)}pages/shop/index.html" class="button m0a bmw btn-dark-color">
            <span class="button_text text-white">Go to shop</span>
            <div class="button_icon">
              <img src="${correctPath(true)}assets/icons/aerrow-blue.svg" alt="" />
            </div>
          </a>`;
  wrapper.insertAdjacentHTML("beforeend", btnHtml);
  place.append(wrapper);
};
export { renderListCart, increase, decrease, deleteProductEl, renderEmptyCart, updateCartIcon};
