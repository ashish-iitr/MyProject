"use strict";
var serverIp = "localhost";

$("#loginUser").replaceWith("serverIp");

function logout() {
    // try {
    //     $.ajax({
    //         type: "GET",
    //         url: "/logout",
    //         error: function(xhr, status, error) {
    //             var errorMessage = error || xhr.statusText;
    //         }
    //     }).done(function(data) {
    //         if (data.output.result.toUpperCase() == 'OK') {
    //             localStorage.showLogout = true;
    //             window.location.href = '/login';
    //         }
    //     });
    // } catch (ex) {
    //     return false;
    // }
    
    window.location = "http://" + serverIp + ":5000/";
}