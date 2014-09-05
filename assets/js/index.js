(function ($) {
  $(document).ready(function () {
    $('.post').fitVids();
	
	// Requires jQuery of course.

	    $('.show-comments').on('click', function(){
	          var disqus_shortname = 'thekev';

	          // ajax request to load the disqus javascript
	          $.ajax({
	                  type: "GET",
	                  url: "http://" + disqus_shortname + ".disqus.com/embed.js",
	                  dataType: "script",
	                  cache: true
	          });
	          // hide the button once comments load
	          $(this).fadeOut();
	    });

	
  });
})(jQuery);
