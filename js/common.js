$(function () {

    /*
      Drower Menu
    ------------------------------------------------*/
    $('.js-button-hamburger').click(function () {
        $('body').toggleClass('is-active-drower');

        if($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', true);
        } else {
            $(this).attr('aria-expanded', false);
        }
    });

});