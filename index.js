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
            $('.js--nav').animate({paddingBottom: "6vw"},500);
        } else {
            $('.js--nav').animate({paddingBottom: "1vw"},500);
        }
    });
    
    $(window).resize(function(){
        if($(document).width()>768){
            // 桌機模式
            $('.js--nav__link').css("display", "block");   // 手機模式按 menu 會讓 link 隱藏，桌機模式讓他變成block
            $('.js--nav').css("paddingBottom", "0");       // 手機模式按 menu 會讓 padding-bottom 變成 1vw，桌機模式回復 0vw
            $('.js--nav-icon i').addClass('ion-md-menu');  // 手機模式 default
            $('.js--nav-icon i').removeClass('ion-md-close-circle-outline');
        } else if($('.js--nav-icon i').hasClass('ion-md-menu')){
            // 手機模式 default
            $('.js--nav__link').css("display", "none");     
            $('.js--nav').css("paddingBottom", "1vw");
        }
    });

});