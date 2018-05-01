$(document).ready(function(){
  $('#ModelButton').click(function(){
<<<<<<< HEAD
	  console.log('clicked');
  	$.get('localhost:3000/fakeDatabase/Model1',function(data){
=======
  	$.get('output',function(data){
>>>>>>> 924cc86f95e37036a9b171c6b215e77a4161ca0f
  			console.log('Got from Server - Client Side!');
  			$('#result-1').html(data.attribute1);
  			$('#result-2').html(data.attribute2);
  			$('#result-3').html(data.attribute3);
  		});
	
	});
});