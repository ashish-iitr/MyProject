 "use strict";
 jQuery(document).ready(function() {

        
     // if (localStorage.showWelcome == 'true') {
     //     var msg = " Welcome ";
     //     if (localStorage.firstName != 'undefined' && localStorage.lastName != 'undefined') {
     //         msg += localStorage.firstName + ' ' + localStorage.lastName;
     //     }

     //     var boxes = $(".userLogo");

     //     $.notify.defaults({
     //         arrowShow: true
     //     });
     //     $.notify.defaults({
     //         className: 'success'
     //     });

     //     $(function() {
     //         var box = $("<div class=\"box\"></div>");
     //         boxes.append($("<div class=\"wrapper\"/>").append(box));
     //         boxes.notify(msg, {
     //             position: "left center"
     //         });
     //     });
     //     localStorage.showWelcome = false;
     // }

     //for highlighting during navigation
     $(function() {
         $("a").each(function() {
             if ($(this).attr("href") == window.location.pathname) {
                 $(this).addClass("selected-dashboard");
             }
         });
     })
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
     $("#setup_logo").css("color", "#428BCA");

     $('#static').hide();
     $('#dhcp').show();
     $(function() {
         $("#accessType").change(function() {
             var Type = $("#accessType").val();
             if (Type == '1') {
                 $('#static').hide();
                 $('#dhcp').show();
             }
             if (Type == '2') {
                 $('#dhcp').hide();
                 $('#static').show();
             }
             // $('#static').hide();
             // $('#dhcp').show();   
         });
     });
    
    var $tip1 = $('#tip1');
    var $tip2 = $('#tip2');
    var $tip3 = $('#tip3');
    var $tip4 = $('#tip4');
    var $tip5 = $('#tip5');
    var $tip6 = $('#tip6');
    var $tip7 = $('#tip7');
    var $tip8 = $('#tip8');
    $tip1.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip1.tooltip('toggle');
     });
     $tip2.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip2.tooltip('toggle');
     });
     $tip3.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip3.tooltip('toggle');
     });
     $tip4.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip4.tooltip('toggle');
     });
     $tip5.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip5.tooltip('toggle');
     });
     $tip6.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip6.tooltip('toggle');
     });
     $tip7.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip7.tooltip('toggle');
     });
     $tip8.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip8.tooltip('toggle');
     });

 });
