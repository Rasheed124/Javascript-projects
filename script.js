

// Get new Date

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

const allLinks = document.querySelectorAll(".scroll-link")

const backToTop = document.querySelector(".top-link")

const nav = document.getElementById("nav");


navToggle.addEventListener("click", () => {

  const linkContainerHeight = linksContainer.getBoundingClientRect().height;

  const linksHeight = links.getBoundingClientRect().height;

  if (linkContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;

  }
})



allLinks.forEach(link => {
  link.addEventListener("click", (e) => {


    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1)
    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;

    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = nav.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;


    if (!fixedNav) {

      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + linksContainerHeight;
    }



    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;


  });
});





//  ONSCROLL BEHAVIOUR/FUNCTIONALITY
window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
    // links.classList.add("off-show");
  }

  if (scrollHeight > 700) {
    backToTop.classList.add("show-link");
  } else {
    backToTop.classList.remove("show-link");

  }

});



