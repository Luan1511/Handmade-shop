// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// AOS.init();

const menu = document.querySelector("#menu")
const menuBtn = document.querySelector("#menu-btn")
const hero_img_1 = document.querySelector("#hero_img_1")
const cursor = document.querySelector('.cursor_cus')

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('invisible');
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

    if (scrollPosition > 100) {
        hero_img_1.style.width = '80%';
    } else {
        hero_img_1.style.width = '100%';
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
// let items = document.querySelectorAll('.slider .list .item img');
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
// let refreshInterval = setInterval(()=> {next.click()}, 4000);
// function reloadSlider(){
//     slider.style.left = -items[active].offsetLeft + 'px';
    
//     let last_active_dot = document.querySelector('.slider .dots li.active');
//     last_active_dot.classList.remove('active');
//     dots[active].classList.add('active');

//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(()=> {next.click()}, 10);
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

