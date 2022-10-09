import "swiper/css/bundle";
import Swiper from "swiper/bundle";
const swiper = new Swiper(".swiper", {
  spaceBetween: 20,
  clickable: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

if (screen.width > 300) {
  window.onscroll = () => {
    const nav = document.querySelector(".header__contacts");
    const scroll = window.scrollY;
    if (scroll > 500) {
      nav.classList.add("fixed");
    } else if (scroll < 200) {
      nav.classList.remove("fixed");
    }
  };
}
