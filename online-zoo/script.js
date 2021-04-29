// DARK THEME
let switchTheme = document.querySelector("#switchTheme");

switchTheme.addEventListener("click", switchDarkTheme);

function switchDarkTheme() {
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
  howItWorksWrapper.classList.toggle("how-it-works__intro-dark");

  //HOW IT WORKS CARDS
  let cardWrapper = document.querySelector(".card__wrapper");
  cardWrapper.classList.toggle("card__wrapper-dark");

  //PETS IN ZOO
  let petsInZooWrapper = document.querySelector(".pets-in-zoo__wrapper");
  petsInZooWrapper.classList.toggle("pets-in-zoo__wrapper-dark");

  //PAY AND FEED
  let payAndFeedWrapper = document.querySelector(".pay-and-feed__wrapper");
  payAndFeedWrapper.classList.toggle("pay-and-feed__wrapper-dark");

  //TESTIMONIALS
  let testimonialsWrapper = document.querySelector(".testimonials__wrapper");
  testimonialsWrapper.classList.toggle("testimonials__wrapper-dark");

  //MAP
  let mapWrapper = document.querySelector(".map__wrapper");
  mapWrapper.classList.toggle("map__wrapper-dark");
}
