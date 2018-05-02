$( document ).ready(function() {
    console.log( "ready!" );


    $(".btn").click(function(){
        const input1 = document.getElementById("FormControlSelect1").value;
        const input2 = document.getElementById("FormControlSelect2").value;
        const input3 = document.getElementById("FormControlSelect3").value;
        console.log(input1,input2,input3);
        
        $.post('mongodb://ribhu:pass2905@ds014648.mlab.com:14648/persistent',
        {
            "modelChoices[]": [
                input1,input2,input3
            ]
    
        },
        function(){
            console.log("The ajax post works!");
        });
    });



});


if (ability == abilityBeginner){
    if(countBeg == 0){  
        MatchCounter++;
        int begID = MatchCounter + 1;
    }   
}