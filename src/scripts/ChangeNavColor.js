export default class ChangeNavColor {
  constructor() {
    function changeNavColor() {
      let scroll = window.scrollY;
      const nav = document.querySelector("nav");
      const navOffset = document.querySelector("nav").offsetHeight;
      if (scroll > navOffset) {
        return nav.classList.add("darkMode");
      } else {
        return nav.classList.remove("darkMode");
      }
    }
    document.addEventListener("scroll", changeNavColor);
  }
}
