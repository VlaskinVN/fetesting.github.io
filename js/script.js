$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            nav: true,
            dots: true,
            dotsData: true,
        });
        
    });
    $(document).ready(function() {        
        var $navbar = $("#mNavbar");  
     
        
        AdjustHeader(); // Incase the user loads the page from halfway down (or something);
        $(window).scroll(function() {
            AdjustHeader();
        });
    
    function AdjustHeader(){
      if ($(window).scrollTop() > 70) {
        if (!$navbar.hasClass("navbar-fixed-top")) {
          $navbar.addClass("navbar-fixed-top");
        }
      } else {
        $navbar.removeClass("navbar-fixed-top");
      }
    }
  });
  
function resize() {
    if(window.outerWidth <= 992){
        document.getElementById("top").style.display = "none";
        document.getElementById("fserch").style.display = "block";
    }else{
        document.getElementById("top").removeAttribute("style");
        document.getElementById("fserch").style.display = "none";
    }
    if(window.outerWidth >= 992) {
        document.getElementById("fserch").style.display = "none";
    }
}

