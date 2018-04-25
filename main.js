$( document ).ready(function() {
    console.log( "ready!" );


    $(".btn").click(function(){
        const input1 = document.getElementById("FormControlSelect1").value;
        const input2 = document.getElementById("FormControlSelect2").value;
        const input3 = document.getElementById("FormControlSelect3").value;
        console.log(input1,input2,input3);
    });
});