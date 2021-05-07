const mainGalleryItems = document.querySelectorAll(".main-gallery__item");
const mainGallerylist = document.querySelector(".main-gallery__list");
const mainPaginator = document.querySelector("#paginator-line-main");
const mainPaginatorNumber = document.querySelector(".paginator__number-main");

function outputValue() {
  document.querySelector(`.${this.name}`).innerHTML = `0${this.value}/`;
}
// mainCounter.forEach((input) => input.addEventListener("input", outputValue));

mainGalleryItems.forEach((item) =>
  item.addEventListener("click", () => selectItem(item))
);

function selectItem(item) {
  widthLeft = 187;
  let moveLeft = (item.dataset.id - 2) * widthLeft;
  mainGallerylist.style.left = `${-moveLeft}px`;

  for (let i = 0; i < mainGalleryItems.length; i++) {
    mainGalleryItems[i].classList.remove("main-gallery__active-item");
    console.log(mainGalleryItems[i].childNodes[1]);
    mainGalleryItems[i].childNodes[1].classList.remove("pets__info-hover");
  }

  mainGalleryItems[item.dataset.id - 1].classList.add(
    "main-gallery__active-item"
  );
  mainGalleryItems[item.dataset.id - 1].childNodes[1].classList.add(
    "pets__info-hover"
  );

  mainPaginator.value = item.dataset.id;
  mainPaginatorNumber.innerHTML = `0${mainPaginator.value}/`;
}

mainPaginator.addEventListener("input", function () {
  widthLeft = 187;
  let moveLeft = (mainPaginator.value - 2) * widthLeft;
  mainGallerylist.style.left = `${-moveLeft}px`;

  for (let i = 0; i < mainGalleryItems.length; i++) {
    mainGalleryItems[i].classList.remove("main-gallery__active-item");
    mainGalleryItems[i].childNodes[1].classList.remove("pets__info-hover");
  }
  mainGalleryItems[mainPaginator.value - 1].classList.add(
    "main-gallery__active-item"
  );
  mainGalleryItems[mainPaginator.value - 1].childNodes[1].classList.add(
    "pets__info-hover"
  );
  mainPaginatorNumber.innerHTML = `0${mainPaginator.value}/`;
});
