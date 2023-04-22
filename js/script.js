


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



const product = [
   {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      image: "./images/image-product-1.jpg",
      price: 125

   },
]




const addItem = document.querySelector(".desc-add-button div span:last-of-type");

let countItem = document.querySelector(".desc-add-button div span:nth-child(2)");

let addToCart = document.querySelector(".desc-add-button > button.add-to-cart");


const deduceItem = document.querySelector(".desc-add-button div span:first-of-type");

// let itemsContainer = [];
let cartCountItem = 0;

const getItem = (item) => {

   let productItem = product[item]

   let element = document.createElement('div');

   element.setAttribute("class", "content");

   element.innerHTML = `
   <div class="content-item">
   <img class="item-img" src="${productItem.image}" alt="">
   <div class="one">
   <div>
      <h4>${productItem.name}</h4>
      <p>$${productItem.price}.00 <span>X</span> <span>$375.00</span> </p>
   </div>

      <div id="delete-product">
            <svg  xmlns="http://www.w3.org/2000/svg"
               class="icon icon-tabler icon-tabler-trash" width="24" height="24"
               viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
               stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M4 7l16 0"></path>
               <path d="M10 11l0 6"></path>
               <path d="M14 11l0 6"></path>
               <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
               <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
      </div>
   </div>
</div>
 <button>Checkout</button>

   `;

   console.log(element);
}

getItem(cartCountItem)




const countProductItem = (e, id) => {

   if (e.target.outerText === "+") {
      count++;
      countItem.innerHTML = count;

   } else {
      count--;
      countItem.innerHTML = count;

   }

}





addItem.addEventListener("click", countProductItem);

deduceItem.addEventListener("click", countProductItem);














