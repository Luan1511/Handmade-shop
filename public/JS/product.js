const menu = document.querySelector("#menu")
const menuBtn = document.querySelector("#menu-btn")
// const cursor = document.querySelector('.cursor_cus')

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

    if (scrollPosition > 1000) {
        document.querySelector('.cursor_top').style.display = 'flex';
    } else {
        document.querySelector('.cursor_top').style.display = 'none';
    }
});


let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

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

/* Furniture product */
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildren = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildren.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
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
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if (!isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

/* COllections */
const wrapper_doll = document.querySelector(".wrapper_doll");
const carousel_doll = document.querySelector(".carousel_doll");
const firstCardWidth_doll = carousel_doll.querySelector(".card").offsetWidth;
const arrowBtns_doll = document.querySelectorAll(".wrapper_doll i");
const carouselChildren_doll = [...carousel_doll.children];

let isDragging_doll = false, isAutoPlay_doll = true, startX_doll, startScrollLeft_doll, timeoutId_doll;

// Get the number of cards that can fit in the carousel at once
let cardPerView_doll = Math.round(carousel_doll.offsetWidth / firstCardWidth_doll);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren_doll.slice(-cardPerView_doll).reverse().forEach(card => {
    carousel_doll.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildren_doll.slice(0, cardPerView_doll).forEach(card => {
    carousel_doll.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
carousel_doll.classList.add("no-transition");
carousel_doll.scrollLeft = carousel_doll.offsetWidth;
carousel_doll.classList.remove("no-transition");

const dragStart_doll = (e) => {
    isDragging_doll = true;
    carousel_doll.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX_doll = e.pageX;
    startScrollLeft_doll = carousel_doll.scrollLeft;
}

const dragging_doll = (e) => {
    if (!isDragging_doll) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel_doll.scrollLeft = startScrollLeft_doll - (e.pageX - startX_doll);
}

const dragStop_doll = () => {
    isDragging_doll = false;
    carousel_doll.classList.remove("dragging");
}

const infiniteScroll_doll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel_doll.scrollLeft === 0) {
        carousel_doll.classList.add("no-transition");
        carousel_doll.scrollLeft = carousel_doll.scrollWidth - (2 * carousel_doll.offsetWidth);
        carousel_doll.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel_doll.scrollLeft) === carousel_doll.scrollWidth - carousel_doll.offsetWidth) {
        carousel_doll.classList.add("no-transition");
        carousel_doll.scrollLeft = carousel_doll.offsetWidth;
        carousel_doll.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId_doll);
    if (!wrapper_doll.matches(":hover")) autoPlay_doll();
}

const autoPlay_doll = () => {
    if (!isAutoPlay_doll) return;
    timeoutId_doll = setTimeout(() => carousel_doll.scrollLeft += firstCardWidth_doll, 2000);
}
autoPlay_doll();

carousel_doll.addEventListener("mousedown", dragStart_doll);
carousel_doll.addEventListener("mousemove", dragging_doll);
document.addEventListener("mouseup", dragStop_doll);
carousel_doll.addEventListener("scroll", infiniteScroll_doll);
wrapper_doll.addEventListener("mouseenter", () => clearTimeout(timeoutId_doll));
wrapper_doll.addEventListener("mouseleave", autoPlay_doll);
