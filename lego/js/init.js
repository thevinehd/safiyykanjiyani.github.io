<<<<<<< HEAD
//Hook up the tweet display

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "25 december 2014 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

    $(".tweet").tweet({
        username: "flashuser",
        count: 3,
        loading_text: "loading tweets..."
    });

});	
=======
//Hook up the tweet display

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "25 december 2014 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

    $(".tweet").tweet({
        username: "flashuser",
        count: 3,
        loading_text: "loading tweets..."
    });

});	
>>>>>>> e56cca6c516140b4c0097e8f7db966b2a9e19a59
