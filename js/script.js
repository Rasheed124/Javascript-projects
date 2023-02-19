const openMenu  = document.querySelector(".open-menu");
const menuMain  = document.querySelector(".header-menus");
// const menu  = document.querySelector(".menu");
const closeMenu  = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
   menuMain.classList.toggle("show-menu")
})


closeMenu.addEventListener("click", () => {
   menuMain.classList.toggle("show-menu")

})