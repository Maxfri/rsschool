const fullscreen = document.querySelector(".fullscreen");
const inputs = document.querySelectorAll("input");
const fileInput = document.querySelector('input[type="file"]');
const inputLoadPicture = document.querySelector('#btnInput');
const imageContainer = document.querySelector("img");
const reset = document.querySelector(".btn-reset");
const next = document.querySelector(".btn-next");
const download = document.querySelector(".btn-save");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
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


function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  imageContainer.style.setProperty(`--${this.name}`, this.value + suffix);
  drawCanvasImage();
}

function resetValue(input) {
  input.value = input.defaultValue;
  const suffix = input.dataset.sizing || "";
  imageContainer.style.setProperty(`--${input.name}`, input.value + suffix);
  if (input.name !== "upload") {
    input.nextElementSibling.value = input.defaultValue;
  }
  drawCanvasImage();
}

function getFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

// fileInput.onchange = function (e) {
//   const file = fileInput.files[0];
//   const reader = new FileReader();
//   imageContainer.src = '';
//   reader.onload = function () {
    
//     console.log(reader.result);
//     imageContainer.src = reader.result;
//   };
//   reader.readAsDataURL(file);
//   e.target.value = '';
// };

fileInput.addEventListener("change", function (event) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imageContainer.src = reader.result;
    drawCanvasImage(reader.result);
  };
  reader.readAsDataURL(file);
  inputLoadPicture.value = '';
  imageContainer.value = '';
});

fullscreen.addEventListener("click", getFullscreen);

reset.addEventListener("click", () => {
  reset.classList.toggle("btn-active");
  inputs.forEach((input) => resetValue(input));
  drawCanvasImage();
});

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
inputs.forEach((input) =>
  input.addEventListener("input", () => {
    if (input.name !== "upload") {
      input.nextElementSibling.value = input.value;
    }
    drawCanvasImage();
  })
);

next.addEventListener("click", getImage);

download.addEventListener("click", () => {
  drawCanvasImage();
  let link = document.createElement("a");
  link.download = "download.png";
  link.href = canvas.toDataURL('image/png');
  link.click();
  link.delete;
});
canvas.style.setProperty("display", 'none');
drawCanvasImage();

function drawCanvasImage() {
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = imageContainer.src;
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.filter = 'none';
    let blur = imageContainer.style.getPropertyValue(`--blur`);
    let saturate = imageContainer.style.getPropertyValue(`--saturate`);
    let hue = imageContainer.style.getPropertyValue(`--hue`);
    const invert = document.querySelector('input[name="invert"]');
    const sepia = document.querySelector('input[name="sepia"]');  
    // console.log(blur, invert, sepia, saturate, hue);
    ctx.filter = `blur(${blur}) invert(${invert.value}%) sepia(${sepia.value}%) saturate(${saturate}) hue-rotate(${hue})`;
    console.log(ctx.filter);
    ctx.drawImage(img, 0, 0);
  };

}
function viewBgImage(src) {
  imageContainer.src = src;
  imageContainer.onload = () => {
    imageContainer.src = `${src}`;
  };
  drawCanvasImage();
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
