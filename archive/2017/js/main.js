// CREATE ANIMATECSS FUNCTION
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


$( document ).ready(function() {
	// SMOOTH SCROLLING
	var hashTagActive = "";
		 $(".scroll").on("click touchstart" , function (event) {
				 if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
						 event.preventDefault();
						 //calculate destination place
						 var dest = 0;
						 if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
								 dest = $(document).height() - $(window).height();
						 } else {
								 dest = $(this.hash).offset().top;
						 }
						 //go to destination
						 $('html,body').animate({
								 scrollTop: dest
						 }, 1000, 'swing');
						 hashTagActive = this.hash;
				 }
		 });

	// HIDE ALL ANIMATED ELEMENTS
	$('.animated').css('opacity', '0')

// SECTION ONE
	var sectionOne = new Waypoint({
	  element: document.getElementById('sectionOne'),
	  handler: function(direction) {
			if (direction == 'down'){
				$('.animated-sectionOne').css('opacity', '1')
				$('.animated-sectionOne').animateCss('fadeInUp')
			}
			this.destroy()
	  }
	})

// SECTION TWO
	var sectionTwo = new Waypoint({
	  element: document.getElementById('sectionTwo'),
	  handler: function(direction) {
			if (direction == 'down'){
				$('.animated-sectionTwo').css('opacity', '1')
				$('.animated-sectionTwo').animateCss('fadeInUp')
			}
			this.destroy()
	  },
		offset: '10%'
	})

	// SECTION THREE
		var sectionThree = new Waypoint({
		  element: document.getElementById('sectionThree'),
		  handler: function(direction) {
				if (direction == 'down'){
					$('.animated-sectionThree').css('opacity', '1')
					$('.animated-sectionThree').animateCss('fadeInUp')
				}
				this.destroy()
		  },
			offset: '10%'
		})

// ARROW
	$( '#homeArrow').mouseenter(
		function(e) {
			$(this).animateCss('shakeUp');
		}
	);

// Profile bubble
// $( '#profile-front').css('')
$( '#profile-front').mouseenter(
	function(e) {
		$('#profile-back').css('opacity', '1')
		$('#profile-back').animateCss('zoomIn');
	}
);
$( '#profile-front').mouseleave(
	function(e) {
		$('#profile-back').animateCss('zoomOut');
		$('#profile-back').css('opacity', '0')
	}
);
});
