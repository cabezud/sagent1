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
	})

});


