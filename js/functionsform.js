/**
 * Created by moksh on 16/6/16.
 */

//For validations


$(document).ready(function() {

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {
        $("#result").text("");
        var email = $("#email").val();
        console.log(email);
        if (validateEmail(email)) {
            $("#result").text(email + " is valid.");
            $("#result").css("color", "green");
        } else {
            $("#result").text(email + " is not valid.");
            $("#result").css("color", "red");
        }
        return false;
    }

    $("form").bind("submit", validate);
});