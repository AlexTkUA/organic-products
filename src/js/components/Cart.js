"use strict";

class Cart {
  constructor(id, count) {
    this._id = id;
    this._count = count;
  }

  saveCart() {
    if (localStorage.getItem("cart")) {
      const cartStorage = JSON.parse(localStorage.getItem("cart"));
      cartStorage[this._id] = this._count;
      localStorage.setItem("cart", JSON.stringify(cartStorage));
    } else {
      const cartStorage = {};
      cartStorage[this._id] = this._count;
      localStorage.setItem("cart", JSON.stringify(cartStorage));
    }
  }
  static getCartAmount() {
    let amount = 0;
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      const cartObj = JSON.parse(cartFromStorage);
      amount = Object.keys(cartObj).length;
      return amount;
    } else {
      return amount;
    }
  }
  static getCart() {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return {};
    }
  }
  static increaseAmount (id) {
    const cart = this.getCart();
    cart[id] ++;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static decreaseAmount (id, isNeedDeleteBlock, element) {
    const cart = this.getCart();
    cart[id] --;
    if (cart[id] <= 0) {
      delete cart[id];
      if (isNeedDeleteBlock) {
      const block = element.closest(`[data-cart-item-${id}]`);
      block.remove();
    }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static deleteProduct (id) {
    const cart = this.getCart();
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
export default Cart;
