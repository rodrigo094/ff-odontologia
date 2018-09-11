
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
		$('.header__pos--menu-mobile--close').addClass('active');
		$('.header__pos--menu-mobile--background').addClass('active');
	});
};

function closeMenuMobile(){
	$('.header__pos--menu-mobile--close').click(function(){
		$('.header__pos--menu-mobile--items').removeClass('active');
		$('.header__pos--menu-mobile--background').removeClass('active');
		$('.header__pos--menu-mobile--close').removeClass('active');
	});
};

$(document).ready(function(){
	jarallaxPlay();
	slickActive();
	jarallaxPlayBottom();
	openMenuMobile();
	closeMenuMobile();
});