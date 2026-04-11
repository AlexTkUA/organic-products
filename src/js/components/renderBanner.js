"use strict";
const renderBanner = () => {
    /*Об'єкт з назвами сторінок де має бути банер. Ключі повинні мати таку саму назву як сторінки в папці pages */
    /**Ключі мають бути з маленько */
    /*Щоб додати банер на сторінку треба в html прописати блок з класом banner. Додати в модуль banner.css клас з background image. Додати ключ з назвою сторінки в об'єкт pages. Назва ключа має бути така як назва папки в якій знаходиться наша сторінка. В ключ записати значення у вигляді об'єкта де прописати два значення: title та bannerClass. В bannerClass записати назву класу який ми створили в banner.css */ 
  const pages = {
    aboutus: {
      title: "About Us",
      bannerClass: "bannerAboutUs",
    },
    shop: {
      title: "Shop",
      bannerClass: 'bannerShop',
    },
    standards: {
      title: "Quality Standard",
      bannerClass: 'bannerStandard',
    },
    news: {
      title: "Recent  News",
      bannerClass: "bannerNews"
    },
    services: {
      title: "Services",
      bannerClass: "bannerServices"
    },
    productpage: {
      title: "Shop Single",
      bannerClass: "bannerProduct"
    },
    cart: {
      title: "Cart",
      bannerClass: "bannerCart"
    },
    contactus: {
      title: "Contact Us",
      bannerClass: "bannerContactUs"
    }
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
