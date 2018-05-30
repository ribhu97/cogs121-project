$(document).ready(function(){
    let compName = localStorage.getItem('compName');
    let name = localStorage.getItem('name');
    console.log(compName);
    console.log(name);
    $( "#compName" ).text(compName);
    let welcomeText = document.getElementById('welcome');
    welcomeText.textContent += name;
});


function toggleModal(){
    console.log("Opening Modal");
    let modal = document.getElementById("create-group");
    modal.classList.toggle("is-active")    
};

function submitGroup(){
    let groupName = document.getElementById('groupName').value;
    localStorage.setItem("groupName", groupName);
    window.location.href='input.html';
};