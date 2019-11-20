"use strict";

function changeNavColor() {
  var scroll = window.scrollY;
  var nav = document.querySelector("nav");
  var navOffset = document.querySelector("nav").offsetHeight;

  if (scroll > navOffset) {
    return nav.classList.add("darkMode");
  } else {
    return nav.classList.remove("darkMode");
  }
}

global.addEventListener("scroll", changeNavColor);
setTimeout(function () {
  document.querySelector(".container>.col-6").classList.add("show");
}, 1000);