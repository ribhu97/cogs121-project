/**
 * File contains the GET ajax requests from the database to get the necessary data for the data
 * visualization and the model output. Also contains the S3 (visualization library) code to render the 
 * charts. Also contains the functions to dynamically create the HTML elements to display the models results
 */

$(document).ready(function(){
	
	// Sets header 
  let compName = localStorage.getItem('compName');
  $( "#compName" ).text(compName);
  let groupName = localStorage.getItem('groupName');
   $( "#group-name" ).text(groupName);
	
	// function that takes in CSV file and converts to JSON format
	$.get('api/student/view' ,function(data) {
		data = data["students"];
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
		//create visualization for GPA distribtuion
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
						width: 400
					},
					title: {
						show: false,
						text: 'GPA Distribution',
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
		 // Create visualization for experience distribution
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
					width: 400
				},
				title: {
					show: false,
					text: 'Experience Distribution',
					position: 'top-center'   // top-left, top-center and top-right

				}
 		});

	});
});
