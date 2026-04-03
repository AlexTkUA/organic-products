"use strict";
import { correctPath, correctPathToDate } from "./url.js";
import { Pagination } from "./Pagination.js";
const renderList = (products, placeHolder, countOnPage) => {
  if (products.length === 0) {
    return;
  }
  const productPagination = new Pagination(countOnPage, products.length);

  const displayList = () => {
    const placeHolderElement = document.querySelector(placeHolder);
    placeHolderElement.innerHTML = ``;

    const slicedArr = products.slice(
      productPagination.startArr,
      productPagination.endArr,
    );

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

  displayList();
  productPagination.renderPagination(displayList);
};
export { renderList };
