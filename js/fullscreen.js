/**
 * this function is for fullscreen 
 */

function makeFullScreen() {
  var element = document.getElementById("fullscreenarea");
  if (!document.Fullscreen && !document.webkitFullScreen && !document.msRequestFullscreen) {
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  screen.orientation.lock("landscape");
  document.querySelector('.game-container').requestFullscreen();
  document.querySelector('.game-container').webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  document.querySelector('.game-container').msRequestFullscreen();
  window.onbeforeunload = function () {
    screen.orientation.unlock();
    document.exitFullscreen();
    document.msExitFullscreen();
    document.webkitExitFullscreen();
  };
}
if (window.matchMedia("(max-width: 1000px)").matches) {
  screen.orientation.lock("landscape");
  document.querySelector('.game-container').requestFullscreen();
  document.querySelector('.game-container').webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  document.querySelector('.game-container').msRequestFullscreen();
  document.querySelector('.game-container').mozRequestFullScreen();
  window.onbeforeunload = function () {
    screen.orientation.unlock();
    document.exitFullscreen();
    document.msExitFullscreen();
    document.webkitExitFullscreen();
    document.webkitExitFullscreen();
  };
}