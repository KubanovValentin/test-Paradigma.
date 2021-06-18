$(document).ready(function() {
    $(".button.rus_lang").click(function () {
        //alert("Нажата кнопка АНГЛИЙСКИЙ");
        var rusLang = document.getElementsByClassName("rus_lang");
        var enLang = document.getElementsByClassName("en_lang");
        for (i = 0; i < enLang.length; i++) {
          enLang[i].style.position = "static";
          rusLang[i].style.position = "absolute";
          rusLang[i].style.top = "-9999px";
          rusLang[i].style.left = "-9999px";
        }
      });
      
      $(".button.en_lang").click(function () {
        //alert("Нажата кнопка АНГЛИЙСКИЙ");
        var rusLang = document.getElementsByClassName("rus_lang");
        var enLang = document.getElementsByClassName("en_lang");
        for (i = 0; i < enLang.length; i++) {
          rusLang[i].style.position = "static";
          enLang[i].style.position = "absolute";
          enLang[i].style.top = "-9999px";
          enLang[i].style.left = "-9999px";
        }
      });


      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('[data-modal=order]').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });
    
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $(document).ready(function() {
      $('.carousel__inner').slick({
          speed: 1200,
          // adaptiveHeight: true,
          prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
          nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
          
      });

    window.addEventListener("mousewheel", function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  });


});



// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
// no need to create my own :)
});
