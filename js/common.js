$(function() {
$(document).ready(function(){
	// Custom JS
$("body").niceScroll({
	cursorborder: ""
});
$('.close').click(function(){
		$('.navbar-collapse').removeClass('show');
});
$('.submenu').fadeOut();
$('.nav-item', this).click(function(){
	$( '.nav-link', this).toggleClass('active');
	$('.submenu', this).fadeToggle();
});
   // search button

   //opening cart < 768
        $('.services_item', this).click(function(){
    	$('.show', this).toggleClass('showed');

    	$(this).toggleClass('opened');
    });


    	$('.search-field-wrapper').fadeOut();
        $('.search').click(function() {
            $('.search-field-wrapper').fadeToggle(500);
        })
        $('.background_hover-image').hide();
        $('.services_item').mouseleave(function(){
        	$('.hover_title').hide();
    		$('.hover_info').hide();
    		$('.hover_link').hide();	
    		$('.services-img').show();
    	$('.service_image').show();
    	$('.item_title').show();
    	$('.background_hover-image').hide();
        });
     

    $('.services_item', this).mouseenter(function(){
    	$('.hover_title', this).show();
    	$('.hover_info', this).show();
    	$('.hover_link', this).show();
    	$('.services-img').hide();
    	$('.service_image').hide();
    	$('.item_title').hide();
    	$('.background_hover-image').show();
    });
    if($(window).width() < 769){
    $('.services_item').click(function(){
    	$('.image_block').toggleClass('helpermt');
    	$('.hover_info').hide();
    	$('.hover_link').hide();
    	if($('.services_item').hasClass('opened')){
    		$('.hover_info', this).show();
    		$('.hover_link', this).show();
    	}
    	else{
    		$('.hover_info', this).hide();
    		$('.hover_link', this).hide();
    	}
    	
    });

      $('.services_item', this).mouseenter(function(){

    	$('.service_image').show();
    	$('.background_hover-image').hide();
    		$('.hover_title').show();
    		$('.hover_info').show();
    		$('.hover_link').show();	

    });
      }

$(window).scroll(function() {
console.log($(window).scrollTop()+"px");

/*first-vertical*/

 $('.step-00').css({ 'top': (-9 + $(window).scrollTop())*0.5 });
        if ($(window).width() > 767) {
            if ($(window).scrollTop() >= '220') {
                $('.step-00').addClass('stop');
            } else {
                $('.step-00').removeClass('stop');
            }
        }
        if ($(window).width() < 767) {
            if ($(window).scrollTop() >= '190') {
                $('.step-00').addClass('stop');
            } else {
                $('.step-00').removeClass('stop');
            }
        }

    
/*first-horizontal*/


       $('.step-01').css({ 'left': (-30+$(window).scrollTop()*0.5) });
        if ($(window).width() > 767) {
            if ($(window).scrollTop() >= '680') {

                $('.step-01').addClass('stop');
            } else {
                $('.step-01').removeClass('stop');
                
            }
        }
        if ($(window).width() < 769) {
        	$('.step-01').css({ 'left': (170 + $(window).scrollTop()*0.2) });
            if ($(window).scrollTop() >= '1500') {
                $('.step-01').addClass('stop');
            } else {
                $('.step-01').removeClass('stop');
            }
        }

        /*second-vertical*/
        
        	$('.step-02').removeClass('start');
 var scrolled =$('.featured_info').offset().top;
 $('.step-02').css({ 'top': (-9 + ($(window).scrollTop() - scrolled) * 1) });
        if ($(window).width() > 767) {
            if ($(window).scrollTop() >= '1850') {
                $('.step-02').addClass('stop');
            } else {
                $('.step-02').removeClass('stop');
            }
            if($(window).scrollTop() <= '1741'){
            	$('.step-02').addClass('start');
            }
            else{
            	$('.step-02').removeClass('start');
            }
        }
        var scrolledMob = $('.content').offset().top;
        if ($(window).width() < 769) {
        	$('.step-02').css({ 'top': (-9 + ($(window).scrollTop() - scrolledMob) * 0.1) });
            if ($(window).scrollTop() >= '3400') {
                $('.step-02').addClass('stop');
            } else {
                $('.step-02').removeClass('stop');
            }
        }
    
var headerS = $(this).scrollTop();

    if (headerS > 0) {

        $('header').addClass('sticky');

    } else {

        $('header').removeClass('sticky');

    }

if($(window).width() < 769){
	$('.services_item', this).mouseenter(function(){
	$('.service_image').show();
});
}
});
     

});		


    });




