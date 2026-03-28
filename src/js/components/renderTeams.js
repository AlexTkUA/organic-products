"use strict";
const renderTeamsCards = (data, placeHolder) => {
  const place = document.querySelector(placeHolder);
  let html = ``;
  const renderMessengers = (obj) => {
    console.log(obj);
    const { messengers } = obj;
    let html = ``;
    for (let i = 0; i < messengers.length; i++) {
      const [isTrue, icon, url] = messengers[i];
      if (!isTrue) {
        continue;
      }
      html += `<a href="${url}" class="team-card_info_messengers_icon"
                    ><img src="../../assets/logo/${icon}" alt=""
                  /></a>`;
    }
    return html;
  };
  data.forEach((element) => {
    const { personName, profession, photo } = element;
    html += `<div class="team-card">
              <div class="team-card_photo"><img src="../../assets/team/${photo}" alt="" /></div>
              <div class="team-card_info">
                <div class="team-card_info_text">
                  <span class="team-card_info_text_name">${personName}</span>
                  <span class="team-card_info_text_profession">${profession}</span>
                </div>
                <div class="team-card_info_messengers">`;
    html += renderMessengers(element);
    html += `</div>
              </div>
            </div>`;
  });
  place.innerHTML = html;
};
export default renderTeamsCards;
