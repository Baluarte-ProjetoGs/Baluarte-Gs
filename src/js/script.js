// JavaScript do SlideShow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function mostrarSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[slideIndex].style.display = "block";
}

function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}


function autoPlay() {
    slideIndex++;
    mostrarSlide(slideIndex);
    setTimeout(autoPlay, 5000);
}


mostrarSlide(slideIndex);
autoPlay()

// JavaScript do Menu Hamburger
const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });