"use strict";
import getData from "./getData.js";
let dataFromServer = [];
getData("https://dummyjson.com/comments").then((data) => {
  dataFromServer = data.comments.filter((el) => el.id < 10);
  renderSlides(dataFromServer);
  initSwiper();
});
const renderSlides = (comments) => {
  const sliderContainer = document.querySelector(".swiper-wrapper");
  if (!sliderContainer) {
    return;
  }
  let html = ``;
  comments.forEach((comment) => {
    const userName = comment.user.fullName;
    const usersComment = comment.body;
    html += `<div class="swiper-slide dfc">
                <div class="slider-item_icon">
                ${userName.charAt(0).toUpperCase()}
                </div>
                <div class="starsBlock mb25">`;
    for (let index = 0; index < comment.likes; index++) {
      html += `<div class="starsBlock_img">
                    <img src="src/assets/icons/star.svg" alt="" />
                  </div>`;
    }
    html += `</div>
                <p class="paragraph text-center">${usersComment}</p>
                <h6 class="starsBlock_userName">${userName}</h6>
                <span class="starsBlock_userProfession">Consumer</span>
              </div>`;
  });
  sliderContainer.innerHTML = html;
};
const initSwiper = () => {
const swiper02 = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  autoplay: {
   delay: 5000,
 },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled:true,
  },
  breakpoints: {
    0: {
      navigation: {
        enabled: false,
      },
    },
    481: {
      navigation: {
        enabled: true,
      },
    },
  },
});

}
