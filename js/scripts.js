$(document).ready(function() {
  	
	// Get Weather Form
	$('button').click(function() {
		
		// remove class
		$('body').removeClass('');
		
		// Gets & stores entered zipcode
		var zip = $('input').val();
		console.log(zip);
		
		// Get the Weather
		$.simpleWeather({
		
			// Minimum properties to set
			zipcode: zip,
			unit: 'f',
			
			// Method to display weather
			success: function(weather) {
				
				// Concatenate HTML code & weather variables.
				// Put into one big'ol collection
				html = '<h1>'+weather.temp +'&deg;'+weather.units.temp+'</h1>';
				html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
				html += '<img src="img/' + weather.code + '.png"/>';
				
				//html += $('body').addClass('color'+ weather.code);
				
				// <img src="img/30.png />
				
				//html += '<li class="currently">'+weather.currently+'</li>';
				//html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
				
				// Write collection to page with html() method
				// Note: difference between html() method vs. html option 
				$("#weather").html(html);
			},
	
			// Method 
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
			}
	
		});
		// end getting Weather
		
	});


  
});	
