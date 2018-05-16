$(document).ready(function() {
    // $(".btn").click(function(){
    //     const input1 = document.getElementById("FormControlSelect1").value;
    //     const input2 = document.getElementById("FormControlSelect2").value;
    //     const input3 = document.getElementById("FormControlSelect3").value;
    //     console.log(input1,input2,input3);
        
    //     $.post('mongodb://ribhu:pass2905@ds014648.mlab.com:14648/persistent',
    //     {
    //         "modelChoices[]": [
    //             input1,input2,input3
    //         ]
    
    //     },
    //     function(){
    //         console.log("The ajax post works!");
    //     });
    // });
    $(".fa-upload").click(function(){
        console.log('shit was clicked');
        //Mongoimport here
        $.getJSON( "../newdata_train.json", function( data ) {  
            console.log( "JSON Data: " + data);
            $.each( data, function( key, val ) {
                console.log(key + "value:: " + val );
            });
        });
    });

});
