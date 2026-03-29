"use strict";
import renderHeader from "./components/header.js";
import renderFooter from "./components/footer.js";
import renderEmailForm from "./components/renderEmailForm.js";
import { correctPath, correctPathToDate } from "./components/url.js";
import showMobMenu from "./components/burger.js";
import {renderList} from "./components/productList.js";
import getData from "./components/getData.js";
import { showLoader, hideLoader } from "./components/loader.js";
import renderStats from "./components/statsCount.js";
import renderNewsList from "./components/new-card.js";
import renderBanner from "./components/renderBanner.js";
import renderTeamsCards from "./components/renderTeams.js";
document.addEventListener("DOMContentLoaded", () => {
  console.log("object");
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
  if (!window.location.href.includes("pages"))
    getData(
      `${correctPathToDate(true)}data/products.json`,
      true,
      "[data-loader]",
    ).then((data) => {
      renderList(data, ".shop_list", 10);
      
      let vegetables = data.filter((item) => item.category === "Vegetable");
      vegetables = vegetables.slice(0, 4);
      renderList(vegetables, ".bestProduct_wrapper", 4);
    });
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
    getData(`${correctPathToDate(true)}data/news.json`).then((data) => {
      renderNewsList(data, ".news_wrapper", 2);
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
    getData(`${correctPath(true)}data/team.json`)
    .then (data => {
      renderTeamsCards(data, ".teams_wrapper")
    })
  }
  /**=========================================== */

  /**=================Shop on page============== */
  if (document.querySelector(".shop_list-page")) {
    getData(`${correctPathToDate(true)}data/products.json`)
    .then(data => {
      renderList(data, ".shop_list-page", 8)
    })
  }
  /**=========================================== */
});
