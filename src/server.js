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
window.addEventListener("scroll", changeNavColor);

setTimeout(function() {
  document.querySelector(".container>.col-6").classList.add("show");
}, 1000);

// form validation
let forms = document.getElementsByClassName("needs-validation");
Array.prototype.filter.call(forms, function(form) {
  form.addEventListener("submit", function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});
