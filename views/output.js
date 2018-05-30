
$(document).ready(function(){
	
	// Sets header 
	let compName = localStorage.getItem('compName');
  $( "#compName" ).text(compName);
  let groupName = localStorage.getItem('groupName');
	$( "#group-name" ).text(groupName);
	
	// function that takes in CSV file and converts to JSON format
	$.getJSON("test.json", function(data) {
		console.log(data);
		// Get the counts of the GPAs 
		gpa_counts = [{
				"GPA_range": "3.0-3.1",
				"count": 0
			},
			{
				"GPA_range": "3.1-3.2",
				"count": 0
			},
			{
				"GPA_range": "3.2-3.3",
				"count": 0
			},
			{
				"GPA_range": "3.3-3.4",
				"count": 0
			},
			{
				"GPA_range": "3.4-3.5",
				"count": 0
			},
			{
				"GPA_range": "3.5-3.6",
				"count": 0
			},
			{
				"GPA_range": "3.6-3.7",
				"count": 0
			},
			{
				"GPA_range": "3.7-3.8",
				"count": 0
			},
			{
				"GPA_range": "3.8-3.9",
				"count": 0
			},
			{
				"GPA_range": "4.0+",
				"count": 0
			}
		];
		
		// only do GPAs above 3.0 for now
		for (i in data) {
			// console.log(data[i]['gpa']);
			if (data[i]['num_intern'] > -1) {
				// gpa.push(data[i]['gpa']);
				// numInternships.push(data[i]['num_intern']);
				if (data[i]['gpa'] > 3.0) {
					if (data[i]['gpa'] < 3.1 && data[i]['gpa'] > 3.0) {
						gpa_counts[0].count +=1;
					}
					else if (data[i]['gpa'] < 3.2 && data[i]['gpa'] > 3.1) {
						gpa_counts[1].count +=1;
					}	
					else if (data[i]['gpa'] < 3.3 && data[i]['gpa'] > 3.2) {
						gpa_counts[2].count +=1;
					}
					else if (data[i]['gpa'] < 3.4 && data[i]['gpa'] > 3.3) {
						gpa_counts[3].count +=1;
					}
					else if (data[i]['gpa'] < 3.5 && data[i]['gpa'] > 3.4) {
						gpa_counts[4].count +=1;
					}
					else if (data[i]['gpa'] < 3.6 && data[i]['gpa'] > 3.5) {
						gpa_counts[5].count +=1;
					}
					else if (data[i]['gpa'] < 3.7 && data[i]['gpa'] > 3.6) {
						gpa_counts[6].count +=1;
					}
					else if (data[i]['gpa'] < 3.8 && data[i]['gpa'] > 3.7) {
						gpa_counts[7].count +=1;

					}
					else if (data[i]['gpa'] < 3.9 && data[i]['gpa'] > 3.8) {
						gpa_counts[8].count +=1;
					}
					else {
						gpa_counts[9].count +=1;

					}
				}
			}
		}
		 
		 var convertedData = [];
		 gpa_counts.forEach(function(item){
				 convertedData.push([item.GPA_range, item.count]);
		 });
				 
		 var chart = c3.generate({
			 	 bindto: '#chart',
				 data: {
						 columns: convertedData,
						 type: 'bar'
				 },
				 axis: {
								x: {
										label: 'GPA Range',
								},
								y: {
										label: 'Number of Candidates'
								}
					},
					size: {
						width: 640
					},
					title: {
						show: false,
						text: 'My Title',
						position: 'top-center'   // top-left, top-center and top-right

					}
		 });


		//  Create chart for Number of internships
		internship_counts = [{
				"Num_internships": "0",
				"count": 0
			},
			{
				"Num_internships": "1",
				"count": 0
			},
			{
				"Num_internships": "2",
				"count": 0
			},
			{
				"Num_internships": "3",
				"count": 0
			},
			{
				"Num_internships": "4",
				"count": 0
			},
			{
				"Num_internships": "5",
				"count": 0
			}
		]

		for (i in data) {
			// console.log(data[i]['gpa']);
			if (data[i]['num_intern'] > -1) {
				if (data[i]['num_intern'] == 0) {
					internship_counts[0].count += 1;
				}
				else if (data[i]['num_intern'] == 1) {
					internship_counts[1].count += 1;
				}
				else if (data[i]['num_intern'] == 2) {
					internship_counts[2].count += 1;
				}
				else if (data[i]['num_intern'] == 3) {
					internship_counts[3].count += 1;
				}
				else if (data[i]['num_intern'] == 4) {
					internship_counts[4].count += 1;
				}
				else {
					internship_counts[5].count += 1;
				}
			}
		}

		var dataSet = [];
		 internship_counts.forEach(function(item){
				 dataSet.push([item.Num_internships, item.count]);
		 });

		var chart = c3.generate({
			bindto: '#internship-chart',
			data: {
					columns: dataSet,
					type: 'bar'
			},
			axis: {
							x: {
									label: 'Number of internships',
							},
							y: {
									label: 'Number of Candidates'
							}
				},
				size: {
					width: 640
				},
				title: {
					show: false,
					text: 'My Title',
					position: 'top-center'   // top-left, top-center and top-right

				}
 		});

	});



  $('#show').click( () => {
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
