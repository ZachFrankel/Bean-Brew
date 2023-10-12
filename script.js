var slideIndex = 0;

function showSlide() {
  var slides = document.querySelectorAll(".slide");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  setTimeout(showSlide, 3000);
}

window.onload = showSlide;
