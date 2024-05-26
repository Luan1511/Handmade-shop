// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// AOS.init();

const menu = document.querySelector("#menu")
const menuBtn = document.querySelector("#menu-btn")
const hero_img_1 = document.querySelector("#hero_img_1")
const cursor = document.querySelector('.cursor_cus')

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


// Cursor_Hero
document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const { top, left } = hero_img_1.getBoundingClientRect();

        const relativeX = mouseX - left;
        const relativeY = mouseY - top;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        if (isHovering(hero_img_1, relativeX, relativeY)) {
            cursor.style.display = 'block';
            hero_img_1.style.scale = '1.2';
            hero_img_1.style.transform = 'translate(0, -30px)';
        } else {
            cursor.style.display = 'none';
            hero_img_1.style.scale = '1';
            hero_img_1.style.transform = 'translate(0, 0px)';
        }
    });

    function isHovering(element, x, y) {
        const { width, height } = element.getBoundingClientRect();

        return (x >= 0 && x <= width && y >= 0 && y <= height);
    }
});

// Cursor_Product
document.addEventListener('DOMContentLoaded', () => {
    const cursor_pro = document.querySelector('.cursor_pro');
    const targetImgs = document.querySelectorAll('.img_pro_1, .img_pro_2, .img_pro_3, .img_pro_4, .img_pro_5');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        let isCursorVisible = false;

        targetImgs.forEach((targetImg) => {
            const { top, left, width, height } = targetImg.getBoundingClientRect();
            const relativeX = mouseX - left;
            const relativeY = mouseY - top;

            if (relativeX >= 0 && relativeX <= width && relativeY >= 0 && relativeY <= height) {
                isCursorVisible = true;
            }
        });

        cursor_pro.style.left = mouseX + 'px';
        cursor_pro.style.top = mouseY + 'px';

        cursor_pro.style.display = isCursorVisible ? 'block' : 'none';
    });
});


// Slide
// let slider = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let dots = document.querySelectorAll('.slider .dots li');

// let lengthItems = items.length - 1;
// let active = 0;
// next.onclick = function(){
//     active = active + 1 <= lengthItems ? active + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : lengthItems;
//     reloadSlider();
// }
// let refreshInterval = setInterval(()=> {next.click()}, 3000);
// function reloadSlider(){
//     slider.style.left = -items[active].offsetLeft + 'px';
//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(()=> {next.click()}, 3000);

    
// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', ()=>{
//          active = key;
//          reloadSlider();
//     })
// })
// window.onresize = function(event) {
//     reloadSlider();
// };

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(!isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.carousel .card .img');
  
    elements.forEach(element => {
      const randomColor = getRandomColor();
      element.style.backgroundColor = randomColor;
    });
  
    function getRandomColor() {
        const neonColors = [
            '#39FF14', // Neon Green
            '#FF073A', // Neon Red
            '#FF9933', // Neon Orange
            '#CC00FF', // Neon Purple
            '#00FFFF', // Neon Cyan
            '#FFFF33', // Neon Yellow
            '#FF66CC', // Neon Pink
            '#00FF00', // Bright Green
            '#FF00FF', // Bright Magenta
            '#00FFCC'  // Bright Aqua
          ];
          return neonColors[Math.floor(Math.random() * neonColors.length)];
        }
  });