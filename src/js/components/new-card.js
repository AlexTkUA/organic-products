"use strict";
import { getFormatMonth, getMonthName } from "./timeDB.js";
import { correctPath } from "./url.js";
import { Pagination } from "./Pagination.js";
const renderNewsList = (data, selectPlaceholder, countOnOnePage,  count = 2) => {
  const newsPagination = new Pagination(countOnOnePage, data.news.length);
  const renderStructure = (arr) => {
    let html = ``;
    arr.forEach((element) => {
      const { id, author, createdAt, promo} = element;
      const {photo, promoTitle, promoParagraph} = promo
      const words = promoParagraph.split(" ");
      let formattedPar = "";
      if (words.length >= 15) {
        formattedPar = words.slice(0, 15).join(" ") + "...";
      } else {
        formattedPar = words.slice().join(" ");
      }
      const d = new Date(createdAt);
      const date = d.getDate() >= 10 ? d.getDate() : "0" + d.getDate();
      const month = getFormatMonth(getMonthName(d.getMonth()), 0, 3);
      const fullDate = date + " " + month;
      html += `<div class="new-card">
              <div class="new-card_bg">
                <img src="${correctPath(true)}assets/img/${photo}" alt="" />
              </div>
              <div class="new-card_data">
                <span class="new-card_data_text">${fullDate}</span>
              </div>
              <div class="new-card_wrapper">
                <div class="new-card_info">
                  <span class="new-card_info_creator">By ${author}</span>
                  <h6 class="new-card_info_title">
                    ${promoTitle}
                  </h6>
                  <p class="new-card_info_paragraph">
                    ${formattedPar}
                  </p>
                  <a href="${correctPath(true)}pages/article/index.html?id=${id}" class="button btnm0auto">
                    <span class="button_text">Read More</span>
                    <div class="button_icon">
                      <img src="${correctPath(true)}assets/icons/aerrow-blue.svg" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>`;
    });
    return html;
  };
  const displayNewsList = () => {
    const place = document.querySelector(selectPlaceholder);
    if (window.location.pathname.includes("news")) {
      count = data.length;
    }
    let arrNews = data.news.slice(0, count);

    arrNews = arrNews.sort(
      (pre, next) => new Date(next.createdAt) - new Date(pre.createdAt),
    );
    arrNews = arrNews.slice(newsPagination.startArr, newsPagination.endArr);
    place.innerHTML = renderStructure(arrNews);
  };
  displayNewsList();
  newsPagination.renderPagination(displayNewsList);
};
export default renderNewsList;
