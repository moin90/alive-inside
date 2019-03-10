$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1000);    

    $('a').smoothScroll({
        speed: 600
    });

    $(window).resize(function () {
        if($(window).width() < 500) {
            $('.hvr-grow').removeClass('hvr-grow');
        }
    });

});
