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
let number = mapPaginator.value;

mapTooltips.forEach((tooltip) =>
  tooltip.addEventListener("click", () => pickTooltip(tooltip))
);

rightArrow.addEventListener("click", () => pickRightArrow());
leftArrow.addEventListener("click", () => pickLeftArrow());

mapPaginator.addEventListener("input", () => {
  mapGallaryCards.forEach((card) => {
    card.classList.remove("gallery__card-active");
  });
  let paginatorNumber = mapPaginator.value;
  mapGallaryCards[paginatorNumber - 1].classList.add("gallery__card-active");
  mapPaginatorNumber.innerHTML = `0${paginatorNumber}/`;
  mapTooltips.forEach((tooltips) => {
    if (tooltips.dataset.id == paginatorNumber) {
      pickTooltip(tooltips);
    }
  });
});

mapGallaryCards.forEach((card) => {
  card.addEventListener('click', () => {
    mapTooltips.forEach((tooltips) => {
      if (card.dataset.id == tooltips.dataset.id) {
        pickTooltip(tooltips);
      }
    });
  })
});

function pickRightArrow() {
  mapGallaryCards.forEach((card) => {
    card.classList.remove("gallery__card-active");
  });
  number++;
  if (number > 8) {
    number = 1;
  }
  mapTooltips.forEach((tooltips) => {
    if (tooltips.dataset.id == number) {
      pickTooltip(tooltips);
    }
  });
  mapGallaryCards[number - 1].classList.add("gallery__card-active");
  mapPaginatorNumber.innerHTML = `0${number}/`;
  mapPaginator.value = mapGallaryCards[number -1].dataset.id;
}

function pickLeftArrow() {
  mapGallaryCards.forEach((card) => {
    card.classList.remove("gallery__card-active");
  });
  number--;
  if (number < 1) {
    number = 8;
  }
  mapTooltips.forEach((tooltips) => {
    if (tooltips.dataset.id == number) {
      pickTooltip(tooltips);
    }
  });
  mapGallaryCards[number - 1].classList.add("gallery__card-active");
  mapPaginatorNumber.innerHTML = `0${number}/`;
  mapPaginator.value = mapGallaryCards[number -1].dataset.id;
}

function pickTooltip(tooltip) {
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
}
