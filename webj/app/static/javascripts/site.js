"use strict";

var serverIp = "localhost";

jQuery(document).ready(function() {
    try {
      
        if (localStorage.showWelcome == "true") {
            console.log(localStorage.showWelcome);
           $.notify("Welcome "+localStorage.email, "success");
            localStorage.showWelcome = "false"; 
        }
        
        //for highlighting during navigation

        $(function() {
            $("a").each(function() {
                if ($(this).attr("href") == window.location.pathname) {
                    $(this).addClass("selected-site");
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

        //for display start page         
        $(this).scrollTop(25);
        
        $("#site_logo").css("color", "#428BCA");
        $("#site").css("background", "#1569C7");
        $('.ic2Content').hide();
        $('.im1Content').hide();
        $('.siteContent').show();
        $('#ic2').click(function(event) {
            $("#ic2").css("background", "#1569C7");
            $("#site").css("background", "#438D80");
            $("#im1").css("background", "#438D80");
            $('.siteContent').hide();
            $('.im1Content').hide();
            $('.ic2Content').show();
        });
        $("#im1").click(function(event) {
            $("#im1").css("background", "#1569C7");
            $("#site").css("background", "#438D80");
            $("#ic2").css("background", "#438D80");
            $(".ic2Content").hide();
            $(".siteContent").hide();
            $('.im1Content').show();
        });
        $('#site').click(function(event) {
            $("#site").css("background", "#1569C7");
            $("#im1").css("background", "#438D80");
            $("#ic2").css("background", "#438D80");
            $('.ic2Content').hide();
            $('.im1Content').hide();
            $('.siteContent').show();
        });

        // $('.chevron_toggleable').on('click', function() {
        //     $(this).toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        // });

    var $tip1 = $('#tip1');
    var $tip2 = $('#tip2');
    var $tip3 = $('#tip3');
    var $tip4 = $('#tip4');
    var $tip5 = $('#tip5');
    var $tip6 = $('#tip6');
    var $tip7 = $('#tip7');
    var $tip8 = $('#tip8');
    var $tip9 = $('#tip9');
    var $tip10 = $('#tip10');
    var $tip11 = $('#tip11');
    var $tip12 = $('#tip12');
    var $tip13 = $('#tip13');

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
     $tip9.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip9.tooltip('toggle');
     });
    $tip10.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip10.tooltip('toggle');
     });
      $tip11.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip11.tooltip('toggle');
     });
      $tip12.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip12.tooltip('toggle');
     });
      $tip13.tooltip({
         trigger: 'popover'
     })
     .on('click', function() {
         $tip13.tooltip('toggle');
     });

    } catch (e) {
      
    }
});


var site_ip, siteRoot;
var ic2_ip, ic2Port, ic2Retry, ic2KeepAlive;
var im1_ip, im1Port, im1Update;
jQuery(document).ready(function() {
    try {
        $(function() {
            $.getJSON("http://" + serverIp + ":5000/cpeInfo", function(json_data) {
                var site_data = json_data.cpeInfo.site;
                var ic2_data = json_data.cpeInfo.ic2;
                var im1_data = json_data.cpeInfo.im1;
                console.log(json_data.cpeInfo.site.address);
                $('#site_address').val(json_data.cpeInfo.site.address);
                site_ip = json_data.cpeInfo.site.address;
                $('#site_name').val(json_data.cpeInfo.site.name);
                $('#site_type').val(json_data.cpeInfo.site.type);
                $('#site_tenantId').val(json_data.cpeInfo.site['tenant-id']);
                $('#site_rootDir').val(json_data.cpeInfo.site['root-dir']);
                siteRoot = json_data.cpeInfo.site['root-dir'];
                $('#ic2_address').val(ic2_data.address);
                ic2_ip = ic2_data.address;
                $('#ic2_port').val(ic2_data.port);
                ic2Port = ic2_data.port;
                $('#ic2_retry').val(ic2_data['retry-interval']);
                ic2Retry = ic2_data['retry-interval'];
                $('#ic2_keepAlive').val(ic2_data['keepalive-interval']);
                ic2KeepAlive = ic2_data['keepalive-interval']
                $('#im1_address').val(im1_data.address);
                im1_ip = im1_data.address;
                $('#im1_port').val(im1_data.port);
                im1Port = im1_data.port;
                $('#im1_user').val(im1_data.user);
                $('#im1_pwd').val(im1_data.password);
                $('#im1_path').val(im1_data.path);
                $('#im1_update').val(im1_data['update-interval']);
                im1Update = im1_data['update-interval'];
                if (site_data.capabilities.ftp == 1) {
                    $("#ftp").prop("checked", true);
                    $("#bb").prop("checked", false);
                } else {
                    $("#bb").prop("checked", true);
                    $("#ftp").prop("checked", false);
                }
            });
        });
    } catch (e) {
        alert("some error!");
    }

});

function updateData() {
    $.getJSON("http://" + serverIp + ":5000/cpeInfo", function(json_data) {
        var site_data = json_data.cpeInfo.site;
        var ic2_data = json_data.cpeInfo.ic2;
        var im1_data = json_data.cpeInfo.im1;
        var site_form = $('#site_form').serializeArray();
        var ic2_form = $('#ic2_form').serializeArray();
        var im1_form = $('#im1_form').serializeArray();
        console.log(im1_form)

        //---update site form-------
        // var checkedRadio = $('input[name=capabilities]:checked').map(function()
        //     {
        //         return $(this).attr("id");
        //     }).get();
        var checkedRadio = $('input:checkbox[name=capabilities]:checked').attr("id");
        console.log(checkedRadio);
        site_data.address = ValidateIPaddress(site_form[0].value);
        if (site_data.address == false) {
            site_data.address = site_ip;
        }
        site_data.name = site_form[1].value;
        site_data['tenant-id'] = site_form[2].value;
        site_data.type = site_form[4].value;
        site_data['root-dir'] = validPath(site_form[5].value);
        if (site_data['root-dir'] == false) {
            site_data['root-dir'] = siteRoot;
        }
        // $.each(checkedRadio, function(index, value) {
        //   site_data.capabilities.checkedRadio[index] = 1;
        // });
        if (checkedRadio == 'ftp') {
            site_data.capabilities.ftp = 1;
            site_data.capabilities.bb = 0;
        } else if (checkedRadio == 'bb') {
            site_data.capabilities.ftp = 0;
            site_data.capabilities.bb = 1;
        }
        // else {
        //   site_data.capabilities.ftp = 1;
        //   site_data.capabilities.bb = 1;
        // }

        //---update ic2 form-------
        ic2_data.address = ValidateIPaddress(ic2_form[0].value);
        if (ic2_data.address == false) {
            ic2_data.address = ic2_ip;
        }
        ic2_data.port = allnumeric(ic2_form[1].value);
        if (ic2_data.port == false) {
            ic2_data.port = ic2Port;
        }
        ic2_data['retry-interval'] = allnumeric(ic2_form[2].value);
        if (ic2_data['retry-interval'] == false) {
            ic2_data['retry-interval'] = ic2Retry;
        };
        ic2_data['keepalive-interval'] = allnumeric(ic2_form[3].value);
        if (ic2_data['keepalive-interval'] == false) {
            ic2_data['keepalive-interval'] = ic2KeepAlive;
        }

        //---update im1 form-------
        im1_data.address = ValidateIPaddress(im1_form[0].value);
        if (im1_data.address == false) {
            im1_data.address = im1_ip;
        }
        im1_data.port = allnumeric(im1_form[1].value);
        if (im1_data.port == false) {
            im1_data.port = im1Port;
        }
        im1_data['update-interval'] = allnumeric(im1_form[2].value);
        if (im1_data['update-interval'] == false) {
            im1_data['update-interval'] = im1Update;
        }

        //construct post json data
        var postData = JSON.stringify(json_data.cpeInfo);
        $.ajax({
            type: "POST",
            url: "http://" + serverIp + ":5000/updateCpeInfo",
            data: postData,
            contentType: 'application/json;charset=UTF-8',
            success: function(result) {
                console.log(result);
                $.notify("Data updated successfully!", "success");
                setTimeout("location.href = 'http://" + serverIp + ":5000/site';", 500);
            }
        });
    });
}

function ValidateIPaddress(inputText) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputText)) {
        return (inputText);
    }
    alert("You have entered an invalid IP address!");
    //return (false);
    window.location = "http://" + serverIp + ":5000/site";
}

function allnumeric(inputtxt) {
    if (/^[0-9]+$/.test(inputtxt)) {
        return (inputtxt);
    }
    alert("Please enter only numeric value!");
    //return false;
    window.location = "http://" + serverIp + ":5000/site";
}

function validPath(inputtxt) {
    if (/^[/]((\/|(\\?))[\w .]+)+$/.test(inputtxt)) {
        return (inputtxt);
    }
    alert("Please enter valid path");
    //return false;
    window.location = "http://" + serverIp + ":5000/site";
}
