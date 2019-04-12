'use strict';


$(document).ready(function () {


    $('.wrapper').hide();


    // intro section
    ////////////////////////////////////////////////////////////
    var welcomeSection = $('.welcome-section'),
        enterBtn = welcomeSection.find('.enter-button'),
        enterBtn2Hack = welcomeSection.find('.fly-in-text');


    setTimeout(function () {
        welcomeSection.removeClass('content-hidden');
    }, 800);

    enterBtn.on('click', function (e) {
        e.preventDefault();
        $('.wrapper').show();
        welcomeSection.addClass('content-hidden').fadeOut();
    });

    enterBtn2Hack.on('click', function (e) {
        e.preventDefault();
        $('.wrapper').show();
        welcomeSection.addClass('content-hidden').fadeOut();
    });
    ////////////////////////////////////////////////////////////
    // end of intro section


    // ewentualnie:
    // $(document).on('click', '#yourid', function() { alert("hello"); });
    // zamknij info o cookies
    $("#cookie-container").click(function () {
        console.log("zamknij!");
        $("#cookie-container").fadeOut("slow");
    });

});
