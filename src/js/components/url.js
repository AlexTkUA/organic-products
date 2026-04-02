"use strict";
const correctPath = (isLifeServer) => {
  let startUrl = ``;
  if (isLifeServer) {
    if (window.location.pathname.includes("pages")) {
      startUrl = "../../";
    } else {
      startUrl = "src/";
    }
  }
  return startUrl;
};
const pathToMainPage = () => {
  let startUrl = '';
  if (window.location.pathname.includes("pages")) {
    if (window.location.pathname.includes("pages")) {
      startUrl = "../../";
    } else {
      startUrl = "";
    }
  }
}
const correctPathToDate = (isLifeServer) => {
  let startUrl = ``;
  if (isLifeServer) {
    if (window.location.pathname.includes("pages")) {
      startUrl = "../../";
    } else {
      startUrl = "src/";
    }
  }
  return startUrl;
};
export { correctPath, correctPathToDate, pathToMainPage };
