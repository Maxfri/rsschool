const fullscreen = document.querySelector(".fullscreen");
const inputs = document.querySelectorAll('input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(this.name);
}

function getFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

fullscreen.addEventListener("click", getFullscreen);

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));