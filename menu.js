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

/*=================================================
    SPA
===================================================*/
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/pasta/": "/pages/pasta.html",
  "/appetizer/": "/pages/appetizer.html",
  "/dessert/": "/pages/dessert.html",
  "/drink/": "/pages/drink.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main_page").innerHTML = html;
};

window.addEventListener("popstate", (event) => {
  handleLocation();
});

handleLocation();
