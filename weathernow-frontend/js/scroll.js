
$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#search-input').offset().top
    }, 'slow');
});