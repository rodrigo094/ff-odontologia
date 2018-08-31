
import $ from 'jquery'
import jQuery from 'jquery'

window.$ = $
window.jQuery = jQuery

function jarallaxPlay() {
	$('.jarallax').jarallax({
	    speed: 0.2
	});
};

function slickActive() {
	$(".content__middle--instagram ul").slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 5000
	});
};

$(document).ready(function(){
	jarallaxPlay();
	slickActive();
});