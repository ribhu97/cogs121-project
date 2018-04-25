$(document).ready(function(){
  $('#ModelButton').click(function(){
  	$.get('localhost:3000/views/fakeDatabase/Model1',function(data){
  			console.log('Got from Server - Client Side!');
  			$('#result-1').html(data.attribute1);
  			$('#result-2').html(data.attribute2);
  			$('#result-3').html(data.attribute3);
  		});
	
	});
});