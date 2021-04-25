const fullscreen = document.querySelector(".fullscreen");
const inputs = document.querySelectorAll("input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function getFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector("img");

fileInput.addEventListener("change", function (e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
  };
  reader.readAsDataURL(file);
});

fullscreen.addEventListener("click", getFullscreen);

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
inputs.forEach((input) =>
  input.addEventListener("input", () => {
    input.nextElementSibling.value = input.value;
  })
);
