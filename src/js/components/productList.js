"use strict";
import { correctPath, correctPathToDate } from "./url.js";
const renderList = (products, placeHolder, countOnPage) => {
  if (products.length === 0) {
    return;
  }
  
  let currentPage = 1;
  const displayList = () => {
    const placeHolderElement = document.querySelector(placeHolder);
    placeHolderElement.innerHTML = ``;

    const star = (currentPage - 1) * countOnPage;
    const end = star + countOnPage;
    const slicedArr = products.slice(star, end);

    let html = ``;
    slicedArr.forEach((element) => {
      const { category, name, price, discountPrice, rating, isDiscount, scr } =
        element;
      html += `<a href="#" class="product-card">
              <span class="product-card_category">${category}</span>
              <div class="product-card_photo">
                <img data-photo
                  src="${correctPath(true)}assets/productPhotos/${scr}"
                  alt="${name}"
                />
              </div>
              <h4 class="product-card_name">${name}</h4>
              <div class="product-card_lowerBlock">
                <div class="product-card_lowerBlock_price">`;
      if (isDiscount) {
        html += `
                    <span class="product-card_lowerBlock_price_previous">${price}</span>
                    <span class="product-card_lowerBlock_price_current">${discountPrice}</span>
                    `;
      } else {
        html += `<span class="product-card_lowerBlock_price_current">${price}</span>`;
      }
      html += `</div>
                <div class="starsBlock">`;
      for (let index = 0; index < Math.round(rating); index++) {
        html += `
                    <div class="starsBlock_img">
                        <img src="${correctPath(true)}assets/icons/star.svg" alt="" />
                    </div>`;
      }
      html += `
                </div>
              </div>
            </a>`;
    });
    placeHolderElement.innerHTML = html;
  };
  const displayPagination = (dataArr) => {
    const pagEl = document.querySelector(".pagination");
    if (!pagEl) {
      return
    }
    pagEl.innerHTML = ``;
    if (!pagEl) {
      return;
    }
    const countPages = Math.ceil(dataArr.length / countOnPage)

    const pagListEl = document.createElement("ul");
    pagListEl.classList.add("pagination_list")
    pagListEl.innerHTML = ``;
    
    for (let i = 0; i < countPages; i++) {
      const pagItemEl = document.createElement("li");
      pagItemEl.classList.add("pagination_list_item")
      pagItemEl.textContent = i + 1;
      pagListEl.appendChild(pagItemEl);

      pagItemEl.addEventListener("click", () => {
        const activePag = document.querySelector(".pag-active");
        if (activePag) {
          activePag.classList.remove("pag-active")
        }
        currentPage = parseInt(pagItemEl.textContent);
        displayList();
        pagItemEl.classList.add("pag-active");
      })
    }
    pagEl.appendChild(pagListEl);
  };
  displayList();
  displayPagination(products);
};
export { renderList };
