(() => {
  // script.js
  var locationDiv = document.getElementById("locationActionDiv");
  var rotationDiv = document.getElementById("rotationActionDiv");
  var scaleDiv = document.getElementById("scaleActionDiv");
  var locationVid = document.getElementById("locationVid");
  var rotationVid = document.getElementById("rotationVid");
  var scaleVid = document.getElementById("scaleVid");
  var allVids = document.querySelectorAll(".vid");
  var allSections = document.querySelectorAll(".section");
  var locationActionBtn = document.querySelector(".button.location-vid");
  var rotationActionBtn = document.querySelector(".button.rotation-vid");
  var scaleActionBtn = document.querySelector(".button.scale-vid");
  var blackout = document.querySelector(".blackout-div");
  blackout.style.transition = "opacity 0.2s ease";
  console.log("june 2, 2025");
  locationActionBtn.addEventListener("click", function(e) {
    FlashBlackout(1);
    TimedPlayBack(locationDiv, locationVid);
  });
  rotationActionBtn.addEventListener("click", function(e) {
    TimedPlayBack(rotationDiv, rotationVid);
  });
  scaleActionBtn.addEventListener("click", function(e) {
    TimedPlayBack(scaleDiv, scaleVid);
  });
  var SetActiveVideo = function(activeVid) {
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
  var FlashBlackout = function(value) {
    blackout.style.opacity = value;
  };
  var TimedPlayBack = function(div, vid) {
    FlashBlackout(1);
    setTimeout(function(e) {
      SetActiveVideo(div);
      vid.play();
    }, 300);
  };
})();
