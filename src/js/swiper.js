import "swiper/css/bundle";
import Swiper from "swiper/bundle";
const homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 20,
  clickable: true,
  // autoplay: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".home-next",
    prevEl: ".home-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const advantageSwiper = new Swiper(".advantage-swiper", {
  spaceBetween: 30,
  clickable: true,
  slidesPerView: 3,
  // autoplay: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".advantage-swiper-next",
    prevEl: ".advantage-swiper-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

if (screen.width > 300) {
  window.onscroll = () => {
    const nav = document.querySelector(".header__contacts");
    const menu = document.querySelector(".menu-header");
    const scroll = window.scrollY;
    if (scroll > 500) {
      nav.classList.add("fixed");
      menu.classList.add("fixed");
    } else if (scroll < 200) {
      nav.classList.remove("fixed");
      menu.classList.remove("fixed");
    }
  };
}
const advantageSide = document.querySelector(".advantage__slide");
const advantageSlideText = document.querySelector(".advantage__slide-text");
const advantageSlideTitle = document.querySelector(".advantage__slide-title");
document.onmouseover = (e) => {
  if (
    e.target == advantageSide ||
    e.target == advantageSlideText ||
    e.target == advantageSlideTitle
  ) {
    setTimeout(() => {
      advantageSlideText.classList.remove("hidden");
    }, 150);
    setTimeout(() => {
      advantageSlideText.classList.add("active");
    }, 200);
  } else {
    setTimeout(() => {
      advantageSlideText.classList.add("hidden");
    }, 0);
    advantageSlideText.classList.remove("active");
  }
};
