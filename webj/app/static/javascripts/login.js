"use strict";
 var serverIp = "localhost";

jQuery(document).ready(function() {

    try {
        if (localStorage.loginSucess == 'true') {
            $.notify("Welcome to IONOS Networks' Services. Please login to continue.", "success");
            localStorage.loginSucess = false;
        }
        if (localStorage.showLogout == 'true') {
            $.notify("Logout successfully.", "success");
            localStorage.showLogout = false;
        }
    } catch (e) {

    }
    try {
        $('form input').bind('keypress', function(e) {
            if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                $('input[type=button].default').click();
                return false;
            }
        });
    } catch (e) {

    }
});

function login() {
    if(validateLogin()){
     try {
        var user = $('#username').val();
        var password = $('#password').val();
        console.log(localStorage.email);
        var formInput = {
         "uname": user,
         "pwd": password
        };
     var postData = {};
     postData['LoginData'] = formInput;
     var post_data = JSON.stringify(postData);
     console.log(post_data);
     $.ajax({
        type: "POST",
        url: "http://" + serverIp + ":5000/check_auth",
        data: post_data,
        contentType: 'application/json;charset=UTF-8',
        success: function(result) {
        if (result == "OK") {
          localStorage.email = user;
          localStorage.showWelcome = "true";
          window.location = "http://" + serverIp + ":5000/site";
        }
        else{
            $.notify("Please enter correct username or password!", "error");
            $('#username').val("");
            $('#password').val("");
            // setTimeout("location.href = 'http://" + serverIp + ":5000/';", 1800);
        }
         }
     });

    } catch (ex) {
        $('#basicModal').modal('hide');
        $.notify("Exception in Login : " + ex.message, "error");
        return false;
    }
}
}

function validateLogin() {
    try {
        localStorage.email = $('#username').val();
        $("#login_frm").validate();

        $("#username").rules("add", {
            required: true,
            messages: {
                required: "Please Enter UserName."
            }
        });
        $("#password").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Password."
            }
        });
    } catch (ex) {
        $.notify("Login Validation Failed : " + ex.message, "error");
        return false;
    }
    return $("#login_frm").valid();
}

// function validateLogin() {
//     try {
//         localStorage.email = $('#username').val();
//         localStorage.password = $('#password').val();
//         localStorage.showWelcome = "true";
//         var user = $('#username').val();
//         var password = $('#password').val();
//         console.log(localStorage.email);
//         var formInput = {
//          "uname": user,
//          "pwd": password
//         };
//      var postData = {};
//      postData['LoginData'] = formInput;
//      var post_data = JSON.stringify(postData);
//      console.log(post_data);
//      $.ajax({
//          type: "POST",
//          url: "http://" + serverIp + ":5000/check_auth",
//          data: post_data,
//          contentType: 'application/json;charset=UTF-8',
//          success: function(result) {
//         if (result == "OK") {
//             console.log("ashish")
//            localStorage.success = "OK";
//            //return true;
//            // window.location = "http://" + serverIp + ":5000/site";
//         }
//         else{
//             $.notify("please enter correct info");
//         }
//          }
//      });

//     } catch (ex) {
//         $.notify("Log Validation Failed : " + ex.message, "error");
//         return false;
//     }
//     return true;
// }

function register() {
    window.location.href = '/register';
}