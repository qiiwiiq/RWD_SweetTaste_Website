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
        $('#mobile-main-link').slideToggle(500);
        $('.js--nav-icon i').toggleClass('ion-md-menu');
        $('.js--nav-icon i').toggleClass('ion-md-close-circle-outline');
    });

});