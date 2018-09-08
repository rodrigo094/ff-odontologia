
import $ from 'jquery'
import jQuery from 'jquery'

window.$ = $
window.jQuery = jQuery

function jarallaxPlay() {
	$('.jarallax').jarallax({
	    speed: 0.2
	});
};

function jarallaxPlayBottom() {
	$('.content__parallax .jarallax').jarallax({
	    speed: 0.2
	});
};

function slickActive() {
	$(".content__middle--instagram ul").slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  autoplay: true,
	  arrows: false,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
};

function openMenuMobile(){
	$('.header__menu-mobile--hamburger').click(function(){
		$('.header__pos--menu-mobile--items').addClass('active');
	});
};

$(document).ready(function(){
	jarallaxPlay();
	slickActive();
	jarallaxPlayBottom();
	openMenuMobile();
});