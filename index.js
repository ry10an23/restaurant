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
