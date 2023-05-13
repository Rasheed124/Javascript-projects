


const openMenu = document.querySelector(".open-menu"),
   menuMain = document.querySelector(".header-menus"),
   menuOverlay = document.querySelector(".menu-overlay"),
   closeMenu = document.querySelector(".close-menu"),

   cartItem = document.querySelector(".cart-items"),
   cartIcon = document.querySelector(".cart-icon");


const closeProductGallery = document.querySelector(".product-gallery > .close-gallery"),
   slideProductGallery = document.querySelector(".slide-product-gallery "),
   showProductGallery = document.querySelector(".product-container .image ");

// FUNCTIONS
const switchProductImage = (image, productImage) => {
   image.forEach((product) => {
      product.addEventListener("click", () => {
         let bgImage = product.querySelector("img").getAttribute("src");

         productImage.setAttribute("src", `${bgImage}`)
      })
   })
}


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


// DISPLAY SLIDE PRODUCT GALLERY

showProductGallery.addEventListener("click", () => {
   slideProductGallery.classList.toggle("off-product-gallery");
})

closeProductGallery.addEventListener("click", () => {
   slideProductGallery.classList.toggle("off-product-gallery");
})





const productImageGallery = document.querySelector("#product-Image-Gallery"),
   productGalleryImages = document.querySelectorAll("#product-gallery .product-cart-image .gallery-img"),
   slideGalleryImages = document.querySelectorAll("#product-gallery .gallery-img .slide-img"),


   proGalleryPrev = document.querySelector("#product-gallery .slide-product-image .spi-previous"),
   proGalleryNext = document.querySelector("#product-gallery .slide-product-image .spi-next");



switchProductImage(productGalleryImages, productImageGallery);


let gallerycurrentItem = 0;

let resultGallery = Array.from(slideGalleryImages).map((product) => {
   return product
})

proGalleryNext.addEventListener("click", () => {

   gallerycurrentItem++
   if (gallerycurrentItem > resultGallery.length - 1) {
      gallerycurrentItem = 0;
   }

   let currentImage = resultGallery[gallerycurrentItem];

   let currentImageSrc = currentImage.getAttribute("src");

   productImageGallery.setAttribute("src", `${currentImageSrc}`)


   let prod = Array.from(productGalleryImages).map((item) => {
      return item
   });

   prod[gallerycurrentItem].classList.add("active_product_gallery");

   productGalleryImages.forEach(item => {
      if (prod[gallerycurrentItem] !== item) {
         item.classList.remove("active_product_gallery");
      }

   })

})

proGalleryPrev.addEventListener("click", () => {

   gallerycurrentItem--
   if (gallerycurrentItem < 0) {
      gallerycurrentItem = resultGallery.length - 1;
   }



   let currentImage = resultGallery[gallerycurrentItem];

   let currentImageSrc = currentImage.getAttribute("src");

   productImageGallery.setAttribute("src", `${currentImageSrc}`)


   let prod = Array.from(productGalleryImages).map((item) => {
      return item
   });

   prod[gallerycurrentItem].classList.add("active_product_gallery");

   productGalleryImages.forEach(item => {
      if (prod[gallerycurrentItem] !== item) {
         item.classList.remove("active_product_gallery");
      }

   })

})

// slidePrevious.addEventListener("click", () => {
//    currentItem--
//    if (currentItem < 0) {
//       currentItem = result.length - 1;
//    }

//    let currentImage = result[currentItem];

//    let currentImageSrc = currentImage.getAttribute("src")

//    productImageId.setAttribute("src", `${currentImageSrc}`)

//    let prod = Array.from(productImage).map((item) => {
//       return item
//    });

//    prod[currentItem].classList.add("active_product");

//    productImage.forEach(item => {
//       if (prod[currentItem] !== item) {
//          item.classList.remove("active_product");
//       }

//    })

// })






// SHOW PRODUCT IMAGE FROM PRODUCTS 
const productImage = document.querySelectorAll(".product-cart-image .image-one");

const productImageId = document.querySelector("#pro-image-id");

switchProductImage(productImage, productImageId);




// SLIDE PRODUCT IMAGE
const slideImages = document.querySelectorAll(".product-cart-image .slideimg"),

   slidePrevious = document.querySelector(".slide-product-image .spi-previous"),

   slideNext = document.querySelector(".slide-product-image .spi-next");


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

   let currentImageSrc = currentImage.getAttribute("src");

   productImageId.setAttribute("src", `${currentImageSrc}`)


   let prod = Array.from(productImage).map((item, index) => {
      return item
   });

   prod[currentItem].classList.add("active_product");

   productImage.forEach(item => {
      if (prod[currentItem] !== item) {
         item.classList.remove("active_product");
      }

   })

})

slidePrevious.addEventListener("click", () => {
   currentItem--
   if (currentItem < 0) {
      currentItem = result.length - 1;
   }

   let currentImage = result[currentItem];

   let currentImageSrc = currentImage.getAttribute("src")

   productImageId.setAttribute("src", `${currentImageSrc}`)

   let prod = Array.from(productImage).map((item) => {
      return item
   });

   prod[currentItem].classList.add("active_product");

   productImage.forEach(item => {
      if (prod[currentItem] !== item) {
         item.classList.remove("active_product");
      }

   })

})



// ADD TO CART


const addItem = document.querySelector(".desc-add-button div span:last-of-type");

let countItem = document.querySelector(".desc-add-button div span:nth-child(2)");

let addToCart = document.querySelector(".desc-add-button > button.add-to-cart");


const deduceItem = document.querySelector(".desc-add-button div span:first-of-type");


cartItemContainer = document.querySelector("#item-container");





const product = [
   {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      image: "./images/image-product-1.jpg",
      price: 125

   },

]

let cartItemBox = [];


let count = 0;

const getAddedCart = (e) => {

   if (e.target.outerText === "+") {
      count++;
      countItem.innerHTML = count;
   } else {
      count--;

      count < 0 || count == 0 ? count = 0 : "";

      countItem.innerHTML = count


   }


   const addItemToCart = () => {
      cartItemContainer.innerHTML = `
      <div class="content" >
      <div class="content-item">
      <img class="item-img" src="./images/image-product-1.jpg" alt="">
      <div class="one">
      <div>
         <h4>Fall Limited Edition Sneakers</h4>
         <p><span id="count-price">$125.00</span>  <span>X</span> <span id="total-price">$125.00</span> </p>
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
    </div>`
         ;

      const priceCount = document.getElementById("count-price");
      const totalPrice = document.getElementById("total-price");

      const correct1 = Number(priceCount.innerHTML)
      const correct2 = totalPrice.innerHTML

      console.log(correct1, correct2);




   }





   addToCart.addEventListener("click", addItemToCart)

}




addItem.addEventListener("click", getAddedCart);


deduceItem.addEventListener("click", getAddedCart);




