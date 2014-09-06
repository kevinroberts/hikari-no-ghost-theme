(function($) {
	$(document).ready(function() {
		$('.post').fitVids();
		// Disqus comment embedding
		var protocol = 'http://';
		if (window.location.protocol === 'https:') {
			protocol = "https://"
		}
		$('.show-comments').on('click', function() {
			var disqus_shortname = 'thekev';

			// ajax request to load the disqus javascript
			$.ajax({
				type: "GET",
				url: protocol + disqus_shortname + ".disqus.com/embed.js",
				dataType: "script",
				cache: true
			});
			// hide the button once comments load
			$(this).fadeOut();
		});


	});
})(jQuery);
