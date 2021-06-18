function validateForms(form) {
    $(form).validate({
        rules: {
            phone: "required",
        },
        messages: {

            phone: "Пожалуйста, введите свой номер телефона",
            
        }
    });
};

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
  });
