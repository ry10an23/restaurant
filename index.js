"use strict";

/*=================================================
    HAMBURGER MENU
===================================================*/
function hamburgerMenu() {
  const logoImg = document.querySelector("#logoPic");
  const imgUrl = "./img/logo.png";
  const imgUrlReverse = "./img/logo_reverse.png";
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
    logoImg.src = imgUrlReverse;
  } else {
    navBar.classList.remove("active");
    hamburgerBtn.classList.remove("active");
    logoImg.src = imgUrl;
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
