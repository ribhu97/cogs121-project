$(document).ready(function(){
  $('#show').click(function(){
	console.log('JSing!');
	var txt1 = "<div class = 'card'> <div class= 'content' Lorem ipsum dolor sit amet, consectetur adipiscing elitPhasellus nec iaculis mauris. <a>@bulmaio</a>.<a >#css</a> <a >#responsive</a><br></div></div></div>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    $("body").append(txt1, txt2, txt3);      // Append the new elements 

	});





		//GET
		// $.ajax({
    //   url: '/api/view',
    //   contentType: 'application/json',
    //   success: function(response) {
		// 		var data = response.students;
		// 		console.log(data);
		// 		// Loop and append
		// 		$('#result-1').html(data.fname);
  	// 		$('#result-2').html(data.lname);
  	// 		$('#result-3').html(data.email);
    //   }
		// });
  	$.get('/api/view',function(data){
  			console.log('Got from Server - Client Side!');
  			// $('#result-1').html(data.attribute1);
  			// $('#result-2').html(data.attribute2);
  			// $('#result-3').html(data.attribute3);
  		});
	
	 });

});