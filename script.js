const locationVid = document.getElementById("locationVid");
const rotationVid = document.getElementById("rotationVid");
const scaleVid = document.getElementById("scaleVid");
const allVids = document.querySelectorAll(".vid");
const locationActionBtn = document.querySelector(".button.location_vid");
const rotationActionBtn = document.querySelector(".button.rotation_vid");
const scaleActionBtn = document.querySelector(".button.scale_vid");
const blackout = document.querySelector(".blackout-div");
blackout.style.transition = "opacity 0.2s ease";

locationActionBtn.addEventListener("click", function (e) {
  FlashBlackout(1);
  TimedPlayBack(locationVid);
});

rotationActionBtn.addEventListener("click", function (e) {
  TimedPlayBack(rotationVid);
});

scaleActionBtn.addEventListener("click", function (e) {
  TimedPlayBack(scaleVid);
});

const SetActiveVideo = function (activeVid) {
  allVids.forEach((el) => {
    el.pause();
    el.currentTime = 0;
    el.style.display = "none";
    if (el.id === activeVid.id) {
      el.style.display = "block";
    }
  });
  FlashBlackout(0);
};

const FlashBlackout = function (value) {
  blackout.style.opacity = value;
};

const TimedPlayBack = function (vid) {
  FlashBlackout(1);
  setTimeout(function (e) {
    SetActiveVideo(vid);
    vid.play();
  }, 300);
};
// window.onscroll = function (e) {
//   console.log(this.oldScroll > this.scrollY);
//   this.oldScroll = this.scrollY;
// };
