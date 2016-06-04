/**
 * Created by moksh on 9/5/16.
 */

$(document).ready(function() {

    //dont get confused with the names bg1,2,3 have patience and read them slowly. The names may not indicate hierarchy, they are random.

    var bg = jQuery("#bg1");
    var bgsignup = jQuery("#bg2");
    var bgback = jQuery("#bg3");

    jQuery(window).resize("resizeBackground");
    function resizeBackground() {
        bg.height(jQuery(window).height() -60);
    }
    resizeBackground();


    jQuery(window).resize("resizeBackground");
    function resizeBackground2() {
        bgback.height(jQuery(window).height() -60);
    }
    resizeBackground2();


    //for full size background of signup page(window - url bar)


    jQuery(window).resize("resizeBackground");
    function resizeBackground1() {
        bgsignup.height(jQuery(window).height() );
    }
    resizeBackground1();


    $('.img-back').addClass('zout');
    $('.img-back').addClass('anim');



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

    var controller = new ScrollMagic.Controller(),
        vw = $(document).width(),
        ew = $('#bar3').width(),
        tw = (vw / 2) - (ew / 2);
    // Scene Handler
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#bg3",
        duration: 220,
        triggerHook: 'onLeave',
        offset: 520,
        reverse: true
    })
        .setTween("#bar3", {
            left: tw
        })
        .addTo(controller);

    var controller = new ScrollMagic.Controller(),
        vw = $(document).width(),
        ew = $('#bar1').width(),
        tw = (vw / 2) - (ew / 2);
    // Scene Handler
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#bg3",
        duration: 220,
        triggerHook: 'onLeave',
        offset: 520,
        reverse: true
    })
        .setTween("#bar1", {
            right: tw
        })
        .addTo(controller);


    var controller = new ScrollMagic.Controller(),
        vw = $(document).width(),
        ew = $('#bar2').width(),
        tw = (vw / 2) - (ew / 2);
    // Scene Handler
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#bg3",
        duration: 220,
        triggerHook: 'onLeave',
        offset: 580,
        reverse: true
    })
        .setTween("#bar2", {
            right: tw
        })
        .addTo(controller);

    //bar4
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#bg3",
        duration: 300,
        triggerHook: 'onLeave',
        offset: 300,
        reverse: true
    })
        .setTween("#bar4", {
            rotation: 180
        })
        .addTo(controller);

    function callback1 (event) {
        if(event.scrollDirection == "FORWARD")
            console.log("Top arrow event --backToTop fired! (" + event.type + ")");
            $("#bar4").attr("href", "#bg3");
    }

    function callback2 (event) {
        if(event.scrollDirection == "REVERSE")
            console.log("Top arrow event --goDown fired! (" + event.type + ")");
            $("#bar4").attr("href", "#bar4");
    }
// add listeners
    scene1.on("end", callback1);

    scene1.on("start", callback2);

//bar5
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#pills",
        duration: 350,
        triggerHook: 'onLeave',
        offset: -50,
        reverse: true
    })
        .setTween("#bar5", {
            rotation: 180

        })
        .addTo(controller);


    function callback3 (event) {
        if(event.scrollDirection == "FORWARD")
        console.log("Bottom arrow event --backToTop fired! (" + event.type + ")");
        $("#bar5").attr("href", "#bar4");
    }

    function callback4 (event) {
        if(event.scrollDirection == "REVERSE")
            console.log("Bottom arrow event --goDown fired! (" + event.type + ")");
            $("#bar5").attr("href", "#bar5");
    }
// add listeners
    scene1.on("end", callback3);

    scene1.on("start", callback4);


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