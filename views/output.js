$(document).ready(function(){
  $('#ModelButton').click(function(){
		console.log('clicked');
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