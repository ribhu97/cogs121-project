$(document).ready(function(){
  $('#ModelButton').click(function(){
  	$.get('http://localhost:3000/models',function(data){
  			console.log('Got from Server - Client Side!');
  			$('#result-1').html("Attribute 1 is: " + data.attribute1);
  			$('#result-2').html("Attribute 2 is: " + data.attribute2);
  			$('#result-3').html("Attribute 3 is: " + data.attribute3);
  		});
	
	});
});