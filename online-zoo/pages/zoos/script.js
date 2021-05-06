let switchTheme = document.querySelector("#switchTheme");

switchTheme.addEventListener("click", switchDarkTheme);
let flagTheme = true;

function switchDarkTheme() {
  flagTheme = !flagTheme;

  // HEADER
  let headerWrapper = document.querySelector(".header__wrapper");
  let headerLogo = document.querySelector(".header__logo-pic");
  let headerLinks = document.querySelectorAll(".header__link");

  headerWrapper.classList.toggle("header__wrapper-dark");
  headerLinks.forEach((link) => {
    if (link.classList.contains("header__link-active")) {
      link.classList.toggle("header__link-active-dark");
    }
    link.classList.toggle("header__link-dark");
  });
  document
    .querySelector(".header__toggle")
    .classList.toggle("header__toggle-dark");
  if (flagTheme) {
    headerLogo.src = "../../../assets/images/logo.svg";
  } else {
    headerLogo.src = "../../../assets/images/logo-light.svg";
  }

  //PAGE ZOO
  document.querySelector(".main").classList.toggle("main-dark");
  document.querySelector('.the-zoo__title').classList.toggle("the-zoo__title-dark");
  document.querySelector('.population__title').classList.toggle("population__title-dark");
  document.querySelector('.habitat__title').classList.toggle("habitat__title-dark");
  document.querySelector('.diet__title').classList.toggle("diet__title-dark");

  document.querySelector('.population__subtitle').classList.toggle("population__subtitle-dark");
  document.querySelector('.habitat__subtitle').classList.toggle("habitat__subtitle-dark");
  document.querySelector('.diet__subtitle').classList.toggle("diet__subtitle-dark");
}
