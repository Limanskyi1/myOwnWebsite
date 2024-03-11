const burger = document.getElementById("burger");
const menu = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  burger.classList.contains("open") ? menu.classList.add("open") : menu.classList.remove("open");
});





