
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(window).scroll(function(){
  var wh = $(window).height()-50;
    if($(window).scrollTop() > $('.animated bounceInLeft').offset().top-wh){
    $('.sec1-dmush1').addClass('onScroll');
  }
});

var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
var element = document.querySelector(".onscoll"); //element

window.addEventListener('scroll', function(){ 
    if(scrollpos > (element.offsetTop - wh)){
        element.classList.add("onScroll");
    }
});