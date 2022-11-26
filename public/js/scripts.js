
/* =========================================
            Preloader
============================================ */
$(window).on('load', function () {
	// makes sure that whole site is loaded
	$('#preloader--gif, #preloader').fadeOut(3000, function () {});
	// $('#preloader--gif, #preloader').remove();
	// console.log('where is preloader?')
	// $('#preloader').removeAttr('style').hide();
});


/* $(function () {
	const preloader = document.getElementById('preloader');
	const gif = document.getElementById('preloader-gif');

	preloader.style.display = 'none';
	gif.style.display = 'none';
});
 */
/* =========================================
            Simple-Scroll-Spy
============================================ */
/* window.onload = function () {
	scrollSpy('#navbar-links-list', {
		sectionClass: '.scrollspy',
		menuActiveTarget: '.navbar-links-link',
		offset: 100,
	});
}; */

/* =========================================
            Progress Bars
============================================ */

/* $(function () {
	$('#progress-elements').waypoint(
		function () {
			$('.progress-bar').each(function () {
				$(this).animate(
					{
						width: $(this).attr('aria-valuenow') + '%',
					},
					1500
				);
			});

			this.destroy();
		},
		{
			offset: '100%',
		}
	);
}); */