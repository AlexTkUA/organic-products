"use strict"
import {showLoader, hideLoader} from "./loader.js";
const getData = (url, isLoaderNeed, selectorLoader) => {
    if (isLoaderNeed) {
        showLoader(selectorLoader);
    }
    return fetch(url).then(res => {
        if (!res.ok) {
            throw new Error("Помилка");
        }
        return res.json();
    }).finally(() => {
        hideLoader(selectorLoader);
    });
}
export default getData;