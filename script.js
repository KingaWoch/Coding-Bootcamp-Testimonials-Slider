let slides = document.querySelectorAll(".slider__slide");
const previousBtn = document.querySelectorAll(".previous");
const nextBtn = document.querySelectorAll(".next");

let currentSlide = 0;

previousBtn.forEach((previous) => {
  previous.addEventListener("click", () => {
    changeSlide(currentSlide + 1);
  });
});

nextBtn.forEach((next) => {
  next.addEventListener("click", () => {
    changeSlide(currentSlide - 1);
  });
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

document.onkeydown = function (e) {
  switch (e.code) {
    case "ArrowLeft":
      changeSlide(currentSlide - 1);
      break;
    case "ArrowRight":
      changeSlide(currentSlide + 1);
      break;
  }
};
