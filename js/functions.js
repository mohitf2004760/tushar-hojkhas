/**
 * Created by moksh on 9/5/16.
 */

$(document).ready(function() {
    //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    //var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    //$("#heightdoc").height($(window).height());
   // $("#heightdoc").width(window.screen.availWidth);

    //for full size background of (window-url bar)

    var bg = jQuery("#bg1");
    jQuery(window).resize("resizeBackground");
    function resizeBackground() {
        bg.height(jQuery(window).height()-60);
    }
    resizeBackground();

    //for auto moving background image

    function beeRight() {
        $("#b").animate({left: "+=50"}, 15000, "swing");
    }

    beeRight();

    $('.bxslider').bxSlider({
        slideWidth:250,
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 10,
        touchEnabled:true,
        responsive:false
    });

    $('.bx-wrapper').css( "maxWidth", "100%" );
    $('.bx-viewport').css("boxShadow","none");
    $('.bx-viewport').css("border", "none");


$("#right-menu-button-id").click(function(e) {
    e.stopPropagation();
    $("#signup-popup").css({
        top: $(this).offset().top + 20,
        left: $(this).offset().left - 540
    });
    $("#signup-popup").show();
    return false;
});

$("#signup-popup").hover(
    function() {
        $(this).data("hovered", true);
    }, function() {
        $(this).data("hovered", false);
    }
);

$("html").click(function(e) {
    e.stopPropagation();
    if ($("#signup-popup").data("hovered") == false) {
        $("#signup-popup").hide();
    }
});
});