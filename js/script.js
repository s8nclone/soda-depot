$(document).ready(function() {

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
      511: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  });


  let sideNav = $("#mySidenav");
  let hamburgerIcon = $(".hamburger-icon");
  let closeBtn = $(".closebtn");

  function openNav() {
      sideNav.css("width", "95%").addClass("open");
      hamburgerIcon.addClass("close");
      closeBtn.addClass("open");
  }

  function closeNav() {
      sideNav.css("width", "0");
      hamburgerIcon.removeClass("close");
      closeBtn.removeClass("open");
  }

  // Attach click event handlers to your elements
  hamburgerIcon.click(openNav);
  closeBtn.click(closeNav);
});