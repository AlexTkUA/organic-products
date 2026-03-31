"use strict"
const getData = (url, selector) => {
    const loaderEl = document.createElement("div");
    loaderEl.classList.add("mask");
    loaderEl.innerHTML = `<div class ="loader"></div>`;
    const placeEl = document.querySelector(selector);
    if (placeEl) {
        placeEl.append(loaderEl);
    }
    return fetch(url).then(res => {
        if (!res.ok) {
            throw new Error("Помилка");
        }
        return res.json();
    })
    .catch((err) => {
        console.error(err.message)
    })
    .finally(() => {
        loaderEl.remove();
    });
}
export default getData;