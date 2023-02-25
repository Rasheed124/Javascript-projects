const openMenu = document.querySelector(".open-menu");
const menuMain = document.querySelector(".header-menus");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.querySelector(".close-menu");

const cartItem = document.querySelector(".cart-items");
const cartIcon = document.querySelector(".cart-icon");


// HEADER CLICKS 
openMenu.addEventListener("click", () => {
   menuMain.classList.toggle("show-menu");
})

menuOverlay.addEventListener("click", (e) => {
   menuMain.classList.toggle("show-menu");
})

closeMenu.addEventListener("click", () => {
   menuMain.classList.toggle("show-menu");
})


// DISPLAY CART ITEMS CONTAINER

cartIcon.addEventListener("click", () => {
   cartItem.classList.toggle("show-cart-item")

})