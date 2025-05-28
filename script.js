const locationDiv = document.getElementById("locationActionDiv");
const rotationDiv = document.getElementById("rotationActionDiv");
const scaleDiv = document.getElementById("scaleActionDiv");
const locationVid = document.getElementById("locationVid");
const rotationVid = document.getElementById("rotationVid");
const scaleVid = document.getElementById("scaleVid");
const allVids = document.querySelectorAll(".vid");
const allSections = document.querySelectorAll(".section");
const locationActionBtn = document.querySelector(".button.location-vid");
const rotationActionBtn = document.querySelector(".button.rotation-vid");
const scaleActionBtn = document.querySelector(".button.scale-vid");
const blackout = document.querySelector(".blackout-div");
blackout.style.transition = "opacity 0.2s ease";

locationActionBtn.addEventListener("click", function (e) {
  FlashBlackout(1);
  //   SetActiveVideo(locationDiv);
  TimedPlayBack(locationDiv, locationVid);
});

rotationActionBtn.addEventListener("click", function (e) {
  //   SetActiveVideo(rotationDiv);
  TimedPlayBack(rotationDiv, rotationVid);
});

scaleActionBtn.addEventListener("click", function (e) {
  //   SetActiveVideo(scaleDiv);
  TimedPlayBack(scaleDiv, scaleVid);
});

const SetActiveVideo = function (activeVid) {
  allVids.forEach((el) => {
    el.pause();
    el.currentTime = 0;
  });
  allSections.forEach((el) => {
    el.classList.add("hide");
    if (el.id === activeVid.id) {
      el.classList.remove("hide");
    }
  });
  FlashBlackout(0);
};

const FlashBlackout = function (value) {
  blackout.style.opacity = value;
  //   blackout.classList.toggle("hide");
};

window.onscroll = function (e) {
  // print "false" if direction is down and "true" if up
  console.log(this.oldScroll > this.scrollY);
  this.oldScroll = this.scrollY;
};

const TimedPlayBack = function (div, vid) {
  FlashBlackout(1);
  setTimeout(function (e) {
    SetActiveVideo(div);
    vid.play();
  }, 300);
};
