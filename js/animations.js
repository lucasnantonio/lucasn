 $(document).ready(function() {
     // COLOCA TAGS NOS CARDS //
     $(".industrial").append(
         '<span class="tag">industrial</span>'
     );

     $(".ux").append(
         '<span class="tag">ux</span>'
     );
     $(".graphic").append(
         '<span class="tag">graphic</span>'
     );
     $(".startup").append(
         '<span class="tag">startup</span>'
     );
    $(".service").append(
    '<span class="tag">service</span>'
     );

     // ESCONDE CAMADA DE CONTENT NO INÍCIO
     $(".content-wrapper", this).hide();

     // ANIMAÇÃO DO ABOUT
     $(".plus-button").click(function() {
         $(".hidden").animate({
             height: $(".hidden").get(0).scrollHeight
         }, 1000);
         $(".plus-button").delay(800).hide(300).animate({}, 200);
         $(".shown p").delay(800).hide(300);
     });

     // MOSTRA CAMADA DE CONTENT
     $(".old-project").hover(
         function() {
             $(".content-wrapper", this).fadeIn(300)
         },
         function() {
             $(".content-wrapper", this).fadeOut(300)
         });

     //FILTROS

     $(".menu-tag").click(function() {
     	$(".menu-tag").removeClass("tag__black").addClass("tag__grey");
         var selected_tag = $(this).html();
         $('.old-project').animate({opacity:.1});
         $('.' + selected_tag).parent().parent().animate({opacity:1});
         $(this).removeClass("tag__grey").addClass('tag__black');
         if(selected_tag=='all'){
         	$('.old-project').animate({opacity:1});
         }

     });
 });
