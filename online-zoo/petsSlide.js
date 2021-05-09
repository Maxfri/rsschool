function Ant(crslId) {
  let id = document.getElementById(crslId);
  if (id) {
    this.crslRoot = id;
  } else {
    this.crslRoot = document.querySelector(".ant-carousel");
  }

  // Carousel objects
  this.crslList = this.crslRoot.querySelector(".ant-carousel-list");
  this.crslElements = this.crslList.querySelectorAll(".ant-carousel-element");
  this.crslElemFirst = this.crslList.querySelector(".ant-carousel-element");
  this.leftArrow = this.crslRoot.querySelector("div.ant-carousel-arrow-left");
  this.rightArrow = this.crslRoot.querySelector("div.ant-carousel-arrow-right");
  this.indicatorDots = this.crslRoot.querySelector(".paginator-number-pets");

  // Initialization
  this.options = Ant.defaults;
  Ant.initialize(this);
}

Ant.defaults = {
  // Default options for the carousel
  elemVisible: 4,
  loop: true,
  auto: false,
  interval: 5000,
  speed: 750,
  touch: true,
  arrows: true,
  dots: true,
};

Ant.prototype.elemPrev = function (num) {
  num = num || 1;

  if (this.options.dots) this.dotOn(this.currentElement);
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.dotsVisible - 1;
  if (this.options.dots) this.dotOff(this.currentElement);

  if (!this.options.loop) {
    this.currentOffset += this.elemWidth * num;
    this.crslList.style.marginLeft = this.currentOffset + "px";
    if (this.currentElement == 0) {
      this.leftArrow.style.display = "none";
      this.touchPrev = false;
    }
    this.rightArrow.style.display = "block";
    this.touchNext = true;
  } else {
    let elm,
      buf,
      this$ = this;
    for (let i = 0; i < num; i++) {
      elm = this.crslList.lastElementChild;
      buf = elm.cloneNode(true);
      this.crslList.insertBefore(buf, this.crslList.firstElementChild);
      this.crslList.removeChild(elm);
    }
    this.crslList.style.marginLeft = "-" + this.elemWidth * num + "px";
    let compStyle = window.getComputedStyle(this.crslList).marginLeft;
    this.crslList.style.cssText =
      "transition:margin " + this.options.speed + "ms ease;";
    this.crslList.style.marginLeft = "0px";
    setTimeout(function () {
      this$.crslList.style.cssText = "transition:none;";
    }, this.options.speed);
  }

  paginators.forEach((paginator) => {
    paginatorsLabel.forEach((label) => {
      if (
        paginator.id === "paginator-line-pets" &&
        label.htmlFor === "paginator-line-pets"
      ) {
        let number = label.querySelector(".paginator__number");
        let petsInfo = document.querySelectorAll(".pets__info");

        petsInfo.forEach((info) => {
          if (info.classList.contains("pets__info-hover")) {
            info.classList.remove("pets__info-hover");
          }
          if (info.id == this.currentElement) {
            info.classList.add("pets__info-hover");
          }
        });
        if (this.currentElement === 7) {
          paginator.value = this.currentElement + 1;
          number.innerHTML = `08/`;
        } else {
          paginator.value = this.currentElement + 1;
          number.innerHTML = `0${this.currentElement + 1}/`;
        }
      }
    });
  });
};

Ant.prototype.elemNext = function (num) {
  num = num || 1;

  let paginators = document.querySelectorAll("input[type=range]");
  let paginatorsLabel = document.querySelectorAll("label");

  this.currentElement += num;
  if (this.currentElement >= this.dotsVisible) this.currentElement = 0;

  let elm,
    buf,
    this$ = this;
  this.crslList.style.cssText =
    "transition:margin " + this.options.speed + "ms ease;";
  this.crslList.style.marginLeft = "-" + this.elemWidth * num + "px";

  setTimeout(function () {
    this$.crslList.style.cssText = "transition:none;";
    for (let i = 0; i < num; i++) {
      elm = this$.crslList.firstElementChild;
      buf = elm.cloneNode(true);
      this$.crslList.appendChild(buf);
      this$.crslList.removeChild(elm);
    }
    this$.crslList.style.marginLeft = "0px";
  }, this.options.speed);

  paginators.forEach((paginator) => {
    paginatorsLabel.forEach((label) => {
      if (
        paginator.id === "paginator-line-pets" &&
        label.htmlFor === "paginator-line-pets"
      ) {
        let number = label.querySelector(".paginator__number");
        let petsInfo = document.querySelectorAll(".pets__info");

        petsInfo.forEach((info) => {
          if (info.classList.contains("pets__info-hover")) {
            info.classList.remove("pets__info-hover");
          }
          if (info.id == this.currentElement) {
            info.classList.add("pets__info-hover");
          }
        });
        if (this.currentElement == 7) {
          paginator.value = 8;
          number.innerHTML = `08/`;
        } else {
          paginator.value = this.currentElement + 1;
          number.innerHTML = `0${this.currentElement + 1}/`;
        }
      }
    });
  });
};

// document.querySelector('#paginator-line-pets').addEventListener('input', () => elemNext(paginator.value));

Ant.prototype.dotOn = function (num) {
  // this.indicatorDotsAll[num].style.cssText =
  //   "background-color:#BBB; cursor:pointer;";
};

Ant.prototype.dotOff = function (num) {
  // this.indicatorDotsAll[num].style.cssText =
  //   "background-color:#556; cursor:default;";
};

Ant.initialize = function (that) {
  // Constants
  that.elemCount = that.crslElements.length;
  that.dotsVisible = that.elemCount;
  let elemStyle = window.getComputedStyle(that.crslElemFirst);
  that.elemWidth =
    that.crslElemFirst.offsetWidth +
    parseInt(elemStyle.marginLeft) +
    parseInt(elemStyle.marginRight);

  // Variables
  that.currentElement = 0;
  that.currentOffset = 0;
  that.touchPrev = true;
  that.touchNext = true;
  let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
  let bgTime = getTime();

  // Functions
  function getTime() {
    return new Date().getTime();
  }
  function setAutoScroll() {
    that.autoScroll = setInterval(function () {
      let fnTime = getTime();
      if (fnTime - bgTime + 10 > that.options.interval) {
        bgTime = fnTime;
        that.elemNext();
      }
    }, that.options.interval);
  }

  // Start initialization
  if (that.elemCount <= that.options.elemVisible) {
    that.options.auto = false;
    that.options.touch = false;
    that.options.arrows = false;
    that.options.dots = false;
    that.leftArrow.style.display = "none";
    that.rightArrow.style.display = "none";
  }

  if (!that.options.loop) {
    that.dotsVisible = that.elemCount - that.options.elemVisible + 1;
    that.leftArrow.style.display = "none";
    that.touchPrev = false;
    that.options.auto = false;
  } else if (that.options.auto) {
    setAutoScroll();
    that.crslList.addEventListener(
      "mouseenter",
      function () {
        clearInterval(that.autoScroll);
      },
      false
    );
    that.crslList.addEventListener("mouseleave", setAutoScroll, false);
  }

  if (that.options.arrows) {
    that.leftArrow.addEventListener(
      "click",
      function () {
        let fnTime = getTime();
        if (fnTime - bgTime > that.options.speed) {
          bgTime = fnTime;
          console.log(that.currentElement);
          if (that.currentElement == 0) {
            that.elemNext(7);
          } else {
            that.elemPrev();
          }
        }
      },
      false
    );
    that.rightArrow.addEventListener(
      "click",
      function () {
        let fnTime = getTime();
        if (fnTime - bgTime > that.options.speed) {
          bgTime = fnTime;
          console.log(that.currentElement);
          if (that.currentElement == 7) {
            that.elemPrev(7);
          } else {
            that.elemNext();
          }
        }
      },
      false
    );
  } else {
    that.leftArrow.style.display = "none";
    that.rightArrow.style.display = "none";
  }

  if (that.options.dots) {
    that.indicatorDotsAll = that.crslRoot.querySelectorAll(
      "#paginator-line-pets"
    );
    let currentValue = that.indicatorDotsAll[0].value;
    that.indicatorDotsAll[0].addEventListener("input", (element) => {
      let elemCurrentValue = element.target.value;
      if (currentValue < elemCurrentValue) {
        that.elemNext();
        currentValue++;
      } else {
        that.elemPrev();
        currentValue--;
      }
    });
  }
};

new Ant();
