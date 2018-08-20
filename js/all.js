$(document).ready(function () {

	$('.burger-menu').on('click', (function (e) {
		/* Act on the event */
		e.preventDefault();
		$('body').toggleClass('menu-show');
	}));

});