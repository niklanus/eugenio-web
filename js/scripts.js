/*var navItems = {
		names: ['1ra Consulta', 'Estética', 'Reparadora', 'Testimonios', 'Dr. Chouhy', 'Contacto'],
		links: ['#anchor-consulta', '#anchor-estetica', '#anchor-reparadora', '#anchor-testimonios', '#anchor-chouhy', '#anchor-contacto']
	};

function createNav(){
	for (var i = 0; i < navItems["names"].length; i++) {
		$(".nav-items").append('<li><a href="'+ navItems.links[i] +'" class="waves-button waves-effect">' + navItems.names[i] + '</a></li>');
	}
}*/

$(window).on("load resize",function(){
	var vw = $(window).width();
	var vh = $(window).height();
	var offset = $('header').height() + $('nav').height();
	var textHeight = $('.consulta .text').outerHeight();
	$('section.intro').height(vh);
	$('.intro-clear').height(vh - offset);
	$('.consulta .slider').height(textHeight);

	if (vw <= 1023) {
		$("nav").addClass('nav-mobile');
		$('.nav-items').addClass('hidden');
	} else {
		$("nav").removeClass('nav-mobile');
	}
});

$( document ).ready(function() {
	$('.smooth').smoothScroll({
		speed: 800
	});

	$('.smooth-offset').smoothScroll({
		speed: 800,
		offset: -40
	});

	$('.slick').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1500,
		dots: false,
		arrows: false,
		pauseOnHover: false
	});

	$('.consulta-slider').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 1500,
		dots: false,
		arrows: false,
		fade: true,
		pauseOnHover: false
	});

	$('.cirugia-carousel').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 750,
		dots: false,
		arrows: true,
		pauseOnHover: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button type="button" class="slick-prev"><i class="arrow_carrot-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
		}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	// createNav();
});

$('.nav-trigger').on("click", function(){
	$('.nav-items').toggleClass('hidden');
});

$('.nav-items a').on("click", function(){
	$('.nav-items').toggleClass('hidden');
});

var navWaypoint1 = $('body').waypoint(function(direction) {
	$('body').toggleClass("nav-ready");
}, {
  offset: -400
});

var navWaypoint2 = $('#anchor-consulta').waypoint(function(direction) {
	$('body').toggleClass("nav-sticky");
}, {
  offset: 100
});

var myLatlng = new google.maps.LatLng(-34.5883635,-58.3825816);
var myLatlngCenter = new google.maps.LatLng(-34.5890598,-58.3870188);
var mapOptions = {
	center: myLatlngCenter,
	zoom: 16,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true
};
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hotel Bristol'
});

Waves.displayEffect();