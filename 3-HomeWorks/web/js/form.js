


let settings = {
    rules: {
      email: {
        required: true,
        email: true,
        minlength: 6,
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 12,
      },
    },
    messages: {
      email: {
        required: "Bạn chưa nhập email",
        minlength: jQuery.validator.format("Tối thiểu có {0} kí tự"),
        email: "Địa chỉ email không hợp lệ",
      },
      password: {
        required: "Bạn chưa nhập password",
        minlength: "Tối thiểu có {0} kí tự",
        maxlength: "Tối đa có {0} kí tự",
      },
    },
  };
  
  let validator = $("#myForm").validate(settings);
