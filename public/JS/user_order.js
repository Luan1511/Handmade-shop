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


function toggleMenu(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const subMenu = document.getElementById("subMenu");
    if (subMenu.classList.contains("hidden")) {
      subMenu.classList.remove("hidden");
      subMenu.classList.add("max-h-full");
    } else {
      subMenu.classList.remove("max-h-full");
      subMenu.classList.add("hidden");
    }
  }

  const noOrdersContainer = document.getElementById("no-orders-container");

  const handleTabClick = (event) => {
    event.preventDefault();

    const tabId = event.target.id;
    const noOrdersText = {
      "tat-ca-don": "Chưa có đơn hàng",
      "cho-thanh-toan": "Chưa có đơn hàng chờ thanh toán",
      "dang-xu-ly": "Chưa có đơn hàng đang xử lý",
      "dang-van-chuyen": "Chưa có đơn hàng đang vận chuyển",
      "da-giao": "Chưa có đơn hàng đã giao",
      "da-huy": "Chưa có đơn hàng đã hủy",
    };

    const noOrdersMessage = noOrdersText[tabId] || "Chưa có đơn hàng";

    const noOrdersContainer = document.getElementById(
      "no-orders-container"
    );
    const noOrdersMessageElement = noOrdersContainer.querySelector("p");
    noOrdersContainer.classList.add("slide-leave-active");

    setTimeout(() => {
      noOrdersMessageElement.textContent = noOrdersMessage;
      noOrdersContainer.classList.remove("slide-leave-active");
      noOrdersContainer.classList.add("slide-enter", "slide-enter-active");
    }, 300);

    setTimeout(() => {
      noOrdersContainer.classList.remove(
        "slide-enter",
        "slide-enter-active"
      );
    }, 600);
  };

  const tabs = document.querySelectorAll(".purchase-order a");
  tabs.forEach((tab) => {
    tab.addEventListener("click", handleTabClick);
  });