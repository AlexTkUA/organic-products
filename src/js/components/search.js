"use strict";
import { correctPath } from "./url.js";
import getData from "./getData.js";
let dataCacheProduct = [];
const updateList = () => {
  if (document.querySelector(".search_list")) {
    document.querySelector(".search_list").remove();
  }
};

const closeSearchList = () => {
    const headerEl = document.querySelector(".header");
    headerEl.addEventListener("click", (event) => {
        const target = event.target;
        if (!target.closest(".search")) {
            updateList();
        }
    })
}
const getFiltratedList = (list, sign) => {
  return [...list].filter((product) =>
    product.name.toLowerCase().includes(sign),
  );
};
const renderSearchList = (list) => {
  const searchEl = document.querySelector("#formForSearch");
  updateList();
  const ulEl = document.createElement("ul");
  ulEl.innerHTML = ``;
  ulEl.classList.add("search_list");
  list.forEach((product) => {
    const liEl = document.createElement("li");
    liEl.classList.add("search_list_item");

    const linkEl = document.createElement("a");
    linkEl.textContent = product.name;
    linkEl.setAttribute(
      "href",
      `${correctPath(true)}pages/productPage/index.html?id=${product.id}`,
    );

    liEl.append(linkEl);
    ulEl.append(liEl);
  });
  searchEl.append(ulEl);
};
const searching = () => {
  const inputEl = document.querySelector(".search_placeholder_input");
  inputEl.addEventListener("input", () => {
    const valueInput = inputEl.value.trim().toLowerCase();
    if (valueInput === "") {
      updateList();
      return;
    }
    if (valueInput.length < 3) {
      return;
    }
    if (dataCacheProduct.length === 0) {
      getData(`${correctPath(true)}data/products.json`).then((data) => {
        dataCacheProduct = data;
        renderSearchList(getFiltratedList(dataCacheProduct, valueInput));
      });
    } else {
      renderSearchList(getFiltratedList(dataCacheProduct, valueInput));
    }
  });
};
export {searching, closeSearchList};
