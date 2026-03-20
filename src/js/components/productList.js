"use strict"
const renderList = (products, placeHolder) => {
    const placeHolderElement = document.querySelector(placeHolder);
    if (!placeHolderElement) {
        return
    }
    let html = ``;
    products.forEach(element => {
        const {category, name, price, discountPrice, rating, isDiscount, scr} = element;
        // let actualPrice = isDiscount ? discountPrice : price;
        html += `<a href="#" class="product-card">
              <span class="product-card_category">${category}</span>
              <div class="product-card_photo">
                <img data-photo
                  src="src/assets/productPhotos/${scr}"
                  alt="${name}"
                />
              </div>
              <h4 class="product-card_name">${name}</h4>
              <div class="product-card_lowerBlock">
                <div class="product-card_lowerBlock_price">`
                if (isDiscount) {
                    html += `
                    <span class="product-card_lowerBlock_price_previous">${price}</span>
                    <span class="product-card_lowerBlock_price_current">${discountPrice}</span>
                    `
                } else {
                    html += `<span class="product-card_lowerBlock_price_current">${price}</span>`
                }
                  html += `</div>
                <div class="starsBlock">`
                for (let index = 0; index < Math.round(rating); index++) {
                    html += `
                    <div class="starsBlock_img">
                        <img src="src/assets/icons/star.svg" alt="" />
                    </div>`
                }
                html += 
                  `
                </div>
              </div>
            </a>`
    });
    placeHolderElement.innerHTML = html;
}
export default renderList;