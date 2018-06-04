/**
 * File contains code to display the users profile which is their past models and the naming
 * of their new model.
 */

$(document).ready(function(){
    let compName = localStorage.getItem('compName');
    let name = localStorage.getItem('name');

    $("#compName").text(compName);
    let welcomeText = document.getElementById('welcome');
    welcomeText.textContent += name;
});


function toggleModal(){
    let modal = document.getElementById("create-group");
    modal.classList.toggle("is-active")    
};
//pushes the name of the new modal
function submitGroup(){
    let groupName = document.getElementById('groupName').value;
    localStorage.setItem("groupName", groupName);
    $.ajax({
        method:'POST',
        url: '/api/group/add',
        data: {
            name: groupName
        },
        success: () => {
            console.log('data pushed');
        }
    });
    window.location.href='input.html';
};