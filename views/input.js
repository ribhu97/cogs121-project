const arr = [];

$(document).ready(function() {    

    $( "#Training" ).change( () => {
        const fURL  = upload("Training");
        console.log(fURL);
    });
    $( "#Test" ).change( () => {
        const fURL  =  upload("Test");
        console.log(fURL);
    });

    $("#inSub").click( () => {
        console.log("Click works!");
        console.log(arr);
       //uploadAttributes(arr);
    });

    
});

function upload(id){
    const x = document.getElementById(id);
    let txt = "";
    let fileURL = "";
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
                 fileURL  = URL.createObjectURL(file);
        }
    } 
    document.getElementById (id+"-upload").innerHTML = txt;     
    return fileURL;
}

function dragStart(ev) {
    console.log("dragStart");
    // Change the source element's background color to signify drag has started
    ev.currentTarget.style.border = "dashed";
    ev.currentTarget.style.color = "grey";
    // Set the drag's format and data. Use the event target's id for the data 
    ev.dataTransfer.setData("text", ev.target.id);
}
   
function  dragOver(ev) {
    console.log("dragOver");
    ev.preventDefault();
}


function drop(ev) {
    console.log("Drop");
    ev.preventDefault();
    // Get the data, which is the id of the drop target
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).style.margin = "10px;";
    arr.push(data);
    ev.target.appendChild(document.getElementById(data));
    // Clear the drag data cache (for all formats/types)
    ev.dataTransfer.clearData();
}

function uploadAttributes(arr) {
    $.ajax({
        url: 'asldfjalksjdfl;aks/recruiterID',
        type: 'POST', // <-- this is POST, not GET
        data: {
                attr: arr
            },
        success : (data) => {
            console.log("Attribute Post is a sucess")
        }
    });
}
