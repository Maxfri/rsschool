const fullscreen = document.querySelector(".fullscreen");
const inputs = document.querySelectorAll("input");
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector("img");
const reset = document.querySelector(".btn-reset");
const next = document.querySelector(".btn-next");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function resetValue(input) {
  input.value = input.defaultValue;
  const suffix = input.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${input.name}`,
    input.value + suffix
  );
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
reset.addEventListener("click", () => {
  inputs.forEach((input) => resetValue(input))
})
inputs.forEach((input) => input.addEventListener("input", handleUpdate));
inputs.forEach((input) =>
  input.addEventListener("input", () => {
    input.nextElementSibling.value = input.value;
  })
);


const base = './assets/img/night/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const img = document.querySelector('img');

function viewBgImage(src) {  
  img.src = src;
  img.onload = () => {      
    img.src = `${src}`;
  }; 
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
} 
next.addEventListener('click', getImage);