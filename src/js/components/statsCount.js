"use strict";
const renderStats = (data, selectorPlaceholder, count = 4) => {
    const wrapper = document.querySelector(selectorPlaceholder);
    if (!wrapper) {
        throw new Error("wrapper in renderStats is not defined");
    }
    let html = ``;
    if (data.stats.length < count) {
        count = data.stats.length;
    }
    data.stats.filter((item, index) => index < count)
    .forEach((stat, index) => {
        const {title, value, unit} = stat;
        let num = ``;
        if (unit === "%") {
            num = value + "" + unit;
        } else {
            num = (unit ? unit : "") + value
        }
        html += `<div class="circle-counter">
                <div class="circle-counter_innerCircle">
                  <span class="circle-counter_innerCircle_num">${num}</span>
                  <span class="circle-counter_innerCircle_text">${title}</span>
                </div>
              </div>
        `
    })
    wrapper.innerHTML = html;
}
export default renderStats;