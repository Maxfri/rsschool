const mapTooltips = document.querySelectorAll(".map__tooltip");
const mapPaginator = document.querySelector("#paginator-line");
const mapPaginatorNumber = document.querySelector(".paginator__number");
const mapBtn = document.querySelector(".watch-online-form");
const mapGallaryCards = document.querySelectorAll(".gallery__card");
const mapLinks = [
  "../zoos/gorilla/index.html",
  "../zoos/panda/index.html",
  "../zoos/alligator/index.html",
  "../zoos/eagle/index.html",
];
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
mapTooltips.forEach((tooltip) =>
  tooltip.addEventListener("click", () => pickTooltip(tooltip))
);

rightArrow.addEventListener("click", () => {
  mapGallaryCards.forEach((card) => {
    card.classList.remove("gallery__card-active");
  });
});

  mapPaginator.addEventListener("input", () => {
    mapGallaryCards.forEach((card) => {
      card.classList.remove("gallery__card-active");
    });
    let number = mapPaginator.value;
    mapGallaryCards[number - 1].classList.add("gallery__card-active");
    mapPaginatorNumber.innerHTML = `0${number}/`;
  });


function pickTooltip(tooltip) {
  // slider.style.transform = `translateX(calc(${0}%))`;
  mapTooltips.forEach((tooltips) => {
    tooltips.classList.remove("map__tooltip-hover");
  });
  mapTooltips[tooltip.dataset.id - 1].classList.toggle("map__tooltip-hover");
  mapPaginatorNumber.innerHTML = `0${tooltip.dataset.id}/`;
  mapPaginator.value = tooltip.dataset.id;
  mapBtn.action = mapLinks[tooltip.dataset.id - 1];
  mapGallaryCards.forEach((card) => {
    card.classList.remove("gallery__card-active");
  });
  mapGallaryCards[tooltip.dataset.id - 1].classList.add("gallery__card-active");
  // for (let i = 0; i < sliderMap.length; i++) {
  //   sliderMap[i].classList.remove("gradient-round-border");
  //   sliderMap[i].childNodes[0].classList.remove("selected");
  // }
  // sliderMap[num.value - 1].classList.add("gradient-round-border");
  // sliderMap[num.value - 1].childNodes[0].classList.add("selected");
  // position = num.value - 1;
}
