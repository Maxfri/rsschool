let switchTheme = document.querySelector("#switchTheme");
let paginators = document.querySelectorAll("input[type=range]");
switchTheme.addEventListener("click", switchDarkTheme);
let flagTheme = true;

function switchDarkTheme() {
  flagTheme = !flagTheme;
  console.log(flagTheme);

  //PAGINATOR
  paginators.forEach((paginator) => {
    if (paginator.classList.contains("paginator__line-dark")) {
      paginator.classList.toggle("paginator__line-dark");
      paginator.classList.add("paginator__line-light");
    } else if (paginator.id !== "paginator-line-main") {
      paginator.classList.toggle("paginator__line-dark");
    }
  });
  let paginatorsNumber = document.querySelectorAll(".paginator__number");
  paginatorsNumber.forEach((paginator) => {
    paginator.classList.toggle("paginator__number-dark");
  });

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
    headerLogo.src = "../../assets/images/logo.svg";
  } else {
    headerLogo.src = "../../assets/images/logo-light.svg";
  }

  //PAGE MAP
  document.querySelector(".map").classList.toggle("map-dark");
  document
    .querySelector(".choose-your-favorite__title")
    .classList.toggle("choose-your-favorite__title-dark");
  document
    .querySelector(".choose-your-favorite__subtitle")
    .classList.toggle("choose-your-favorite__subtitle-dark");

  //MAP
  if (flagTheme) {
    document.querySelector(".map__image").src = "../../assets/images/map.png";
  } else {
    document.querySelector(".map__image").src =
      "../../assets/images/map-dark.png";
  }

  //ARROW
  let leftArrow = document.querySelectorAll(".left-arrow");
  let rightArrow = document.querySelectorAll(".right-arrow");

  if (flagTheme) {
    leftArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "../../assets/images/right-arrow.svg";
    });
    rightArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "../../assets/images/right-arrow.svg";
    });
  } else {
    leftArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "../../assets/images/right-arrow-dark.svg";
    });
    rightArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "../../assets/images/right-arrow-dark.svg";
    });
  }
}
