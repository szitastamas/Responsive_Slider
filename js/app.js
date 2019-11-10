/* CAROUSEL SECTION */
let callingSlider = setInterval(nextCarousel, 4000);

window.onload = () =>{
    carouselCounter = 0;
    callingSlider;
}


const carouselSlide = document.querySelector('.carousel-slide');
const carouselPics = document.querySelectorAll('.carousel-slide-card');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const pauseBtn = document.getElementById('pause-btn');
const progressBar = document.getElementById('progress-bar');

let carouselCounter = 1;

function progressBarFunction(){
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
}

function nextCarousel(){
    progressBarFunction();
    if(carouselCounter >= carouselPics.length-1) return;
    setTimeout(()=>{
        progressBar.style.transition = "width 3400ms ease-in-out";
        progressBar.style.width = "100%";
    },400)
    carouselSlide.style.transition = "transform 400ms ease-in-out";
    carouselCounter++;
    carouselSlide.style.transform = "translateX(" + (-100 * carouselCounter) + "%)";
}

function prevCarousel(){
    progressBarFunction();
    if(carouselCounter <= 0) return;
    setTimeout(()=>{
        progressBar.style.transition = "width 3400ms ease-in-out";
        progressBar.style.width = "100%";
    },400)
    carouselSlide.style.transition = "transform 400ms ease-in-out";
    carouselCounter--;
    carouselSlide.style.transform = "translateX(" + (-100 * carouselCounter) + "%)";
};

nextBtn.addEventListener('click', ()=>{
    clearInterval(callingSlider);
    nextCarousel();
    callingSlider = setInterval(nextCarousel, 4000);
})

prevBtn.addEventListener('click', () => {
    clearInterval(callingSlider);
    prevCarousel();
    callingSlider = setInterval(nextCarousel, 4000);
})

carouselSlide.addEventListener('transitionend', () => {
    if(carouselPics[carouselCounter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        carouselCounter = carouselPics.length-2;
        carouselSlide.style.transform = "translateX(" + (-100 * carouselCounter) + "%)";
    }

    if(carouselPics[carouselCounter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        carouselCounter = carouselPics.length-carouselCounter;
        carouselSlide.style.transform = "translateX(" + (-100 * carouselCounter) + "%)";
    }
})

carouselPics.forEach(pic => pic.addEventListener('mouseover', ()=>{
    clearInterval(callingSlider);
    progressBar.style.transition = "none";
    pauseBtn.style.opacity = ".7";
    progressBar.style.width = "0";
}))

carouselPics.forEach(pic => pic.addEventListener('mouseleave', ()=>{
    callingSlider = setInterval(nextCarousel, 4000);
    progressBar.style.transition = "width 3400ms ease-in-out";
    pauseBtn.style.opacity = "0";
    progressBar.style.width = "100%";
}))