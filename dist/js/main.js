//*MENU CONTROLL FUNCTION**//
$(function() {
    var btn  = $('.menu').find('.menu-btn'),
        menu = $('.menu').find('.menu-list'),
        item = menu.find('.menu-item');

        $(document).mouseup(function(e){

      		if (!menu.is(e.target)
      		    && menu.has(e.target).length === 0) {
      			menu.removeClass('active');
      		}
            else {
                item.click(function() {
                 menu.removeClass('active');
                });
            }

        btn.click(function() {
            if (menu.hasClass('active')) {
                menu.removeClass('active')
            }
            else (
                menu.addClass('active')
            )
        });
  	});
});

//*SECTION PORTFOLIO SLICK SLIDER*//
$(function() {
    $('.portfolio-container').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        arrows: false,
        responsive: [
               {
                   breakpoint: 1000,
                   settings: {
                       rows: 1,
                       slidesToScroll: 1,
                       slidesToShow: 1,
                       dots: false
                   }
               },
               {
                   breakpoint: 480,
                   settings: {
                       rows: 1,
                       slidesToScroll: 1,
                       slidesToShow: 1,
                       dots: false
                   }
               }
           ]
  });
    $('[data-action]').click(function() {
            var target = $(this).attr('data-action');
            if (target == 'prev') {
                $('.portfolio-container').slick('prev');
            }
            else  {
                $('.portfolio-container').slick('next');
            }
    });
});

//**SCROLL DOWN BUTTON**//
!function($){
   $(document).on('click', 'a[href^=#]', function () {
        $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
        return false;
    });
}(jQuery);
