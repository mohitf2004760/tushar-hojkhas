/**
 * Created by moksh on 24/1/16.
 */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length)
            {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 2000);
                //return false; /*commented this out to fix tabs' link consider to make this function a named one to solve any unexpected bug */
            }
        }
    });

});