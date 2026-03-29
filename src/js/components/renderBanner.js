"use strict";
const renderBanner = () => {
    /*Об'єкт з назвами сторінок де має бути банер. Ключі повинні мати таку саму назву як сторінки в папці pages */
  const pages = {
    aboutus: {
      title: "About Us",
      bannerClass: "bannerAboutUs",
    },
    shop: {
      title: "Shop",
      bannerClass: 'bannerShop',
    },
  };
    return (selector) => {
    const parts = window.location.pathname.split("/");
    const pageName = parts[parts.indexOf("pages") + 1].toLowerCase();
    const { title, bannerClass } = pages[pageName];
    const selectorBanner = document.querySelector(selector);
    selectorBanner.outerHTML = `<section class = "banner ${bannerClass}">
            <div class="container banner-conatiner">
                <div class="banner_wrapper">
                    <h1 class = "h1">${title}</h1>
                </div>
            </div>
        </section>`;
  };
};

export default renderBanner;
