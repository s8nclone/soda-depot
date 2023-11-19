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
        items: 4
      }
    }
  });


  let sideNav = $("#mySidenav");
  let hamburgerIcon = $(".hamburger-icon");
  let closeBtn = $(".closebtn");

  const openNav = () => {
    sideNav.css("width", "95%").addClass("open");
    hamburgerIcon.addClass("close");
    closeBtn.addClass("open");
  }

  const closeNav = () => {
    sideNav.css("width", "0");
    hamburgerIcon.removeClass("close");
    closeBtn.removeClass("open");
  }

  // Attach click event handlers to your elements
  hamburgerIcon.click(openNav);
  closeBtn.click(closeNav);

  // Define an array of strings
  const changeSignBoard = ['by!', 'buy!', 'bye!'];
  let currentIndex = 0;

  //Set the text content of the span element to each string in the array, one after the other
  setInterval(() => {
    $(".stopSign").text(changeSignBoard[currentIndex % changeSignBoard.length]);
    currentIndex++;
  }, 2000);

  //set the current location to the selected option
  $(".more_location_select").change(function () {
    // Capture the selected value from select
    let selectedValue = $(this).val(); 
    // Set the text content of .current-location to the selected value
    $(".current-location").text(selectedValue); 
  });

});