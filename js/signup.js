$(document).ready(function() {
  var $email = $('#Inputemail');
  var $password = $('#Inputpassword');

  // eventos a los inputs
  $email.on('input', function() {
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log($(this).val());
    PATTERNEMAIL.test(str)
  })


  $password.on('input', function() {
    if ($(this).val().length >= 6) {
      alert('cumple');
    } else {
      alert('no cumple');
    }
  })
});
