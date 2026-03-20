"use strict"
const showLoader = (selector) => {
    const loader = document.querySelector(selector);
    if (!loader) {
        return;
    }
    loader.classList.add("gradient-bg")
} 
const hideLoader = (selector) => {
    const loader = document.querySelector(selector);
    if (!loader) {
        return;
    }
    loader.classList.remove("gradient-bg")
}
export {showLoader, hideLoader};