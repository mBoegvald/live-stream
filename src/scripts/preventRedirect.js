export default class PrevenetRedirect {
  constructor() {
    $("form").submit(function() {
      $.post($(this).attr("action"), function() {
        var test = document.getElementById("test");
        test.value = "Thank you";
        localStorage.value = "ok";
      });
      return false; // prevent submitting the form
    });
  }
}
