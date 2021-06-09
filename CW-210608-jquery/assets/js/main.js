let rotate = 0;

$('.question').click(function() {
    $('.content').slideUp();
    $('.up').css('transform', `rotate(0)`);
    $(this).children().css('transform', `rotate(${rotate+=180}deg)`);
    $(this).next().slideToggle();
    console.log($(this));
})