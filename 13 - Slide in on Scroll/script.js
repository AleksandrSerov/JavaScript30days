const sliderImages = document.querySelectorAll(".slide-in");

const checkSlide = () => {
  sliderImages.forEach(sliderImage => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    isHalfShown && isNotScrolledPast
      ? sliderImage.classList.add("active")
      : sliderImage.classList.remove("active");
  });
};

window.addEventListener("scroll", checkSlide);
