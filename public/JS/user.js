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


// Generate options for days
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const daySelect = document.getElementById("day");
days.forEach((day) => {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;
  daySelect.appendChild(option);
});

// Generate options for months
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const monthSelect = document.getElementById("month");
months.forEach((month) => {
  const option = document.createElement("option");
  option.value = month;
  option.textContent = month;
  monthSelect.appendChild(option);
});

// Generate options for years
const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1899 },
  (_, i) => 1900 + i
);
const yearSelect = document.getElementById("year");
years.forEach((year) => {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
});