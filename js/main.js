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


new WOW().init();
