function openOrCloseMenu() {
    let nav = document.getElementById('nav');

    if(nav.classList.contains('mobileOn')) {
        nav.classList.remove('mobileOn');
    } else {
        nav.classList.add('mobileOn');
    }
}

let time = 10000
let currentSlideIndex = 0

function prevSlide() {
    let slides = document.querySelectorAll('.slide');
    let max = slides.length;
    
    slides[currentSlideIndex].classList.remove('selected');

    currentSlideIndex--

    if(currentSlideIndex < 0)
        currentSlideIndex = max - 1

    slides[currentSlideIndex].classList.add('selected');
}

function nextSlide() {
    let slides = document.querySelectorAll('.slide');
    let max = slides.length;
    
    slides[currentSlideIndex].classList.remove('selected');

    currentSlideIndex++

    if(currentSlideIndex >= max)
        currentSlideIndex = 0

    slides[currentSlideIndex].classList.add('selected');
}

function start() {
    setInterval(() => {
        nextSlide();
    }, time);
}

window.addEventListener('load', start);