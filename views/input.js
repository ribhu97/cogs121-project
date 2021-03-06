/**
 * File does the core functionality of the user input for their model. The drag and drop feature is 
 * implemented here. It also contains the file-to-database functionality. Lastly this file also contains
 * the ajax call to send all the user's input to the database.
 */

const arr = [];
$(document).ready(function() { 
// Get UI data
 let compName = localStorage.getItem('compName');
 $( "#compName" ).text(compName);
 let groupName = localStorage.getItem('groupName');
 $( "#group-name" ).text(groupName);
 
 $( "#Training" ).change( () => {
    upload("Training");
 });

 $( "#Test" ).change( () => {
    upload("Test");
 });
 
 $("#inSub").click( () => {
    console.log(arr);
    uploadAttributes(arr);
 });

 
});
//creates upload signifier for UI
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
function dragStart(ev) {
 console.log("dragStart");
 // Set the drag's format and data. Use the event target's id for the data 
 ev.dataTransfer.setData("text", ev.target.id);
}
 
function dragOver(ev) {
 console.log("dragOver");
 ev.preventDefault();
}
function append(e) {
 console.log(e);
 let attr = e.textContent;
 // console.log(e);
 // id of target div to append to is chosen
 let targetDiv = document.getElementById("chosen");
 // let deleteButton = document.getElementById("removeAttr");
 // console.log(targetDiv);
 arr.push(attr);
 // e.appendChild(deleteButton);
 // change onclick function to removeAttr
 e.setAttribute('onclick', 'removeAttr(this)');
 targetDiv.appendChild(e);
 // targetDiv.appendChild(deleteButton);
}
function removeAttr(e) {
    e.setAttribute('onclick', 'append(this)');
    let indexToRemove = arr.indexOf(e.textContent);
    console.log(indexToRemove);
    arr.splice(indexToRemove,1);
    // arr.remove(e.textContent);
    let targetDiv = document.getElementById("chosen");
    targetDiv.removeChild(e);
    console.log(e.dataset.origin);
    let originDiv = document.getElementById(e.dataset.origin);
    originDiv.appendChild(e)
    // Append to original position?
    // reset its onclick function to append
};
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
// post attributes to database
function uploadAttributes(arr) {
 $.ajax({
    url: '/api/recruiter/edit',
    type: 'PUT', 
    data: { attr : arr },
    datatype: 'json',
    success : (data) => {
    console.log("Attribute Post is a sucess")
    }
});
}