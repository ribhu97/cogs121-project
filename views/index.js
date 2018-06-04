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
        $("#submit-btn").text('Login');
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
        $("#submit-btn").text('Register');
    });

    $( "#submit-btn" ).click(function() {
        console.log("Submit button clicked");
        if (count == 1) {
            console.log("New user!");
            let recName = $( "#name" ).val();
            let recEmail = $( "#email" ).val();
            let recPwd = $( "#password" ).val();
            let recComp = $( "#company" ).val();

            if (recName==""|| recEmail==""|| recPwd=="" || recComp=="" ){
                alert("Please Fill All Required Field");
                return false;
            }

            // console.log(recName);
            // console.log(recEmail);
            // console.log(recPwd);
            // console.log(recComp);

            // Store company name and user name in local storage
            // localStorage.setItem('compName', recComp);
            // localStorage.setItem('name', recName);

            // Ajax call goes here
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
                    console.log('data pushed');
                    window.location.href='profile.html';
                }
            });
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