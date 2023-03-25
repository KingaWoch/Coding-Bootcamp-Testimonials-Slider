let slides = document.querySelectorAll(".slider__slide");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let currentSlide = 0;

previousBtn.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

nextBtn.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(n) {
  if (n >= slides.length) {
    n = 0;
  }
  if (n < 0) {
    n = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  slides[n].classList.toggle("active");

  currentSlide = n;
}
