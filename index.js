$(document).ready(function(){

    /** sticky navigation */ 
    $('.js--section-intro').waypoint(function(direction){
        
        if(direction == 'down'){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '220px'
    });

    /** Cart Animation */
    $('.js--cart').hover(function(){
        $('.js--cart').addClass('animated infinite swing');
    }, function(){
        $('.js--cart').removeClass('animated infinite swing');
    });

    /** Mobile nav */
    $('.js--nav-icon').click(function(){
        $('.nav__link').slideToggle(500);
        $('.js--nav-icon i').toggleClass('ion-md-menu');
        $('.js--nav-icon i').toggleClass('ion-md-close-circle-outline');
        
        if($('.js--nav-icon i').hasClass('ion-md-close-circle-outline')){
            $('.nav').animate({paddingBottom: "6vw"},500);
        } else {
            $('.nav').animate({paddingBottom: "2vw"},500);
        }
    });

});