// $(function () { // wait for document ready
// 	// init
// 	var controller = new ScrollMagic.Controller({
// 		globalSceneOptions: {
// 			triggerHook: 'onLeave'
// 		}
// 	});
//
// 	// get all slides
// 	var slides = document.querySelectorAll("section.panel");
// 	console.log(slides)
// 	// create scene for every slide
// 	for (var i=0; i<slides.length; i++) {
// 		new ScrollMagic.Scene({
// 				triggerElement: slides[i]
// 			})
// 			.setPin(slides[i])
// 			// .addIndicators() // add indicators (requires plugin)
// 			.addTo(controller);
// 	}
// });


// new WOW().init();

// CREATE ANIMATECSS FUNCTION
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

// SMOOTH SCROLLING
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$( document ).ready(function() {
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
	$( '#homeArrow').hover(
		function(e) {
			$(this).animateCss('rubberBand');
		}
	);

});
