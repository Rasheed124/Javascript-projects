


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

});


// SHOW PRODUCT IMAGE FROM PRODUCTS 
const productImage = document.querySelectorAll(".product-cart-image .image-one");

const productImageId = document.querySelector(".product-image #pro-image-id");


productImage.forEach((product) => {
   product.addEventListener("click", () => {
      let bgImage = product.querySelector("img");

      let bgImageSrc = bgImage.getAttribute("src");

      productImageId.setAttribute("src", `${bgImageSrc}`)


   })
})


// SLIDE PRODUCT IMAGE

const slideImages = document.querySelectorAll(".product-cart-image .slideimg");

const slidePrevious = document.querySelector(".slide-product-image .spi-previous");

const slideNext = document.querySelector(".slide-product-image .spi-next");


let currentItem = 0;

let result = Array.from(slideImages).map((product) => {
   return product
})

slideNext.addEventListener("click", () => {
   currentItem++
   if (currentItem > result.length - 1) {
      currentItem = 0;
   }

   let currentImage = result[currentItem];

   let currentImageSrc = currentImage.getAttribute("src")

   productImageId.setAttribute("src", `${currentImageSrc}`)

})

slidePrevious.addEventListener("click", () => {
   currentItem--
   if (currentItem < 0) {
      currentItem = result.length - 1;
   }

   let currentImage = result[currentItem];

   let currentImageSrc = currentImage.getAttribute("src")

   productImageId.setAttribute("src", `${currentImageSrc}`)
})








