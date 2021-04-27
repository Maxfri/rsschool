const fullscreen = document.querySelector(".fullscreen");
const inputs = document.querySelectorAll("input");
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector("img");
const reset = document.querySelector(".btn-reset");
const next = document.querySelector(".btn-next");
const download = document.querySelector(".btn-save");
let i = 0;
const base =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];
const canvas = document.querySelector("canvas");
function drawImage() {
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = imageContainer.src;
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    const blur = imageContainer.style.getPropertyValue(`--blur`);
    const invert = imageContainer.style.getPropertyValue(`--invert`);
    const sepia = imageContainer.style.getPropertyValue(`--sepia`);
    const saturate = imageContainer.style.getPropertyValue(`--saturate`);
    const hue = imageContainer.style.getPropertyValue(`--hue`);
    console.log(blur, invert, sepia, saturate, hue);
    ctx.filter = `blur(${blur}) invert(${invert}) sepia(${sepia}) saturate(${saturate}) hue-rotate(${hue})`;
    console.log(ctx.filter);
    ctx.drawImage(img, 0, 0);
  };
}
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  imageContainer.style.setProperty(`--${this.name}`, this.value + suffix);
}

function resetValue(input) {
  input.value = input.defaultValue;
  const suffix = input.dataset.sizing || "";
  imageContainer.style.setProperty(`--${input.name}`, input.value + suffix);
  if (input.name !== "upload") {
    input.nextElementSibling.value = input.defaultValue;
  }
}

function getFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

fileInput.addEventListener("change", function (event) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imageContainer.src = reader.result;
  };
  reader.readAsDataURL(file);
  event.target.value = null;
});

fullscreen.addEventListener("click", getFullscreen);

reset.addEventListener("click", () => {
  reset.classList.toggle("btn-active");
  inputs.forEach((input) => resetValue(input));
});

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
inputs.forEach((input) =>
  input.addEventListener("input", () => {
    if (input.name !== "upload") {
      input.nextElementSibling.value = input.value;
    }
  })
);

next.addEventListener("click", getImage);

download.addEventListener("click", () => {
  drawImage();
  let link = document.createElement("a");
  link.download = "download.png";
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});

function viewBgImage(src) {
  imageContainer.src = src;
  imageContainer.onload = () => {
    imageContainer.src = `${src}`;
  };
}

function getDate() {
  const now = new Date();
  let hours = now.getHours();
  let timeOfDay = "";

  if (hours >= 6 && hours < 12) {
    timeOfDay = "morning/";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "day/";
  } else if (hours >= 18 && hours < 24) {
    timeOfDay = "evening/";
  } else if (hours >= 0 && hours < 6) {
    timeOfDay = "night/";
  }
  return timeOfDay;
}

function getImage() {
  const index = i % images.length;
  const today = getDate();
  const imageSrc = base + today + images[index];
  viewBgImage(imageSrc);
  i++;
}
