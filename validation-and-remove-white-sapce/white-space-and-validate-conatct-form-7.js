
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

jQuery(".wpcf7-form").validate({
  rules: {
    yourname: {
      required: true,
    },
    Phonenumber: {
      required: true,
      digits: true,
      rangelength: [6, 15]
    },
    messages: {

    }
  }
});

/** When One filed have  */
document.getElementById("input").addEventListener('keydown', function (e) {
  if (this.value.length === 0 && e.which === 32) e.preventDefault();
});

/** When tow filed have  */

document.addEventListener('DOMContentLoaded', function () {
  var input1 = document.getElementById('input1');
  var input2 = document.getElementById('input2');

  if (input1) {
    input1.addEventListener('keydown', function (e) {
      if (this.value.length === 0 && e.which === 32) {
        e.preventDefault();
      }
    });
  }

  if (input2) {
    input2.addEventListener('keydown', function (e) {
      if (this.value.length === 0 && e.which === 32) {
        e.preventDefault();
      }
    });
  }
});


jQuery('#input1').keypress(function (e) {
  var regex = new RegExp(/^[a-zA-Z\s]+$/);
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (regex.test(str)) {
  }
  else {
    e.preventDefault();
    return false;
  }
});