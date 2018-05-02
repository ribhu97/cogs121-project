$(document).ready(function(){
  $('#show').click(function(){
	console.log('JSing!');
	var txt1 = "<div class = 'card'> <div class= 'content' Lorem ipsum dolor sit amet, consectetur adipiscing elitPhasellus nec iaculis mauris. <a>@bulmaio</a>.<a >#css</a> <a >#responsive</a><br></div></div></div>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    $("body").append(txt1, txt2, txt3);      // Append the new elements 

	});
	







  
	/*
  	$.get('http://localhost:3000/models',function(data){
  			console.log('Got from Server - Client Side!');
  			$('#result-1').html("Feature 1 is: " + data.attribute1);
  			$('#result-2').html("Feature 2 is: " + data.attribute2);
			  $('#result-3').html("Feature 3 is: " + data.attribute3);
			  
			
  		});
	
	*/ 

});