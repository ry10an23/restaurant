"use strict";

/*=================================================
    HAMBURGER MENU
===================================================*/
function hamburgerMenu() {
  const logoImg = document.querySelector("#logoPic");
  const imgUrl = "./img/logo.png";
  // const imgUrlReverse = "./img/logo_reverse.png";
  let navBar = document.querySelector("#nav");
  let hamburgerBtn = document.querySelector(".hamburger");

  if (
    !(
      navBar.classList.contains("active") &&
      hamburgerBtn.classList.contains("active")
    )
  ) {
    navBar.classList.add("active");
    hamburgerBtn.classList.add("active");
  } else {
    navBar.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  mv_scale(scroll);
});

/*=================================================
    RESCALING MAIN VISUAL SCALING (COMMON PROCESS)
===================================================*/
const mv_scale = () => {
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 900) {
      const currentY = window.pageYOffset;
      let imgs = document.getElementsByClassName("main_pic");
      for (const img of imgs) {
        img.style.width = 100 / 3 + currentY / 10 + "%";
      }
    } else {
      const currentY = window.pageYOffset;
      let imgs = document.getElementsByClassName("main_pic");
      for (const img of imgs) {
        img.style.width = 100 - currentY / 10 + "%";
      }
    }
  });
};

/*=================================================
    MAIN VISUAL IMG SLIDER
===================================================*/
// const pics_src_left = [
//   "./img/UNISCALLOP.PNG",
//   "./img/croquette.PNG",
//   "./img/maccha_cake.JPG",
// ];
// let num_left = 0;

// const pics_src_centre = [
//   "./img/SAKURASTORY.PNG",
//   "./img/burrata.jpg",
//   "./img/UMESHU.PNG",
// ];
// let num_centre = 0;

// const pics_src_right = [
//   "./img/GNOCCHI.PNG",
//   "./img/wagyu.jpg",
//   "./img/tiramisu.jpg",
// ];
// let num_right = 0;

// const slideShow_timer = () => {
//   if (num_left && num_centre && num_right === 2) {
//     num_left = 0;
//     num_centre = 0;
//     num_right = 0;
//   } else {
//     num_left++;
//     num_centre++;
//     num_right++;
//   }
//   document.getElementById("left").src = pics_src_left[num_left];
//   document.getElementById("centre").src = pics_src_centre[num_centre];
//   document.getElementById("right").src = pics_src_right[num_right];
// };

// setInterval(slideShow_timer, 3000);

/*=================================================
    ABOUT CONTENTS FADE-IN
===================================================*/
let aboutPic = document.querySelector(".about_pic");
let aboutDesc = document.querySelector(".about_desc");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let windowHeight = window.innerHeight;

  let targetAboutPic = aboutPic.getBoundingClientRect().top + scroll;
  let targetAboutDesc = aboutDesc.getBoundingClientRect().top + scroll;
  if (scroll > targetAboutPic - windowHeight) {
    if (aboutPic.classList.contains("fadein")) {
      aboutPic.classList.add("show");
    }
  }
  if (scroll > targetAboutDesc - windowHeight) {
    if (aboutDesc.classList.contains("fadein")) {
      aboutDesc.classList.add("show");
    }
  }
});

/*=================================================
    HANDMADE STEP FADE-IN
===================================================*/
let processLefts = document.querySelectorAll(".left");
let processRights = document.querySelectorAll(".right");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let windowHeight = window.innerHeight;

  for (let processLeft of processLefts) {
    let targetProcessLeft = processLeft.getBoundingClientRect().top + scroll;
    if (scroll > targetProcessLeft - windowHeight) {
      if (processLeft.classList.contains("fadein")) {
        processLeft.classList.add("show");
      }
    }
  }
  for (let processRight of processRights) {
    let targetProcessRight = processRight.getBoundingClientRect().top + scroll;
    if (scroll > targetProcessRight - windowHeight) {
      if (processRight.classList.contains("fadein")) {
        processRight.classList.add("show");
      }
    }
  }

  // if (scroll > targetProcessLeft - windowHeight) {
  //   if (processLeft.classList.contains("fadein")) {
  //     processLeft.classList.add("show");
  //   }
  // }
  // if (scroll > targetProcessRight - windowHeight) {
  //   if (processRight.classList.contains("fadein")) {
  //     processRight.classList.add("show");
  //   }
  // }
});
