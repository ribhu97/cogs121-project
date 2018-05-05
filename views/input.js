$(document).ready(function() {
    

    $( "#Training" ).change( () => {
        upload("Training");
    });
    $( "#Test" ).change( () => {
        upload("Test");
    });

   //var selectedFile = document.getElementById().files[0];
    $("#inSub").click( () => {
        console.log("Click works!");
        $( "input[name*='myFile']" ).submit( () =>{
         console.log("input:first").val();
      }); 
    });
});


function upload(id){
    const x = document.getElementById(id);
    let txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Please upload a file";
        } 
        else {
                txt += "<br><strong>" + id + " Data has uploaded!</strong><br>";
                var file = x.files[0];
                if ('name' in file) {
                    txt += file.name + "<br>";
                }
            
        }
    } 
    document.getElementById (id+"-upload").innerHTML = txt;
}



/*
var x = document.getElementById(training);
        var txt = "";
        if ('files' in x) {
                txt += "<br><strong>" + ". file</strong><br>";
                var file = x.files[0];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
        } 
        document.getElementById ("training-upload").innerHTML = txt;
*/