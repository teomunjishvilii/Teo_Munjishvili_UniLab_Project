/////////////////////////////////////////// Header ///////////////////////////////////////////

// select elements
const header = document.querySelector(".header");
const userIcon = document.querySelector(".user_icon_img");

// Function to add the class 'scrolled' to header when scrolling and change the user icon from white to black
function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");

    // Change white user icon to black while scrolling
    userIcon.src = "../images/user_icon_black.png";
  } else {
    header.classList.remove("scrolled");
    userIcon.src = "../images/user_icon_white.png";
  }
}

// Add scroll event listener to window
window.addEventListener("scroll", handleScroll);

// Display the user menu when clicked on the user icon
document.querySelector(".user_icon").addEventListener("click", function () {
  let userMenu = document.getElementById("user_menu");

  if (userMenu.classList.contains("hidden")) {
    userMenu.classList.remove("hidden");
  } else {
    userMenu.classList.add("hidden");
  }
});

/////////////////////////////////////////// Mobile Menu ///////////////////////////////////////////
const navButton = document.querySelector(".nav_button");
const offScreenMenu = document.querySelector(".off_screen_menu");

navButton.addEventListener("click", function () {
  offScreenMenu.classList.toggle("show");
});

/////////////////////////////////////////// Slider ///////////////////////////////////////////

$(document).ready(function () {
  // Initialize Slick carousel
  $(".slides-wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/left_arrow.png" alt="Left arrow" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/right_arrow.png" alt="Right arrow" /></button>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Retrieve data from data.js and populate slides
  slidesData.forEach((slide) => {
    const slideElement = `
          <div class="slide">
              <img src="${slide.image}" alt="${slide.header}">
              <h2>${slide.header}</h2>
              <p>${slide.paragraph1}</p>
              <p>${slide.paragraph2}</p>
          </div>`;
    $(".slides-wrapper").slick("slickAdd", slideElement);
  });
});

/////////////////////////////////////////// Blogs ///////////////////////////////////////////
import { slidesData, blogPosts } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const blogsContainer = document.getElementById("blogs-container");

  blogPosts.forEach((post) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.classList.add("roboto-medium");
    blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.header}">
            <a href = "#">${post.header}</a>
        `;
    blogsContainer.appendChild(blogCard);
  });
});

