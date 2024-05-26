const menu = document.querySelector("#menu")
const menuBtn = document.querySelector("#menu-btn")
const hero_img_1 = document.querySelector("#hero_img_1")

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('invisible');
    document.querySelector('.menuLogo').classList.toggle('hidden');
    document.querySelector('.header').classList.toggle('hidden');
})

// Scrolled
const navbar = document.querySelector('.navbar')
const logo = document.querySelector('.logo_container')

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        logo.style.visibility = 'visible';
    } else {
        logo.style.visibility = 'hidden';
    }

    if (scrollPosition > 50) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = 'auto';
    }
});


const wiperTrack = document.querySelector(".wiper-track");
const wipes = Array.from(wiperTrack.children);
const wipePrevBtn = document.querySelector(".wiper-button__right");
const wipeNextBtn = document.querySelector(".wiper-button__left");
const wipeWidth = wipes[0].getBoundingClientRect().width;

const arrowsBehaviour = (wipePrevBtn, wipeNextBtn, index) => {
  if (index === 0) {
    wipePrevBtn.classList.add("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  } else if (index === wipes.length -1) {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.add("is-hidden");
  } else {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  }
};

const wipeSlide = (wiperTrack, activeSlide, nextSlide, targetIndex) => {
  wiperTrack.style.transform =
    "translateX(-" + (wipeWidth + 24) * (targetIndex -2) + "px)";
  activeSlide.classList.remove("active-swipe");
  activeSlide.style.transform = "scale(1)";
  nextSlide.classList.add("active-swipe");
  nextSlide.style.transform = "scale(1.1)";
};

wipeNextBtn.addEventListener("click", (e) => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const nextSlide = activeSlide.nextElementSibling;
  const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
  wipeSlide(wiperTrack, activeSlide, nextSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});
wipePrevBtn.addEventListener("click", (e) => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const nextSlide = activeSlide.previousElementSibling;
  const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
  wipeSlide(wiperTrack, activeSlide, nextSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});
