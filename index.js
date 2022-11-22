/***************************Burger******************************/
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav");
const shadow = document.querySelector(".header__nav-shadow");
const burgerLink = document.querySelectorAll(".nav__link");
const burgerBtn = document.querySelector(".btn__header");

if (burger) {
  burger.addEventListener("click", show);
  shadow.addEventListener("click", show);
  burgerLink.forEach((item) => {
    item.addEventListener("click", removeAll);
  });
}

function show() {
  burgerMenu.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  burger.classList.toggle("active");
  shadow.classList.toggle("active");
  document.body.classList.toggle("lock");
}

function removeAll() {
  document.body.classList.remove("lock");
  burgerMenu.classList.remove("active");
  burgerBtn.classList.remove("active");
  burger.classList.remove("active");
  shadow.classList.remove("active");
}

/******************************************End burger************************************/

/********************************Select *****************************************/

const select = document.querySelector(".select");
const selectHeader = document.querySelectorAll(".select__header");
const selectItem = document.querySelectorAll(".select__item");

if (select) {
  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoise);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("active");
  }
  function selectChoise() {
    let text = this.innerText,
      currentText = this.closest(".select").querySelector(".select__current");
    if (currentText.innerText != text) {
      currentText.innerText = text;
      select.classList.remove("active");
    }
  }

  document.addEventListener("click", function (event) {
    let target = event.composedPath().includes(select);
    if (!target && select.classList.contains("active")) {
      select.classList.remove("active");
    }
  });
}

/******************************** End Select*****************************************/

/*******************************************Tabs*************************************/
const tabsBtn = document.querySelectorAll(".tab__button");
const tabsText = document.querySelectorAll(".tab__content");

tabsBtn.forEach(tabsFunc);

function tabsFunc(item) {
  item.addEventListener("click", function () {
    let tabId = item.getAttribute("data-tab");
    let tab = document.querySelector(tabId);
    if (!item.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabsText.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
      tab.classList.add("active");
    }
  });
}
/**************************************End Tabs*****************************************/

/**********************************Swiper*********************************************/

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper__button-next",
    prevEl: ".swiper__button-prev",
  },
});

/**********************************End Swiper*********************************************/
