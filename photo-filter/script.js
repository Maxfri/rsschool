const fullscreen = document.querySelector(".fullscreen");

fullscreen.addEventListener("click", getFullscreen);

function getFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}