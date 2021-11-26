$(document).ready(function () {
  // Hover image to change color
  $("img")
    .mouseover(function () {
      var src = $(this).attr("src");
      $(this).attr("src", src.replace("-none", "-hover"));
    })
    .mouseout(function () {
      var src = $(this).attr("src");
      $(this).attr("src", src.replace("-hover", "-none"));
    });

  // Click to change icon, toogle class show, fixed body, none scroll
  let body = document.querySelector("body");
  let topPosition = 0;
  $(".icon").click(function () {
    $(".icon").toggleClass("change");

    $(".header--menu").toggleClass("show");

    if ($(this).is(".change")) {
      topPosition = window.pageYOffset;

      body.style.position = "fixed";
      body.style.width = "100%";
      body.style.top = -topPosition + "px";
    }
    if ($(this).is(":not(.change)")) {
      body.style.removeProperty("position");
      body.style.removeProperty("width");
      body.style.removeProperty("top");

      window.scrollTo({ left: 0, top: topPosition, behavior: "instant" });
      // For ie
      window.scrollTo(0, topPosition);
    }
  });
});

// Scroll Fixed Menu (About Page)
const nav = document.querySelector(".header");
const NavTop = nav.offsetTop;
const mediaQuery = window.matchMedia("(min-width: 768px)");

function fixnavbar() {
  if (window.pageYOffset > NavTop) {
    var isPageIndex = document.getElementsByClassName("header-home");
    if (isPageIndex.length > 0) {
      document.body.style.paddingTop = nav.offsetHeight + "px";
    }
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.body.style.paddingTop = 0;
    document.querySelector(".header").classList.remove("sticky");
  }
}
if (mediaQuery.matches) {
  window.addEventListener("scroll", fixnavbar);
}

// Accordion
var acc = document.getElementsByClassName("menu--items__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    $(this).find(".status").toggleClass("show");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Click to add class active menu
var items = document.getElementsByClassName("list");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("items-active");
    current[0].className = current[0].className.replace(" items-active", "");
    this.className += " items-active";
  });
}

// Box modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Gallery Slide
var isPageHasGallery = document.getElementsByClassName("store--box");
if (isPageHasGallery.length > 0) {
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("box--image__show");
    var dots = document.getElementsByClassName("items");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" current", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " current";
    captionText.innerHTML =
      "２５文字程度落ち着くダミーテキストダミーテキストダ";
  }
}
