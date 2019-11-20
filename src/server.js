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

setTimeout(function() {
  document.querySelector(".container>.col-6").classList.add("show");
}, 1000);

// Form validation
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
