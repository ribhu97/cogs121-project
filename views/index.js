$( document ).ready(function() {
    console.log("Hi");

    $( "#login-btn" ).click(function() {
        console.log("Login button pressed");
        $( "#name-input" ).hide();
        $( "#comp-input" ).hide();
      });
    $( "#register-btn" ).click(function() {
        console.log("Register button pressed");
        $( "#name-input" ).show();
        $( "#comp-input" ).show();
    });
});