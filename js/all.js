$(document).ready(function() {

	$('.showmenu').on('click', (function(e) {
		/* Act on the event */
		e.preventDefault();
		$('body').toggleClass('menu-show');
	}));
	
});