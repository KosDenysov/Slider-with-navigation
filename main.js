let slide = document.querySelectorAll(".slider__item");
let sliderDot = document.querySelectorAll(".slider__dot");
let activeSlider, activeSliderDot;

let arrowPrev = document.querySelector(".slider__arrow_prev");
let arrowNext = document.querySelector(".slider__arrow_next");

let nextSlide = () => {
    activeSlider = document.querySelector(".slider__item_active");
    activeSliderDot = document.querySelector(".slider__dot_active");
    if (activeSlider.nextElementSibling === null) {
        activeSlider.classList.remove("slider__item_active");
        activeSliderDot.classList.remove("slider__dot_active");
        activeSlider.parentElement.firstElementChild.classList.add("slider__item_active");
        activeSliderDot.parentElement.firstElementChild.classList.add("slider__dot_active");
    } else {
        activeSlider.classList.remove("slider__item_active");
        activeSliderDot.classList.remove("slider__dot_active");
        activeSlider.nextElementSibling.classList.add("slider__item_active");
        activeSliderDot.nextElementSibling.classList.add("slider__dot_active");
    }
}

let prevSlide = () => {
    activeSlider = document.querySelector(".slider__item_active");
    activeSliderDot = document.querySelector(".slider__dot_active");
    if (activeSlider.previousElementSibling === null) {
        activeSlider.classList.remove("slider__item_active");
        activeSliderDot.classList.remove("slider__dot_active");
        activeSlider.parentElement.lastElementChild.classList.add("slider__item_active");
        activeSliderDot.parentElement.lastElementChild.classList.add("slider__dot_active");
    } else {
        activeSlider.classList.remove("slider__item_active");
        activeSliderDot.classList.remove("slider__dot_active");
        activeSlider.previousElementSibling.classList.add("slider__item_active");
        activeSliderDot.previousElementSibling.classList.add("slider__dot_active");
    }
}

let sliderDotLinks = (event) => {
    let sliderDotTemp = event.target;
    let sliderNumber = 0;
    let condition = false;
    while (condition === false) {
        if (sliderDotTemp.previousElementSibling === null) {
            condition = true;
        } else {
            sliderNumber++;
            sliderDotTemp = sliderDotTemp.previousElementSibling;
        }
    }
    document.querySelector(".slider__item_active").classList.remove("slider__item_active");
    document.querySelector(".slider__dot_active").classList.remove("slider__dot_active");
    slide[sliderNumber].classList.add("slider__item_active");
    sliderDot[sliderNumber].classList.add("slider__dot_active");
}

arrowNext.addEventListener("click", nextSlide);
arrowPrev.addEventListener("click", prevSlide);

for (let i=0; i<sliderDot.length; i++) {
    sliderDot[i].addEventListener("click", sliderDotLinks);
}

