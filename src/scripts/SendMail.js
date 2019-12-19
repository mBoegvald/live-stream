export default class SendMail {
  constructor() {
    $(function() {
      $("#myForm").submit(function(e) {
        e.preventDefault();
        let form_data = $(this).serialize();
        let name = document.querySelector("input[name=name]").value;
        let email = document.querySelector("input[name=email]").value;
        if (!name || !email) {
          return alert("Navn og Email er påkrævet");
        }
        $.ajax({
          type: "POST",
          url: "form-to-email.php",
          dataType: "json", // Add datatype
          data: form_data
        })
          .done(function(data) {
            alert("Din email er sendt!");
          })
          .fail(function(data) {
            alert("Noget gik galt, prøv igen.");
          });
      });
    });
  }
}
