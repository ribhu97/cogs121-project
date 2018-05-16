$( document ).ready(function() {
    let count = 0;

    // 0 for login, 1 for register
    $( "#login-btn" ).click(function() {
        // console.log("Login button pressed");
        $( "#name-input" ).hide();
        $( "#comp-input" ).hide();
        $( "#login-btn" ).css('background-color','#3884ff');
        $("#register-btn").css('background-color','white');
        $("#register-btn").css('color','black');
        $( "#login-btn" ).css('color','white');
        count = 0;
        console.log(count);
      });
    $( "#register-btn" ).click(function() {
        count = 1;
        console.log(count);
        // console.log("Register button pressed");
        $( "#name-input" ).show();
        $( "#comp-input" ).show();
        $( "#register-btn" ).css('background-color','#3884ff');
        $( "#register-btn" ).css('color','white');
        $("#login-btn").css('background-color','white');
        $("#login-btn").css('color','black');

    });

    $( "#submit-btn" ).click(function() {
        console.log("Submit button clicked");
        if (count == 1) {
            console.log("New user!");
            let userName = $( "#name" ).val();
            let email = $( "#email" ).val();
            let password = $( "#password" ).val();
            let company = $( "#company" ).val();
            console.log(userName);
            console.log(email);
            console.log(password);
            console.log(company);
        }
        else {
            console.log("Logining in previous user!");
            let email = $( "#email" ).val();
            let password = $( "#password" ).val();
            console.log(email);
            console.log(password);
        }
    });

   


});