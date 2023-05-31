window.onload = (function (e) {

    $('.main-page').addClass('animate-content');
    $('#main-page').css("color", "#99FD6");
})

window.onresize = function () {
    closeRightPanel()
}

$('#main-page').click(function (e) {

    $('.main-page').css("display", "block").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.main-page').addClass('animate-content');
    $('#main-page').css("color", "#99FD6");
    $('#resume').css("color", "#ccc");
    $('#contact').css("color", "#ccc");
    $('#about-me').css("color", "#ccc");

    e.preventDefault();
})

$('#resume').click(function (e) {

    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "block").removeClass('animate-content');
    $('.resume').addClass('animate-content');
    $('#resume').css("color", "#99FD6");
    $('#main-page').css("color", "#ccc");
    $('#contact').css("color", "#ccc");
    $('#about-me').css("color", "#ccc");

    e.preventDefault();
})


$('#contact').click(function (e) {
    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "none").removeClass('animate-content');
    $('.contact').css("display", "block").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.contact').addClass('animate-content');
    $('#contact').css("color", "#99FD6");
    $('#resume').css("color", "#ccc");
    $('#main-page').css("color", "#ccc");
    $('#about-me').css("color", "#ccc");

    e.preventDefault();
})

$('#about-me').click(function (e) {
    $('.main-page').css("display", "none").removeClass('animate-content');
    $('.about-me').css("display", "block").removeClass('animate-content');
    $('.contact').css("display", "none").removeClass('animate-content');
    $('.resume').css("display", "none").removeClass('animate-content');
    $('.about-me').addClass('animate-content');
    $('#about-me').css("color", "#99FD6");
    $('#resume').css("color", "#ccc");
    $('#contact').css("color", "#ccc");
    $('#main-page').css("color", "#ccc");


    e.preventDefault();
})