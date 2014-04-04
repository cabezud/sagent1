$(document).ready(function() {
	  //STICKY FOOTER
  var makeFooterSticky = function() {
      $('#push').css('height','');
      var vwptHeight = $(window).height();
      var bodyHeight = $('.body-wrapper').outerHeight();
      var footerHeight = $('.footer').outerHeight();
      var newPushHeight = vwptHeight - bodyHeight - footerHeight;
      if (newPushHeight > 0) {
          $('#push').css('height',newPushHeight);    
      };
      console.log('vwpt / body / footer = new push height: '+vwptHeight+"/"+bodyHeight+"/"+footerHeight+"="+newPushHeight);
  };
  makeFooterSticky();
  $( window ).bind('orientationchange resize', function() {
    makeFooterSticky();
  });
	
	var equalHeightColumns = function() {
		var leftCol = $('.left').height();
		var rightCol = $('.right').height();
		if ( leftCol > rightCol ) {
			$('.right').height(leftCol);
		} else {
			$('.left').height(rightCol);
		}
	};
	$( window ).bind('orientationchange resize', function() {
	    equalHeightColumns();
	});
	equalHeightColumns();

	var innerTileWidth = $('.inner-tile').width();
	$('.inner-tile').height( innerTileWidth );
});