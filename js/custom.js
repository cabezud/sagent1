$(document).ready(function() {

	//Equal height columns	
	var equalHeightColumns = function() {
		var leftCol = $('.left').height();
		var rightCol = $('.right').height();
		if ( leftCol > rightCol ) {
			$('.right, .left').height(leftCol);
		} else {
			$('.right, .left').height(rightCol);
		}
	};
	$( window ).bind('orientationchange resize', function() {
	    equalHeightColumns();
	});
	equalHeightColumns();

	//Inner tile
	var innerTileWidth = $('.inner-tile').width();

	//Square bullet list styling
	$('#services-financial, #services-tax, #services-consulting').find('li').each(function(){
		var serviceItem = $(this).text().split('–');
		$(this).html('<div class="square-bullet"></div><h4>' + serviceItem[0] + '</h4>' + serviceItem[1] );
	});
	$('#vision li').each(function(){
		var visionItem = $(this).text();
		$(this).html('<div class="square-bullet"></div><h4>' + visionItem + '</h4>');
	});

	//Contact add scrolling link to offices click
	
	$(".office").click(function(){
		var meOffset = $("#contact-us").offset().top;
		console.log(meOffset);
        $('html, body').animate({ scrollTop:meOffset }, 300);
        //alert('work please');
      });

	//Contact form
	$(function() {
	    // Get the form.
	    var form = $('#ajax-contact');
	    // Get the messages div.
	    var formMessages = $('#form-messages');
	    // TODO: The rest of the code will go here...
	});
	// Set up an event listener for the contact form.
	$(form).submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();
	
		// Serialize the form data.
		var formData = $(form).serialize();
		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		})
		.done(function(response) {
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Set the message text.
		    $(formMessages).text(response);

		    // Clear the form.
		    $('#name').val('');
		    $('#email').val('');
		    $('#phone').val('');
		    $('#message').val('');
		})
		.fail(function(data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Set the message text.
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		});
	});


});


