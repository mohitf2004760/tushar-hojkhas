/**
* @author dhsign
* @copyright Copyright (c) 2015 dhsign
* @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
jQuery(function($) {

    "use strict";

    var $body = $('body'),
    $toggler = $('#offcanvas-toggler'),
    $close = $('.close-offcanvas'),
    $offCanvas = $('.offcanvas-menu');

    $toggler.on('click', function(event){
        event.preventDefault();
        stopBubble (event);
        setTimeout(offCanvasShow, 50);
    });

    $close.on('click', function(event){
        event.preventDefault();
        offCanvasClose();
    });

    var offCanvasShow = function(){
        $body.addClass('offcanvas');
        $close.on('click',offCanvasClose);
        $offCanvas.on('click',stopBubble);

    };

    var offCanvasClose = function(){
        $body.removeClass('offcanvas');
        $close.off('click',offCanvasClose);
        $offCanvas.off('click',stopBubble);
    };

    var stopBubble = function (e) {
        e.stopPropagation();
        return true;
    };

});

var dh_ = jQuery.noConflict();

/* Sticky Navigation Bar */
dh_(function(dh_){
  
        dh_("document").ready(function(){  
            dh_(window).scroll(function () {  
                if (dh_(this).scrollTop() > 0) {  
                    dh_('#header-wrapper').addClass("f-menu");
					dh_('.navbar-header').addClass("navbar-header-fixed");
                    dh_('.navbar-text').addClass("navbar-text-fixed");
                    dh_('.navbar-brand').addClass("navbar-brand-fixed");
                    dh_('.navbar-nav-center').addClass("navbar-nav-center-fixed");					
                } else {  
                    dh_('#header-wrapper').removeClass("f-menu");
					dh_('.navbar-header').removeClass("navbar-header-fixed");
                    dh_('.navbar-text').removeClass("navbar-text-fixed");
                    dh_('.navbar-brand').removeClass("navbar-brand-fixed");
                    dh_('.navbar-nav-center').removeClass("navbar-nav-center-fixed");				
                }  
            });  
        });

});

	



	

	

