"use strict";
import { correctPath } from "./url.js";

const renderNewsPage = (data, placeHolder) => {
  const urlGet = new URLSearchParams(window.location.search);
  const idNeeded = urlGet.get("id");
  const newArticle = data.news.find((element) => element.id === idNeeded);
  
  if (!newArticle) {
  console.error("Стаття не знайдена");
  return;
}

  const createParagraph = (text) => {
    const el = document.createElement("p");
    el.classList.add("paragraph");
    el.textContent = text;
    return el;
  };

  const createTitle = (teg, className, text) => {
    const el = document.createElement(teg);
    el.classList.add(className);
    el.textContent = text;
    return el;
  };

  const renderPromo = (photo, createdAt, author, title, paragraph) => {
    const mainBlockEl = document.createElement("div");
    mainBlockEl.classList.add("article_info_promo");

    const photoEl = document.createElement("div");
    photoEl.classList.add("article_info_promo_photo");

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", `${correctPath(true)}assets/img/${photo}`);

    photoEl.append(imgEl);
    mainBlockEl.append(photoEl);

    const textBlockEl = document.createElement("div");
    textBlockEl.classList.add("article_info_promo_wrapper");

    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("article_info_promo_author");
    textBlockEl.append(wrapperEl);

    const dateEl = document.createElement("span");
    dateEl.classList.add("article_info_promo_author_date");
    dateEl.innerHTML = `<b>Posted On:</b>${createdAt}`;

    const nameEl = document.createElement("span");
    nameEl.classList.add("article_info_promo_author_name");
    nameEl.textContent = "By "+ author;

    wrapperEl.append(dateEl, nameEl);
    textBlockEl.append(
      createTitle("h2", "title", title),
      createParagraph(paragraph),
    );
    mainBlockEl.append(textBlockEl);
    return mainBlockEl;
  };

  const renderList = (arrList) => {
    const olEl = document.createElement("ol");
    olEl.classList.add("article_info_text_list");
    for (let i = 0; i < arrList.length; i++) {
      const liEl = document.createElement("li");
      liEl.classList.add("article_info_text_list_item");
      liEl.textContent = arrList[i];
      olEl.append(liEl);
    }
    return olEl;
  };

  const renderTextBlock = (paragraph) => {
    const blockEl = document.createElement("div");
    blockEl.classList.add("article_info_text_block");

    const parEl = document.createElement("p");
    parEl.classList.add("article_info_text_block_paragraph");
    parEl.textContent = paragraph;
    blockEl.append(parEl);
    return blockEl;
  };

  const renderInfoBlock = (block) => {
    const { isNeed, titleInfoBlock, paragraphInfoBlock, listInfo } = block;
    if (!isNeed) {
      return;
    }
    const blockEl = document.createElement("article");
    blockEl.classList.add("article_info_article");
    const titleEl = createTitle("h2", "title", titleInfoBlock);
    blockEl.append(titleEl);
    const textEl = createParagraph(paragraphInfoBlock);
    blockEl.append(textEl);
    if (listInfo) {
      const listEl = renderList(listInfo);
      blockEl.append(listEl);
    }
    return blockEl;
  };
  const place = document.querySelector(placeHolder);
  const { createdAt, author, promo, infoBlocks, textBlockParagraph } = newArticle;
  const { photo, promoTitle, promoParagraph } = promo;
  const mainPromoBlock = renderPromo(
    photo,
    createdAt,
    author,
    promoTitle,
    promoParagraph,
  );

  place.append(mainPromoBlock);
  place.append(renderInfoBlock(infoBlocks[0]));
  place.append(renderTextBlock(textBlockParagraph));
  place.append(renderInfoBlock(infoBlocks[1]));
};
export default renderNewsPage;
