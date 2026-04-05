"use strict";

const videoAction = () => {
  const playerEl = document.querySelector(".videoSection_video_player");
  const videoEl = document.querySelector("[data-video]");

  playerEl.addEventListener("click", () => {
    if (videoEl.paused) {
      playerEl.classList.add("hide");
      videoEl.play();
    }
  });
  videoEl.addEventListener("click", () => {
    if (!videoEl.paused) {
      playerEl.classList.remove("hide");
      videoEl.pause();
    }
  });
};
export default videoAction;
