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


});


//Contact form
$(function() {
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');

    $(form).submit(function(e) {
	    e.preventDefault();
	    $('.submit').css("visibility","hidden");
	    $(".throbber").show();
		var formData = $(form).serialize();
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData, 
		})
		.done(function(response) {
		    $(formMessages).removeClass('alert-danger');
		    $(formMessages).addClass('alert-success');
		    $('.alert-message', formMessages).text(response);
		    $(formMessages).fadeIn();
		    $('#name').val('');
		    $('#email').val('');
		    $('#phone').val('');
		    $('#message').val('');
		    $(form).css("visibility","hidden");
		    $(".throbber").fadeOut();
		})
		.fail(function(data) {
		    $(formMessages).removeClass('alert-success');
		    $(formMessages).addClass('alert-danger');
		    if (data.responseText !== '') {
		        $('.alert-message', formMessages).text(data.responseText);
		    } else {
		        $('.alert-message', formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		    //$(formMessages).animate({visibility: 'visible'},2000);
		    $(formMessages).show();
		    $(".throbber").fadeOut();
		    $('.submit').css("visibility","visible");
		});
	});

});
/*
$(function(){
    $(".throbber").hide();
    $.ajaxStart(function(){
        $(".throbber").fadeIn();
    });
    $.ajaxStop(function(){
        $(".throbber").fadeOut();
    });
});
*/