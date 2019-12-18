export default class SendMail {
  constructor() {
    $(function() {
      $("#myForm").submit(function(e) {
        e.preventDefault();
        let form_data = $(this).serialize();
        $.ajax({
          type: "POST",
          url: "form-to-email.php",
          dataType: "json", // Add datatype
          data: form_data
        })
          .done(function(data) {
            alert("Din mail er blevet sendt!");
          })
          .fail(function(data) {
            alert("Noget gik galt, prøv igen.");
          });
      });
    });
  }
}
