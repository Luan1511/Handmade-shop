const menu = document.querySelector("#menu")
const menuBtn = document.querySelector("#menu-btn")
const hero_img_1 = document.querySelector("#hero_img_1")
const cursor = document.querySelector('.cursor_cus')
const targetImg = document.querySelector('#hero_img_1')

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('invisible');
})

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        hero_img_1.style.width = '80%';
    } else {
        hero_img_1.style.width = '100%';
    }
});

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const { top, left } = targetImg.getBoundingClientRect();

        const relativeX = mouseX - left;
        const relativeY = mouseY - top;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        if (isHovering(targetImg, relativeX, relativeY)) {
            cursor.style.display = 'block';
        } else {
            cursor.style.display = 'none';
        }
    });

    function isHovering(element, x, y) {
        const { width, height } = element.getBoundingClientRect();

        return (x >= 0 && x <= width && y >= 0 && y <= height);
    }
});

// Slide
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item img');
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
let refreshInterval = setInterval(()=> {next.click()}, 4000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 10);
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
