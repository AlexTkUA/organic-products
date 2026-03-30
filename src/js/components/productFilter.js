"use strict";
import { renderList } from "./productList.js";
function productFilterCategory (data, selector) {
  const categoriesListEl = document.querySelector(".shop_category-list");
  categoriesListEl.addEventListener("click", (event) => {

    const target = event.target;
    const parentEl = target.closest("[data-category]");
    let categoryName = ``;
    if (parentEl) {
      categoryName = parentEl.dataset.category;
      document.querySelector(".shop_category_title").textContent = categoryName;
    }
    const filterArr = data.filter(
      ({ category }) => category.trim().toLowerCase() === categoryName.toLowerCase(),
    );
    renderList(filterArr, selector, 8);
  });
};
export default productFilterCategory;
