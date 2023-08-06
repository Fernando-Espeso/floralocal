/*
 * Global Scripts
 */
//Lazy Loading for images
document.addEventListener("DOMContentLoaded", function(){
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if("IntersectionObserver" in window){
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage){
      lazyImageObserver.observe(lazyImage);
    });
  }
});


/* RANDMON LOCATION */
$(document).ready(function(){
$('.home_img img').each(function( index ) {
  $(this).css({
    left : Math.random() * ($('.home_img').width() - $(this).width()),
    top : Math.random() * ($('.home_img').height() - $(this).height())
  });
});


/* GENERAL CLICKS */
$('.show_info').click(function(){
  $(".fir").toggle();
  $(".sec").toggle();
  $(".project_info").toggle();

});

$('.open').click(function() {
  $("#bag").toggle();
  $(".open").toggleClass("active");

  if ($('.open').hasClass('active')) {
    $(".open span").html("-");
  } else {
    $(".open span").html("+");
  }
});




/* GENERAL CLICKS */
 var elems = $(".home_img, .footer_randmon");
	if (elems.length) {
  	var keep = Math.floor(Math.random() * elems.length);
  	for (var i = 0; i < elems.length; ++i) {
    if (i !== keep) {
      $(elems[i]).hide();
    }
  }
}

  /* GENERAL CLICKS */
 var elemse = $(".footer_randmon2");
	if (elems.length) {
  	var keepe = Math.floor(Math.random() * elemse.length);
  	for (var i = 0; i < elemse.length; ++i) {
    if (i !== keepe) {
      $(elemse[i]).hide();
    }
  }
}

function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
});

/* SLIDER */
$(document).ready(function(){"use strict";
var slideCount = $('.slideCount');
var slickSlide = $('.slider');

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return (ua.indexOf("safari/") > -1 && ua.indexOf("chrome") < 0);
};
const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const isTablet = () => {
  const ua = navigator.userAgent;
  return /Tablet|iPad/i.test(ua);
}

slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $(this).parent().find('.slideCount').html('<span class="slideCountItem">' + i + '</span> ' + ' / ' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
});

     /*SLIDERS*/
     $('.slider').each(function(){
        var slickInduvidual = $(this);
        slickInduvidual.slick({
        	lazyLoad: 'ondemand',
        	slide: '.slide',
     		autoplay: false,
       		autoplaySpeed: 0,
     		dots: false,
     		infinite: true,
     		speed: 0,
     		slidesToShow: 1,
     		arrows: true,
     		draggable: false,
        	accessibility: true,
       		swipe: true,
        	touchMove: true,
        	responsive: [
               {
                  breakpoint: 768,
                  settings: {
                    draggable: true,
                    arrows: false,
                    speed: 500,
                  }
               }
            ]
          });

     })





     $('.slider').css('height', `calc(100vh - ${$('header').outerHeight()}px - 50px)`)
     $('.slider img').each(function(){
       $(this).css('height', `calc(100vh - ${$('header').outerHeight()}px - 50px)`)
     })
     $('.slider video').each(function(){
         $(this).css('height', `calc(100vh - ${$('header').outerHeight()}px - 50px)`)
       })

     window.addEventListener('resize', () => {
       var height = $('header').outerHeight()
     	$('.slider').css('height', `calc(100vh - ${height}px - 50px)`)
       $('.slider img').each(function(){
         $(this).css('height', `calc(100vh - ${height}px - 50px)`)
       })
       $('.slider video').each(function(){
         $(this).css('height', `calc(100vh - ${height}px - 50px)`)
       })
     })


});



/* GENERAL */
$(document).ready(function() {
 	const setProductTemplateHeight = () => {
         if(window.matchMedia('(min-width: 1024px)').matches){
             $('#main-product').css('height', `calc(100vh - ${$('header').outerHeight()}px)`)
         }
     }

	 setProductTemplateHeight()
     window.addEventListener('resize', () => {
       setProductTemplateHeight()
     })
});
