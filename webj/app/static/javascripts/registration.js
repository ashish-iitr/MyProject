$(document).ready(function() {
    try {
        $('form').live('keypress', function(e) {
            if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                $('input[type=button].default').click();
            }
        });
       // $(this).scrollTop(25);
    } catch (e) {

    }
});

function register() {
    try {
        $("#registration-error").hide();
        if (validateRegistration()) {
            $("#timezone").val(new Date().getTimezoneOffset());
            $('#basicModal').modal('show');
            $.ajax({
                type: "POST",
                url: "/api/register",
                dataType: "json",
                data: $("#register_form").serialize(),
                error: function(xhr, status, error) {
                    var errorMessage = error || xhr.statusText;
                    $.notify("Error in Registration Service : " + errorMessage, "error");
                }
            }).done(function(data) {
                $('#basicModal').modal('hide');
                if (data.output.errorCode == 'E_USER_EXISTS') {
                    $('#basicModal').modal('hide');
                    $.notify("User Already Exixt", "error");
                    return false;
                } else if (data.output.result.toUpperCase() == 'OK') {
                    $('#basicModal').modal('hide');
                    localStorage.loginSucess = true;
                    window.location.href = '/login';
                } else {
                    $('#basicModal').modal('hide');
                    $.notify(data.output.result, "error");
                    return false;
                }
            });
        }
    } catch (ex) {
        $('#basicModal').modal('hide');
        $.notify("Exception in Registration Service : " + errorMessage, "error");
        return false;
    }
}

function validateRegistration() {
    try {

        $.validator.addMethod("emailRule", function(value, element) {
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }, "Please Enter Valid Email.");
        $("#register_form").validate();

        $("#firstName").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Your First Name."
            }
        });
        $("#lastName").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Your Last Name."
            }
        });
        $("#company").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Company Name."
            }
        });
        $("#address").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Street Name."
            }
        });
        $("#city").rules("add", {
            required: true,
            messages: {
                required: "Please Enter City Name."
            }
        });
        $("#state_province").rules("add", {
            required: true,
            messages: {
                required: "Please Enter State Name."
            }
        });
        $("#zip_postal").rules("add", {
            required: true,
            digits: true,
            messages: {
                required: "Please Enter Zip Code.",
                digits: "Your Zip Code must be numbers!"
            }
        });
        $("#country").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Country Name."
            }
        });
        $("#email").rules("add", {
            emailRule: true,
            messages: {
                required: "Please Enter Email."
            }
        });
        $("#password").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Password."
            }
        });
        $("#confirm_password").rules("add", {
            required: true,
            equalTo: "#password",
            messages: {
                required: "Please Enter Confirm Password Name.",
                equalTo: "Please enter the same password as above"
            }
        });
        $("#phone").rules("add", {
            required: true,
            messages: {
                required: "Please Enter Phone."
            }
        });

    } catch (ex) {
        $.notify("Registration Validation Failed : " + ex.message, "error");
        return false;
    }
    return $("#register_form").valid();
}

function reset() {
    $('#register_form').trigger("reset");
    $("#register_form").validate().resetForm();
}