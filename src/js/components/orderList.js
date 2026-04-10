"use strict";
const renderOrderList = (placeHolder) => {
  const place = document.querySelector(placeHolder);
  const orderList = JSON.parse(localStorage.getItem("order"));
  if (!orderList) {
    return;
  }
  const ulEl = document.createElement("ul");
  ulEl.classList.add("order_info_list");
  const titleListHtml = `<span class="order_info_list_title">Your order</span>`;
  if (!orderList) {
    return;
  }
  let totalPrice = 0;
  orderList.forEach(({ productName, productPrice, amount }) => {
    const productTotalPrice = parseFloat(productPrice) * amount;
    totalPrice += productTotalPrice;

    const liEl = document.createElement("li");
    liEl.classList.add("order_info_list_item");
    liEl.innerHTML = `<span class="order_info_list_item_amount">${amount}x</span>
                <span class="order_info_list_item_name">${productName}</span>
                <span class="order_info_list_item_price">$${productTotalPrice}</span>`;

    ulEl.append(liEl);
  });
  place.append(ulEl);
  ulEl.insertAdjacentHTML("beforebegin", titleListHtml);
  const totalPriceEl = `<span class="order_info_totalPrice">Total price: $${totalPrice}</span>`;
  ulEl.insertAdjacentHTML("afterend", totalPriceEl);
};
export default renderOrderList;
