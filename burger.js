const BURGER_BTN_OPEN = "burger-btn-open";
const BURGER_OPEN = "burger-open";
const BURGER_CONTENT_OPEN = "burger_content_open";
const BODY_FIXED = "body-fixed";

const burgerBtn = document.querySelector(".js-burger-btn");
const burgerOpen = document.querySelector(".js-burger");
const burgerContentOpen = document.querySelector(".js-burger-content");
const bodyFixed = document.querySelector("body");

burgerBtn.addEventListener("click", toggleBurger);
burgerOpen.addEventListener("click", (event) => {
   const isClickOutsideContent = !event
      .composedPath()
      .includes(burgerContentOpen);
   if (isClickOutsideContent) {
      toggleBurger();
   }
});
function toggleBurger() {
   burgerBtn.classList.toggle(BURGER_BTN_OPEN);
   burgerOpen.classList.toggle(BURGER_OPEN);
   burgerContentOpen.classList.toggle(BURGER_CONTENT_OPEN);
   bodyFixed.classList.toggle(BODY_FIXED);
}
