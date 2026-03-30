"use strict";
import { correctPath } from "./url.js";
const renderCategoryList = (data, selector) => {
  const placeEl = document.querySelector(selector);

  data.forEach(({nameCategory, title, photo}) => {
    const item = document.createElement("div");
    item.classList.add("shop_category-list_item");
    item.setAttribute("data-category", nameCategory)
    item.innerHTML = `<div class="shop_category-list_item_img">
                <img src="${correctPath(true)}assets/productPhotos/${photo}" alt="" />
              </div>
              <h6 class = "shop_category-list_item_title">${title}</h6>`;
    placeEl.append(item);
  });
};
export default renderCategoryList;