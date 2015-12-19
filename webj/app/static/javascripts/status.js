"use strict";

jQuery(document).ready(function() {
    try {
       

        if (localStorage.showWelcome == 'true') {
            var msg = " Welcome ";
            if (localStorage.firstName != 'undefined' && localStorage.lastName != 'undefined') {
                msg += localStorage.firstName + ' ' + localStorage.lastName;
            }

            var boxes = $(".userLogo");

            $.notify.defaults({
                arrowShow: true
            });
            $.notify.defaults({
                className: 'success'
            });

            $(function() {
                var box = $("<div class=\"box\"></div>");
                boxes.append($("<div class=\"wrapper\"/>").append(box));
                boxes.notify(msg, {
                    position: "left center"
                });
            });
            localStorage.showWelcome = false;
        }

        //for highlighting during navigation
        $(function() {
            $("a").each(function() {
                if ($(this).attr("href") == window.location.pathname) {
                    $(this).addClass("selected-mytransfer");
                }
            });
        });
         $('.popover-markup>.trigger').popover({
            html: true,
            title: function() {
                return $(this).parent().find('.head').html();
            },
            content: function() {
                return $(this).parent().find('.content').html();
            }
        });
        
        $(this).scrollTop(25);
        $("#status_logo").css("color", "#428BCA");

        $("#system").css("background", "#808000");
        $('.lan').hide();
        $('.wan').hide();
        $('.system').show();
        $('#lan').click(function(event) {
            $("#lan").css("background", "#808000");
            $("#system").css("background", "#438D80");
            $("#wan").css("background", "#438D80");
            $('.system').hide();
            $('.wan').hide();
            $('.lan').show();
        });
        $("#wan").click(function(event) {
            $("#wan").css("background", "#808000");
            $("#lan").css("background", "#438D80");
            $("#system").css("background", "#438D80");
            $(".system").hide();
            $(".lan").hide();
            $('.wan').show();
        });
        $('#system').click(function(event) {
            $("#system").css("background", "#808000");
            $("#lan").css("background", "#438D80");
            $("#wan").css("background", "#438D80");
            $('.lan').hide();
            $('.wan').hide();
            $('.system').show();
        });
    } catch (e) {

    }
});