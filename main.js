//Dodavanje artikala
$(document).ready(function () {
    $(".btn").click(function () {
        var val = parseInt($('#group').find('.badge').text());
        if ($(this).hasClass('btn-danger')) {
            $('#group').find('.badge').text(val - 1);
        } else if ($(this).hasClass('btn-info')) {
            $('#group').find('.badge').text(val + 1);
        }
    });
});
//Nazad na vrh
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});