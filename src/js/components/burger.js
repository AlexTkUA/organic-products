"use strict"
const showMobMenu = (btn, menu) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("nav_mob-show");
    })
}
export default showMobMenu;