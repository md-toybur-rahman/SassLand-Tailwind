function menubarDropdownHandler(id, arrow) {
    const dropdownContainer = document.getElementById(id);
    const dropdownArrow = document.getElementById(arrow);
    if (!dropdownArrow.classList.contains('rotate-180')) {
        dropdownArrow.classList.add('rotate-180');
        dropdownContainer.classList.remove('h-0');
        dropdownContainer.classList.add('h-auto');
        dropdownContainer.classList.add('py-[23px]');
    }
    else {
        dropdownArrow.classList.remove('rotate-180')
        dropdownContainer.classList.add('h-0');
        dropdownContainer.classList.remove('h-auto');
        dropdownContainer.classList.remove('py-[23px]');
    }
}

function handleInstallmentToggle() {
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');
    const installmentToggle = document.getElementById('installmentToggle');
    if (!installmentToggle.classList.contains('right-0')) {
        installmentToggle.classList.remove('left-0');
        installmentToggle.classList.add('right-0');
        monthly.classList.remove('text-white');
        monthly.classList.add('text-[#BABAC6]');
        yearly.classList.remove('text-[#BABAC6]');
        yearly.classList.add('text-white');
    }
    else {
        installmentToggle.classList.remove('right-0');
        installmentToggle.classList.add('left-0');
        yearly.classList.remove('text-white');
        yearly.classList.add('text-[#BABAC6]');
        monthly.classList.remove('text-[#BABAC6]');
        monthly.classList.add('text-white');
    }
}


const wrapper = document.querySelector(".carouselContainer");
// const carousel = document.querySelector(".slideshow-container");
// const firstCardWidth = carousel.querySelector(".mySlides").offsetWidth;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    setInterval(() => {
        setTimeout(() => {
            showSlides(slideIndex += n);     
        }, 3000);
    }, 3000);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// // 
// const autoPlay = () => {
//     if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the carousel after every 2500 ms
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();
// wrapper.addEventListener("mouseleave", autoPlay);