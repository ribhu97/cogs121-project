/*
    Handles New User Login, pushes it the credentials to the database.
    Puts info into localStorage for later use for UI components
*/

$( document ).ready(function() {
    let count = 0;

    // 0 for login, 1 for register
    $( "#login-btn" ).click(function() {
        $( "#name-input" ).hide();
        $( "#comp-input" ).hide();
        $( "#login-btn" ).css('background-color','#3884ff');
        $("#register-btn").css('background-color','white');
        $("#register-btn").css('color','black');
        $( "#login-btn" ).css('color','white');
        $("#submit-btn").text('Login');
        count = 0;
      });
    $( "#register-btn" ).click(function() {
        count = 1;
        $( "#name-input" ).show();
        $( "#comp-input" ).show();
        $( "#register-btn" ).css('background-color','#3884ff');
        $( "#register-btn" ).css('color','white');
        $("#login-btn").css('background-color','white');
        $("#login-btn").css('color','black');
        $("#submit-btn").text('Register');
        $("#register-btn").hide();
    });
    // adds a new user to db
    $( "#submit-btn" ).click(function() {
        if (count == 1) {
            let recName = $( "#name" ).val();
            let recEmail = $( "#email" ).val();
            let recPwd = $( "#password" ).val();
            let recComp = $( "#company" ).val();
            // makes sure the form is filled
            if (recName==""|| recEmail==""|| recPwd=="" || recComp=="" ){
                alert("Please Fill All Required Field");
                return false;
            }

            // Store company name and user name in local storage
            localStorage.setItem('compName', recComp);
            localStorage.setItem('name', recName);
            localStorage.setItem('email', recEmail);

            // Posts credentials to databse
            $.ajax({
                method:'POST',
                url: '/api/recruiter/add',
                data: {
                    name: recName,
                    email: recEmail,
                    password: recPwd,
                    company: recComp
                },
                success: () => {
                    window.location.href='profile.html';
                }
            });
        }
        else {
            // previous user credentials
            let email = $( "#email" ).val();
            let password = $( "#password" ).val();
        }
    });

});