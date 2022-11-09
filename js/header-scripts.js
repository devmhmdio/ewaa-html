const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuWrapper = document.querySelector(".menu-wrapper");
const header_open = document.querySelector(".header");
const hasCollapsible = document.querySelectorAll(".has-collapsible");

// Sidenav Toggle
openMenu.addEventListener("click", function () {
  menuWrapper.classList.add("offcanvas");
  //header_open.classList.add("open_nav");
});

closeMenu.addEventListener("click", function () {
  menuWrapper.classList.remove("offcanvas");
  // header_open.classList.remove("open_nav");
});

// Collapsible Menu
hasCollapsible.forEach(function (collapsible) {
  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("active");

    // Close Other Collapsible
    hasCollapsible.forEach(function (otherCollapsible) {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove("active");
      }
    });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
