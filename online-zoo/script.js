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

// let mainSlider = [
//   "./assets/images/eagle.png",
//   "./assets/images/panda.png",
//   "./assets/images/monke.png",
//   "./assets/images/croko.png",
//   "./assets/images/fox.png",
//   "./assets/images/sloth.png",
//   "./assets/images/elephant.png",
//   "./assets/images/leopard.png",
// ];

function paginatorsCount() {
  paginators.forEach((paginator) => {
    paginatorsLabel.forEach((label) => {
      if (
        paginator.id === "paginator-line-main" &&
        label.htmlFor === "paginator-line-main"
      ) {
        // paginator.addEventListener("input", () => {
        //   let number = label.querySelector(".paginator__number-main");
        //   let mainItemImg = document.querySelector(".main-gallery__big-img");
        //   mainItemImg.src = mainSlider[paginator.value - 1];
        //   number.innerHTML = `0${paginator.value}/`;
        //   // console.log(number);
        // });
      }

      if (
        paginator.id === "paginator-line-animals" &&
        label.htmlFor === "paginator-line-animals"
      ) {
        paginator.addEventListener("input", () => {
          animalSliderImage.src = animalSlider[paginator.value - 1];
          let number = label.querySelector(".paginator__number");
          number.innerHTML = `0${paginator.value}/`;
          // console.log(number);
        });
      }

      // if (
      //   paginator.id === "paginator-line-pets" &&
      //   label.htmlFor === "paginator-line-pets"
      // ) {
      //   paginator.addEventListener("input", () => {
      //     let number = label.querySelector(".paginator__number");
      //     number.innerHTML = `0${paginator.value}/`;
      //     // console.log(number);
      //   });
      // }

      if (
        paginator.id === "paginator-line-testimonials" &&
        label.htmlFor === "paginator-line-testimonials"
      ) {
        paginator.addEventListener("input", () => {
          let number = label.querySelector(".paginator__number");
          number.innerHTML = `0${paginator.value}/`;
          // console.log(number);
        });
      }
    });
  });
}

paginatorsCount();

let flagTheme = true;

function switchDarkTheme() {
  flagTheme = !flagTheme;
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
    headerLogo.src = "./assets/images/logo.svg";
  } else {
    headerLogo.src = "./assets/images/logo-light.svg";
  }

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
  let leftArrow = document.querySelectorAll(".left-arrow");
  let rightArrow = document.querySelectorAll(".right-arrow");

  if (flagTheme) {
    leftArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "./assets/images/right-arrow.svg";
    });
    rightArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "./assets/images/right-arrow.svg";
    });
  } else {
    leftArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "./assets/images/right-arrow-dark.svg";
    });
    rightArrow.forEach((arrow) => {
      arrow.querySelector("img").src = "./assets/images/right-arrow-dark.svg";
    });
  }

  //PAY AND FEED
  if (flagTheme) {
    document.querySelector("#panda-feed").src =
      "./assets/images/panda_feed.svg";
    document.querySelector("#payment").src = "./assets/images/payment.svg";
    document.querySelector("#visa").src = "./assets/images/visa_card.svg";
  } else {
    document.querySelector("#panda-feed").src =
      "./assets/images/panda_feed-dark.svg";
    document.querySelector("#payment").src = "./assets/images/payment-dark.svg";
    document.querySelector("#visa").src = "./assets/images/visa_card-dark.svg";
  }
  let payAndFeedWrapper = document.querySelector(".pay-and-feed__wrapper");
  let payAndFeedTitle = document.querySelector(".pay-and-feed__title");
  let payAndFeedSubtitle = document.querySelector(".pay-and-feed__subtitle");
  payAndFeedWrapper.classList.toggle("pay-and-feed__wrapper-dark");
  payAndFeedTitle.classList.toggle("pay-and-feed__title-dark");
  payAndFeedSubtitle.classList.toggle("pay-and-feed__subtitle-dark");

  //TESTIMONIALS
  let testimonialsWrapper = document.querySelector(".testimonials__wrapper");
  let testimonialsTitle = document.querySelector(".testimonials__title");
  let testimonialsCards = document.querySelectorAll(".testimonials__card-item");
  let testimonialsCardsName = document.querySelectorAll(
    ".testimonials__card-name"
  );
  let testimonialsCardsDescription = document.querySelectorAll(
    ".testimonials__card-description"
  );

  testimonialsCards.forEach((testimonialsCard) => {
    testimonialsCard.classList.toggle("testimonials__card-item-dark");
  });
  testimonialsCardsName.forEach((testimonialsCardName) => {
    testimonialsCardName.classList.toggle("testimonials__card-name-dark");
  });
  testimonialsCardsDescription.forEach((testimonialsCardDescription) => {
    testimonialsCardDescription.classList.toggle(
      "testimonials__card-description-dark"
    );
  });

  testimonialsWrapper.classList.toggle("testimonials__wrapper-dark");
  testimonialsTitle.classList.toggle("testimonials__title-dark");

  //MAP
  if (flagTheme) {
    document.querySelector(".map__image").src = "./assets/images/map.png";
  } else {
    document.querySelector(".map__image").src = "./assets/images/map-dark.png";
  }
  let mapWrapper = document.querySelector(".map");
  let mapTitle = document.querySelector(".map__title");
  mapWrapper.classList.toggle("map-dark");
  mapTitle.classList.toggle("map__title-dark");

  let mapTooltip = document.querySelectorAll(".map__tooltip-card");
  mapTooltip.forEach((tooltip) => {
    tooltip.classList.toggle("map__tooltip-card-dark");
  });
  let mapTooltipTitle = document.querySelectorAll(".map__tooltip-title");
  mapTooltipTitle.forEach((tooltip) => {
    tooltip.classList.toggle("map__tooltip-title-dark");
  });
  let mapTooltipSubtitle = document.querySelectorAll(".map__tooltip-subtitle");
  mapTooltipSubtitle.forEach((tooltip) => {
    tooltip.classList.toggle("map__tooltip-subtitle-dark");
  });
}
