$(document).ready(function(){
  $('#show').click( () => {
		console.log('JSing!');
		$.get('/api/view',function(data){
				console.log('The Ajax in output works');
				const result1 = data['students'][0];
				const result2 = data['students'][4];
				const result3 = data['students'][10];
				a = getData(result1);
				b = getData(result2);
				c = getData(result3);
				createCard(a[0],a[1],a[2],a[3]);	
				createCard(b[0],b[1],b[2],b[3]);
				createCard(c[0],c[1],c[2],c[3]);
				});
			});
	 });

	 function getData(result1) {
		const fname1 = result1['fname'];
		const lname1 = result1['lname'];
		const u1 = result1["univ"];
		const g1 = result1["gpa"];
		return [fname1,lname1,u1,g1]
	}

	 function createCard (f,l,u,g) {
		$("#candidates").append("<div class = 'card'><div class = 'card-header'>"+f+" "+l+"</div><div class = 'card-content'>"+"<strong>College: </strong>"+u+ "<br>" +"<strong>GPA: </strong>"+g+"</div><div>");
	 }


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
	