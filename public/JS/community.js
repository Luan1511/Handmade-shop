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

    if (scrollPosition > 1000) {
        document.querySelector('.cursor_top').style.display = 'flex';
    } else {
        document.querySelector('.cursor_top').style.display = 'none';
    }
});

// SVG Map
const provinces = {
    hanoi: {
        name: "Thủ đô Hà Nội",
        users: ['Đỗ Rê Mi']
    },
    angiang: {
        name: "An Giang",
        users: ['Đỗ Rê Mon']
    },
    baria: {
        name: "Bà Rịa-Vũng Tàu",
        users: ['Đạt Đỗ']
    },
    bacgiang: {
        name: "Bắc Giang",
        users: ['Đỗ Rê Mi']
    },
    backan: {
        name: "Bắc Kạn",
    },
    baclieu: {
        name: "Bạc Liêu",
    },
    bacninh: {
        name: "Bắc Ninh",
    },
    bentre: {
        name: "Bến Tre",
    },
    binhdinh: {
        name: "Bình Định",
    },
    binhduong: {
        name: "Bình Dương",
    },
    binhphuoc: {
        name: "Bình Phước",
    },
    binhthuan: {
        name: "Bình Thuận",
    },
    camau: {
        name: "Cà Mau",
    },
    cantho: {
        name: "Cần Thơ",
    },
    caobang: {
        name: "Cao Bằng",
    },
    danang: {
        name: "Đà Nẵng",
        users: ['Minh Nguyên', 'Văn Thi']
    },
    daklak: {
        name: "Đắk Lắk",
    },
    daknong: {
        name: "Đắk Nông",
    },
    dienbien: {
        name: "Điện Biên",
    },
    dongnai: {
        name: "Đồng Nai",
    },
    dongthap: {
        name: "Đồng Tháp",
    },
    gialai: {
        name: "Gia Lai",
    },
    hagiang: {
        name: "Hà Giang",
    },
    hanam: {
        name: "Hà Nam",
    },
    hatinh: {
        name: "Hà Tĩnh",
    },
    haiduong: {
        name: "Hải Dương",
    },
    haiphong: {
        name: "Hải Phòng",
    },
    haugiang: {
        name: "Hậu Giang",
    },
    hoabinh: {
        name: "Hòa Bình",
    },
    hungyen: {
        name: "Hưng Yên",
    },
    khanhhoa: {
        name: "Khánh Hòa",
    },
    kiengiang: {
        name: "Kiên Giang",
    },
    kontum: {
        name: "Kon Tum",
    },
    laichau: {
        name: "Lai Châu",
    },
    lamdong: {
        name: "Lâm Đồng",
    },
    langson: {
        name: "Lạng Sơn",
    },
    laocai: {
        name: "Lào Cai",
    },
    longan: {
        name: "Long An",
    },
    namdinh: {
        name: "Nam Định",
    },
    nghean: {
        name: "Nghệ An",
    },
    ninhbinh: {
        name: "Ninh Bình",
    },
    ninhthuan: {
        name: "Ninh Thuận",
    },
    phutho: {
        name: "Phú Thọ",
    },
    phuyen: {
        name: "Phú Yên",
    },
    quangbinh: {
        name: "Quảng Bình",
    },
    quangnam: {
        name: "Quảng Nam",
        users: ['Chí Luân', 'Lý Nghĩa']
    },
    quangngai: {
        name: "Quảng Ngãi",
    },
    quangninh: {
        name: "Quảng Ninh",
    },
    quangtri: {
        name: "Quảng Trị",
    },
    soctrang: {
        name: "Sóc Trăng",
    },
    sonla: {
        name: "Sơn La",
    },
    tayninh: {
        name: "Tây Ninh",
    },
    thaibinh: {
        name: "Thái Bình",
    },
    thainguyen: {
        name: "Thái Nguyên",
    },
    thanhhoa: {
        name: "Thanh Hóa",
    },
    thuathienhue: {
        name: "Thừa Thiên Huế",
    },
    tiengiang: {
        name: "Tiền Giang",
    },
    travinh: {
        name: "Trà Vinh",
    },
    tuyenquang: {
        name: "Tuyên Quang",
    },
    vinhlong: {
        name: "Vĩnh Long",
    },
    vinhphuc: {
        name: "Vĩnh Phúc",
    },
    yenbai: {
        name: "Yên Bái",
    },
    dienbien: {
        name: "Điện Biên",
    },
    hochiminh: {
        name: "TP. Hồ Chí Minh",

    }
  };

  document.querySelectorAll("#vietnam-map path").forEach((path) => {
    path.addEventListener("click", (event) => {
      const tooltip = document.getElementById("tooltip");
      const districtsDiv = document.getElementById("users");
      const provinceId = event.target.id;
      const province = provinces[provinceId];
      tooltip.innerHTML = province.name;
      tooltip.style.display = "block";
      tooltip.style.left = event.pageX + 10 + "px";
      tooltip.style.top = event.pageY + 10 + "px";

      districtsDiv.innerHTML = "";
      if (province.users != null){
        province.users.forEach((district) => {
            const districtDiv = document.createElement("div");
            districtDiv.className = "users";
            districtDiv.innerText = district;
            districtsDiv.appendChild(districtDiv);
          });
      } else{
        const districtDiv = document.createElement("div");
        districtsDiv.innerText = '(Trống)';
      }
    });

    // path.addEventListener("mouseout", () => {
    //   document.getElementById("tooltip").style.display = "none";
    //   document.getElementById("users").innerHTML = "";
    // });
  });

//   Upload
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Order
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