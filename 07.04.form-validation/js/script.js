$(function () {

  // When the submit event comes in, we first validate all form fields
  // and abort submission if one of them is invalid. Also, we highlight all
  // invalid fields so that the user knows what to fix.
  $("#form").submit(function(event) {
    // First, read out all entered values.
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checkbox = $("#checkbox").is(":checked");
    validateNameField(name,event);
    validatePasswordField(password,event)
  });
  function validateNameField(name, event) {
    if(!iValidName(name)){
      $("#name-feedback").text("Please enter at least two characters");
      event.preventDefault();
    }
    else {
      $("#name-feedback").text("");
    }
  }

  function validatePasswordField(password, event){
    if(!isValidPassword(password)){
      $("#password-feedback").text("Please enter at least 6 characters");
      event.preventDefault();
    }
    else {
      $("#password-feedback").text("");
    }
  }

  function iValidName(name) {
    return name.length >= 2;
  }

  function isValidPassword(password){
    return password.length >=6 && /.[0-9]./.test(password);
  }



});
