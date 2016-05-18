/**
 * Created by moksh on 9/5/16.
 */

$(document).ready(function() {

    var bg = jQuery("#bg1");
    var bgsignup = jQuery("#bg2");
    jQuery(window).resize("resizeBackground");
    function resizeBackground() {
        bg.height(jQuery(window).height() -60);
    }
    resizeBackground();


    //for full size background of signup page(window - url bar)


    jQuery(window).resize("resizeBackground");
    function resizeBackground1() {
        bgsignup.height(jQuery(window).height() );
    }
    resizeBackground1();

//slider for testimonial

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
    $("#signup-popup").show();
    return false;
});

/*
$("#signup-popup").hover(
    function() {
        $(this).data("hovered", true);
    }, function() {
        $(this).data("hovered", false);
    }
);
*/

$("body").click(function(e) {
    //e.stopPropagation();
    //if ($("#signup-popup").data("hovered") == false) {
    $("#signup-popup").hide();
    //}
});

$("#signup-popup").click(function(e){
    e.stopPropagation();
    });
});