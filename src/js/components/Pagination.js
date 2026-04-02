"use strict";

class Pagination {
  constructor(countOnPage, newsListLength) {
    this.currentPage = 1;
    this.countOnPage = countOnPage;
    this.countPages = Math.ceil(newsListLength / countOnPage);
  }
  get startArr() {
    return (this.currentPage - 1) * this.countOnPage;
  }

  get endArr() {
    return this.startArr + this.countOnPage;
  }
  renderPagination(renderFun) {
    const pagEl = document.querySelector(".pagination");
    if (!pagEl) {
      return;
    }
    pagEl.innerHTML = ``;
    const ulEl = document.createElement("ul");
    ulEl.classList.add("pagination_list");
    for (let index = 0; index < this.countPages; index++) {
      const liEl = document.createElement("li");
      liEl.classList.add("pagination_list_item");
      liEl.textContent = index + 1;
      ulEl.append(liEl);
      this.#activePag(liEl, renderFun);
    }
    pagEl.append(ulEl);
  }
  #activePag(pagItem, renderFun) {
    pagItem.addEventListener("click", () => {
      const activePagEl = document.querySelector(".pag-active");
      if (activePagEl) activePagEl.classList.remove("pag-active")
      this.currentPage = parseInt(pagItem.textContent);
      pagItem.classList.add("pag-active")
      renderFun();
    });
  }
}
export { Pagination };
