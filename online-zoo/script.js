// DARK THEME
let switchTheme = document.querySelector("#switchTheme");

switchTheme.addEventListener("click", switchDarkTheme);
let paginators = document.querySelectorAll("input[type=range]");
let paginatorsLabel = document.querySelectorAll("label");

let animalSlider = [
  "./assets/images/Deers.png",
  "./assets/images/slider_panda.png",
  "./assets/images/slider_monke.png",
  "./assets/images/slider_chempanse.png",
];
let animalSliderImage = document.querySelector(".how-it-works__slider-img");

let mainGalleryItems = document.querySelectorAll(".main-gallery__item");

let mainSlider = [
  "./assets/images/eagle.png",
  "./assets/images/panda.png",
  "./assets/images/monke.png",
  "./assets/images/croko.png",
  "./assets/images/fox.png",
  "./assets/images/lazy.png",
  "./assets/images/elephant.png",
  "./assets/images/jaguar.png",
];

function paginatorsCount() {
  paginators.forEach((paginator) => {
    paginatorsLabel.forEach((label) => {
      if (
        paginator.id === "paginator-line-main" &&
        label.htmlFor === "paginator-line-main"
      ) {
        paginator.addEventListener("input", () => {
          let mainItemImg = document.querySelector(".main-gallery__big-img");
          mainItemImg.src = mainSlider[paginator.value - 1];
          let number = label.querySelector(".paginator__number");
          number.innerHTML = `0${paginator.value}/`;
          console.log(number);
        });
      }

      if (
        paginator.id === "paginator-line-animals" &&
        label.htmlFor === "paginator-line-animals"
      ) {
        paginator.addEventListener("input", () => {
          animalSliderImage.src = animalSlider[paginator.value - 1];
          let number = label.querySelector(".paginator__number");
          number.innerHTML = `0${paginator.value}/`;
          console.log(number);
        });
      }

      if (
        paginator.id === "paginator-line-pets" &&
        label.htmlFor === "paginator-line-pets"
      ) {
        paginator.addEventListener("input", () => {
          let number = label.querySelector(".paginator__number");
          number.innerHTML = `0${paginator.value}/`;
          console.log(number);
        });
      }

      if (
        paginator.id === "paginator-line-testimonials" &&
        label.htmlFor === "paginator-line-testimonials"
      ) {
        paginator.addEventListener("input", () => {
          let number = label.querySelector(".paginator__number");
          number.innerHTML = `0${paginator.value}/`;
          console.log(number);
        });
      }
    });
  });
}

paginatorsCount();

function switchDarkTheme() {
  //PAGINATOR
  let paginators = document.querySelectorAll(".paginator__number");
  paginators.forEach((paginator) => {
    paginator.classList.toggle("paginator__number-dark");
  });
  // HEADER
  let headerWrapper = document.querySelector(".header__wrapper");
  let headerLogo = document.querySelector(".header__logo-pic");
  let headerLinks = document.querySelectorAll(".header__link");

  headerWrapper.classList.toggle("header__wrapper-dark");
  headerLinks.forEach((link) => {
    link.classList.toggle("header__link-dark");
  });
  headerLogo.src = "./assets/images/logo-light.svg";

  //HOW IT WORKS
  let howItWorksWrapper = document.querySelector(".how-it-works__intro");
  let howItWorksTitle = document.querySelector(".how-it-works__title");
  let howItWorksSubtitle = document.querySelector(".how-it-works__subtitle");
  howItWorksWrapper.classList.toggle("how-it-works__intro-dark");
  howItWorksTitle.classList.toggle("how-it-works__title-dark");
  howItWorksSubtitle.classList.toggle("how-it-works__subtitle-dark");

  //HOW IT WORKS CARDS
  let cardWrapper = document.querySelector(".card__wrapper");
  let cardTitle = document.querySelectorAll(".card__title");
  let cardSubtitle = document.querySelectorAll(".card__subtitle");
  cardWrapper.classList.toggle("card__wrapper-dark");
  cardTitle.forEach((title) => {
    title.classList.toggle("card__title-dark");
  });
  cardSubtitle.forEach((subtitle) => {
    subtitle.classList.toggle("card__subtitle-dark");
  });

  //PETS IN ZOO
  let petsInZooWrapper = document.querySelector(".pets-in-zoo__wrapper");
  let petsInZooTitle = document.querySelector(".pets-in-zoo__title");
  petsInZooWrapper.classList.toggle("pets-in-zoo__wrapper-dark");
  petsInZooTitle.classList.toggle("pets-in-zoo__title-dark");

  //PAY AND FEED
  let payAndFeedWrapper = document.querySelector(".pay-and-feed__wrapper");
  let payAndFeedTitle = document.querySelector(".pay-and-feed__title");
  let payAndFeedSubtitle = document.querySelector(".pay-and-feed__subtitle");
  payAndFeedWrapper.classList.toggle("pay-and-feed__wrapper-dark");
  payAndFeedTitle.classList.toggle("pay-and-feed__title-dark");
  payAndFeedSubtitle.classList.toggle("pay-and-feed__subtitle-dark");

  //TESTIMONIALS
  let testimonialsWrapper = document.querySelector(".testimonials__wrapper");
  let testimonialsTitle = document.querySelector(".testimonials__title");
  testimonialsWrapper.classList.toggle("testimonials__wrapper-dark");
  testimonialsTitle.classList.toggle("testimonials__title-dark");

  //MAP
  let mapWrapper = document.querySelector(".map");
  let mapTitle = document.querySelector(".map__title");
  mapWrapper.classList.toggle("map-dark");
  mapTitle.classList.toggle("map__title-dark");
}
