 "use strict";

 var serverIp = "localhost";

 jQuery(document).ready(function() {
     try {

           $('.popover-markup>.trigger').popover({
            html: true,
            title: function() {
                return $(this).parent().find('.head').html();
            },
            content: function() {
                return $(this).parent().find('.content').html();
            }
        });

         //for highlighting during navigation
         $(function() {
             $("a").each(function() {
                 if ($(this).attr("href") == window.location.pathname) {
                     $(this).addClass("selected-location");
                 }
             });
         });
         $(this).scrollTop(25);
         $("#storage_logo").css("color", "#428BCA");

         $("#nfs").css("background", "#0000FF");
         $("#usb").css("background", "#737CA1");
         $('.usbContent').hide();
         $('.nfsContent').show();
         $('#nfs').click(function(event) {
             $("#nfs").css("background", "#0000FF");
             $("#usb").css("background", "#737CA1");
             $('.usbContent').hide();
             $('.nfsContent').show();
         });
         $("#usb").click(function(event) {
             $("#usb").css("background", "#0000FF");
             $("#nfs").css("background", "#737CA1");
             $(".nfsContent").hide();
             $('.usbContent').show();
         });

         var $tip1 = $('#tip1');
         var $tip2 = $('#tip2');
         var $tip3 = $('#tip3');

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


     } catch (e) {}
 });


 function ValidateIPaddress(inputText) {
     if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputText)) {
         return (inputText);
     }
     alert("You have entered an invalid IP address!");
     window.location.href = 'http://' + serverIp + ':5000/storage';
     //return (false);
 }

 function allnumeric(inputtxt) {
     if (/^[0-9]+$/.test(inputtxt)) {
         return (inputtxt);
     }
     alert("Please enter only numeric value!");
     return false;
 }

 function validPath(inputtxt) {
     if (/^[/]((\/|(\\?))[\w .]+)+$/.test(inputtxt)) {
         return (inputtxt);
     }
     alert("Please enter valid path");
     // return false;
     window.location.href = 'http://' + serverIp + ':5000/storage';
 }

 var response = [];

 var nfs_ip;

 function nfsMount() {
     var nfs_form = $('#nfs_form').serializeArray();
     var address = ValidateIPaddress(nfs_form[0].value);
     var path = validPath(nfs_form[1].value);
     var localpath = validPath(nfs_form[2].value);
     var formInput = {
         "address": address,
         "path": path,
         "localpath": localpath
     };
     var postData = {};
     postData['nfsData'] = formInput;
     var post_data = JSON.stringify(postData);
     console.log(post_data);
     $.ajax({
         type: "POST",
         url: "http://" + serverIp + ":5000/nfsMount",
         data: post_data,
         contentType: 'application/json;charset=UTF-8',
         success: function(result) {
             $('#nfs_address').val('');
             $('#nfs_path').val('');
             $('#nfs_localpath').val('');
             $.notify("nfs mounted successfully!", "success");
             setTimeout("location.href = 'http://" + serverIp + ":5000/storage';", 1000);
         }
     });
 }

 function nfsTable() {

     $(".table-curved").hide();
     $.get(
         "http://" + serverIp + ":5000/nfsTable",
         function(data) {
             response = data.split("\n");
             console.log(response);
             var element = '<table border="1" width = "665" class="table-curved" style="margin-left:8px" >';
             element += '<tr><th>NFS Server</th><th>Mounted On</th><th>UNMOUNT</th></tr>';
             for (var i = 1; i < response.length; i++) {
                 var result = response[i].split(" ");
                 console.log(result);
                 element += '<tr><td><input style="cursor: pointer;" type="radio" name="nfs" id = "nfs" value="' + result[0] + '">' + result[0] + '</td><td>' + result[1] + '</td><td style="text-align: center;"><button type="button id= "umntBtn" name="sendButton" class= "button button-pill button-primary button-small umount-btn" onclick="nfsUnmount()">' + 'UNMOUNT' + '</button></td></tr>';
             }
             element += '</table>';
             $("#nfsTableDetails").append(element);
         })
 }

 function nfsUnmount() {
     var device;
     var selectedRadio = $('input[name="nfs"]:checked').val();
     var folderName = folderName;
     console.log(selectedRadio);
     if (selectedRadio == null) {
         $.notify("Please select a nfs path!", "error");
     }
     var formInput = {
         "device": selectedRadio
     };
     var postData = {};
     postData['nfsData'] = formInput;
     var post_data = JSON.stringify(postData);
     console.log(post_data);
     $.ajax({
         type: "POST",
         url: "http://" + serverIp + ":5000/nfsUnmount",
         data: post_data,
         contentType: 'application/json;charset=UTF-8',
         success: function(result) {
             console.log(result);
             $.notify("nfs unmounted successfully!", "success");
             //  window.location.href = 'http://serverIp:5000/storage#tab-usb'
             $("#" + deviceInfo[1]).text("not mounted");
             setTimeout("location.href = 'http://" + serverIp + ":5000/storage';", 1000);
             // $('.umount-btn').prop('disabled', true);
             // $('.mount-btn').prop('disabled', false);
             //  setTimeout("location.href = 'http://serverIp:5000/storage';", 500);
         }
     });
 }

 function searchDevice() {

     $(".table-curved").hide();
     $.get(
         "http://" + serverIp + ":5000/usbInfo",
         function(data) {
             console.log(data);
             var element = '<table border="1" width = "128%" style="margin-left:71px;float:left;" class="table-curved" >';
             element += '<tr><th>' + 'DEVICE' + '</th><th>' + 'FILE SYSTEM' + '</th><th>' + 'LABEL' + '</th><th>' + 'MOUNT POINT' + '</th><th>' + 'MOUNT' + '</th><th>' + 'UNMOUNT' + '</th></tr>';
             response = data.split("\n");
             response.splice(0, 1);
             response.splice(0, 1);
             for (var i = 2; i < response.length; i++) {
                 response[i] = response[i].replace(/\s+/g, "___");
                 var result = [];
                 result = response[i].split("___");
                 element += '<tr>'
                 console.log(result[3]);
                 var mnt1 = result[1].indexOf('/');
                 var mnt2 = result[2].indexOf('/');
                 var mnt3 = result[3].indexOf('/');
                 console.log(mnt1);
                 if (mnt1 == 0) {
                     element += '<td><input style="cursor: pointer;" type="radio" name="device" id = "device" value="' + response[i] + '">' + result[0] + '</td><td>' + "-------" + '</td><td>' + "-------" + '</td><td><span id ="' + result[1] + '">' + result[1] + '</span></td>';
                 } else if (mnt2 == 0) {
                     element += '<td><input style="cursor: pointer;" type="radio" name="device" id = "device" value="' + response[i] + '">' + result[0] + '</td><td>' + result[1] + '</td><td>' + "-------" + '</td><td><span id ="' + result[1] + '">' + result[2] + '</span></td>';
                 } else if (mnt3 == 0) {
                     element += '<td><input style="cursor: pointer;" type="radio" name="device" id = "device" value="' + response[i] + '">' + result[0] + '</td><td>' + result[1] + '</td><td>' + result[2] + '</td><td><span id ="' + result[1] + '">' + result[3] + '</span></td>';
                 } else {
                     element += '<td><input style="cursor: pointer;" type="radio" name="device" id = "device" value="' + response[i] + '">' + result[0] + '</td><td>' + result[1] + '</td><td>' + result[2] + '</td><td><span id ="' + result[1] + '">' + "not mounted" + '</span></td>';
                 }
                 if (mnt1 == 0 || mnt2 == 0 || mnt3 == 0) {
                     element += '<td style="text-align: center;"><button type="button style="margin-left: 205px;" id= "mntBtn" name="sendButton" class= "button button-pill button-primary button-small mount-btn" data-toggle="modal" data-target="#mountModal" disabled>' + 'MOUNT' + '</button></td>';
                     element += '<td style="text-align: center;"><button type="button style="margin-left: 205px;" id= "umntBtn" name="sendButton" class= "button button-pill button-primary button-small umount-btn" onclick="usbUnmount()">' + 'UNMOUNT' + '</button></td>';
                 } else {
                     element += '<td style="text-align: center;"><button type="button style="margin-left: 205px;" id= "mntBtn" name="sendButton" class= "button button-pill button-primary button-small mount-btn" data-toggle="modal" data-target="#mountModal">' + 'MOUNT' + '</button></td>';
                     element += '<td style="text-align: center;"><button type="button style="margin-left: 205px;" id= "umntBtn" name="sendButton" class= "button button-pill button-primary button-small umount-btn" onclick="usbUnmount()" disabled>' + 'UNMOUNT' + '</button></td>';
                 }
                 element += '</tr>';
             }
             element += '</table>';
             $("#usbTableDetails").append(element);
         }
     );
 }

 var deviceInfo = [];
 var folderName;

 function usbMount() {
     var device;
     var selectedRadio = $('input[name="device"]:checked').val();
     if (selectedRadio == null) {
         $.notify("Please select a usb!", "error");
     }
     folderName = $("input#folderName").val()
     console.log(folderName);
     deviceInfo = selectedRadio.split("___");
     console.log(deviceInfo[0]);
     var formInput = {
         "device": deviceInfo[0],
         "folder": folderName
     };
     var postData = {};
     postData['usbData'] = formInput;
     var post_data = JSON.stringify(postData);
     console.log(post_data);
     $.ajax({
         type: "POST",
         url: "http://" + serverIp + ":5000/usbmount",
         data: post_data,
         contentType: 'application/json;charset=UTF-8',
         success: function(result) {
             console.log(result);
             $.notify("Usb mounted successfully!", "success");
             // window.location.href = 'http://serverIp:5000/storage#tab-usb';
             $("#" + deviceInfo[1]).text("/usr/local/ica/" + folderName);
             setTimeout("location.href = 'http://" + serverIp + ":5000/storage';", 1000);
         }
     });
 }

 function usbUnmount() {
     var device;
     var selectedRadio = $('input[name="device"]:checked').val();
     var folderName = folderName;
     console.log(folderName);
     if (selectedRadio == null) {
         $.notify("Please select a usb!", "error");
     }

     deviceInfo = selectedRadio.split("___");
     // console.log(deviceInfo[0]);
     var formInput = {
         "device": deviceInfo[0]
     };
     var postData = {};
     postData['usbData'] = formInput;
     var post_data = JSON.stringify(postData);
     //   console.log(post_data);
     $.ajax({
         type: "POST",
         url: "http://" + serverIp + ":5000/usbUnmount",
         data: post_data,
         contentType: 'application/json;charset=UTF-8',
         success: function(result) {
             console.log(result);
             $.notify("Usb unmounted successfully!", "success");
             //  window.location.href = 'http://localhost:5000/storage#tab-usb'
             $("#" + deviceInfo[1]).text("not mounted");
             setTimeout("location.href = 'http://" + serverIp + ":5000/storage';", 1000);
             // $('.umount-btn').prop('disabled', true);
             // $('.mount-btn').prop('disabled', false);
             //  setTimeout("location.href = 'http://localhost:5000/storage';", 500);
         }
     });
 }