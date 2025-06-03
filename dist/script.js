(() => {
  // script.js
  var locationVid = document.getElementById("locationVid");
  var rotationVid = document.getElementById("rotationVid");
  var scaleVid = document.getElementById("scaleVid");
  var allVids = document.querySelectorAll(".vid");
  var locationActionBtn = document.querySelector(".button.location_vid");
  var rotationActionBtn = document.querySelector(".button.rotation_vid");
  var scaleActionBtn = document.querySelector(".button.scale_vid");
  var blackout = document.querySelector(".blackout-div");
  blackout.style.transition = "opacity 0.2s ease";
  locationActionBtn.addEventListener("click", function(e) {
    FlashBlackout(1);
    TimedPlayBack(locationVid);
  });
  rotationActionBtn.addEventListener("click", function(e) {
    TimedPlayBack(rotationVid);
  });
  scaleActionBtn.addEventListener("click", function(e) {
    TimedPlayBack(scaleVid);
  });
  var SetActiveVideo = function(activeVid) {
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
  var FlashBlackout = function(value) {
    blackout.style.opacity = value;
  };
  var TimedPlayBack = function(vid) {
    FlashBlackout(1);
    setTimeout(function(e) {
      SetActiveVideo(vid);
      vid.play();
    }, 300);
  };
})();
