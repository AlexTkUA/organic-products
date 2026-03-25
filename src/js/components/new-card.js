"use strict";
import { getFormatMonth, getMonthName } from "./timeDB.js";
const renderNewsList = (data, selectPlaceholder, count = 2) => {
  const place = document.querySelector(selectPlaceholder);
  if (!place) {
    throw new Error("place in renderNewsList is not defined");
  }
  let html = ``;
  const arrNews = data.news.slice(0, count);
  arrNews
    .sort((pre, next) => new Date(next.createdAt) - new Date(pre.createdAt))
    .forEach((element) => {
      const { id, title, author, createdAt, paragraph, photo } = element;
      const words = paragraph.split(" ");
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
      html += `<div id = "${id}" class="new-card">
              <div class="new-card_bg">
                <img src="src/assets/img/${photo}" alt="" />
              </div>
              <div class="new-card_data">
                <span class="new-card_data_text">${fullDate}</span>
              </div>
              <div class="new-card_wrapper">
                <div class="new-card_info">
                  <span class="new-card_info_creator">By ${author}</span>
                  <h6 class="new-card_info_title">
                    ${title}
                  </h6>
                  <p class="new-card_info_paragraph">
                    ${formattedPar}
                  </p>
                  <a href="#" class="button btnm0auto">
                    <span class="button_text">Read More</span>
                    <div class="button_icon">
                      <img src="src/assets/icons/aerrow-blue.svg" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>`;
    });
  place.innerHTML = html;
};
export default renderNewsList;
