function changeNavColor() {
  let scroll = window.scrollY;
  const navOffset = document.querySelector("#prices").offsetTop;
  const nav = document.querySelector("nav");
  if (scroll > navOffset - nav.offsetHeight) {
    return nav.classList.add("darkMode");
  } else {
    return nav.classList.remove("darkMode");
  }
}
window.addEventListener("scroll", changeNavColor);

setTimeout(function() {
  document.querySelector(".container>.col-6").classList.add("show");
}, 1000);
