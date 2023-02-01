"use strict";
/*=================================================
    HAMBURGER MENU
===================================================*/
function hamburgerMenu() {
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

/*=================================================
    MAIN VISUAL SLIDE-IN
===================================================*/
let illustration = document.querySelector(".menu_illustration");
let menu_title = document.querySelector(".title");

window.addEventListener("load", () => {
  illustration.classList.contains("fadein");
  illustration.classList.add("show");

  menu_title.classList.contains("fadein");
  menu_title.classList.add("show");
});
