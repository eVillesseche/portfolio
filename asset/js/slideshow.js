var slideIndex = 0;
showSlides(slideIndex);

var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

function plusSlides(x) {
  if (x == 1)
  {
    if (slideIndex == 0)
    {
      slideIndex = slides.length - 1 ;
    }
    else
    {
    slideIndex = slideIndex - 1
    }
  }
  else if (x == 2)
  {
    if (slideIndex == slides.length - 1)
    {
      slideIndex = 0;
    }
    else
    {
      slideIndex = slideIndex + 1;
    }
  }
}

function currentSlide(n)
{
  showSlides(slideIndex = n);
}


function showSlides(y)
{
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

var k = slideIndex -1 ;
  if (y < 0){
    slideIndex = slides.length;
  }
  if ( y >= slides.length)
  {
    slideIndex = 0;
  }
  for (i = 0; i < dots.length; i++)
 {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
  if (slideIndex > slides.length) {slideIndex = 0}
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
    setTimeout(showSlides, 0);
}
