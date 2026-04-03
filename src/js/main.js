"use strict";
import renderHeader from "./components/header.js";
import renderFooter from "./components/footer.js";
import renderEmailForm from "./components/renderEmailForm.js";
import { correctPath, correctPathToDate } from "./components/url.js";
import showMobMenu from "./components/burger.js";
import { renderList } from "./components/productList.js";
import getData from "./components/getData.js";

import renderStats from "./components/statsCount.js";
import renderNewsList from "./components/new-card.js";
import renderBanner from "./components/renderBanner.js";
import renderTeamsCards from "./components/renderTeams.js";
import renderCategoryList from "./components/categories.js";
import productFilterCategory from "./components/productFilter.js";
import renderNewsPage from "./components/article.js";



document.addEventListener("DOMContentLoaded", () => {

  /**=============Render header================== */
  document.body.insertAdjacentHTML("afterbegin", renderHeader());
  /*===========================================*/

  /**=============Render footer================== */
  document
    .querySelector(".main")
    .insertAdjacentHTML("afterend", renderFooter());
  /*===========================================*/

  /**=============Render footer================== */
  document
    .querySelector(".main")
    .insertAdjacentHTML("beforeend", renderEmailForm());
  /*===========================================*/

  /**============Burger Action ==============*/
  const burgerElement = document.querySelector(".burger");
  const mobMenuElement = document.querySelector(".nav_mob");
  showMobMenu(burgerElement, mobMenuElement);
  /*===========================================*/

  /**=============Product list on main page=========== */
  if (!window.location.href.includes("pages")) {
    getData(
      `${correctPathToDate(true)}data/products.json`,".shop_list" ).then((data) => {
      renderList(data, ".shop_list", 10);

      });
      getData(
        `${correctPathToDate(true)}data/products.json`,".bestProduct_wrapper" ).then((data) => {
          let vegetables = data.filter((item) => item.category === "Vegetable");
          vegetables = vegetables.slice(0, 4);
          renderList(vegetables, ".bestProduct_wrapper", 4);
  
        });
      
  }
  /*===========================================*/

  /**=================Stats==================== */
  if (document.querySelector(".testimonialAndCounter_counter_wrapper")) {
    getData(`${correctPathToDate(true)}data/stats.json`).then((data) => {
      renderStats(data, ".testimonialAndCounter_counter_wrapper");
    });
  }

  /*===========================================*/

  /**===============News block================== */
  if (document.querySelector(".news_wrapper")) {
    getData(`${correctPathToDate(true)}data/news02.json`, ".news_wrapper").then((data) => {
      renderNewsList(data, ".news_wrapper", 4, 2);
    });
  }
  /**=========================================== */

  /**===============Banner====================== */
  if (document.querySelector(".banner")) {
    const banner = renderBanner();
    banner(".banner");
  }
  /**=========================================== */

  /**==============Team list==================== */
  if (document.querySelector(".teams_wrapper")) {
    getData(`${correctPath(true)}data/team.json`, ".teams_wrapper").then((data) => {
      renderTeamsCards(data, ".teams_wrapper");
    });
  }
  /**=========================================== */

  /**=================Shop on page============== */
  //Категорії товарів
  if (document.querySelector(".shop_category-list")) {
    getData(`${correctPathToDate(true)}data/categories.json`, ".shop_category-list").then((data) => {
      renderCategoryList(data, ".shop_category-list");
    });
  }

  //Товари
  if (document.querySelector(".shop_list-page")) {
    getData(`${correctPathToDate(true)}data/products.json`, ".shop_list-page").then((data) => {
      renderList(data, ".shop_list-page", 8);
      productFilterCategory(data, ".shop_list-page");
    });
  }
  /**=========================================== */

  /**================Render article=============== */
  if (document.querySelector(".container_info_promo")) {
    getData(`${correctPathToDate(true)}data/news02.json`, ".container_info_promo")
    .then(data => {
      renderNewsPage(data, ".container_info_promo");
    })
  }
  /**============================================= */
});
