$(document).ready(function() {
    $('.box-type').mouseover(function() {
        $(this).animate({marginTop: '-20px'},100)
    })

    $('.box-type').mouseleave(function() {
        $(this).animate({marginTop: '0px'},100)
    })

    $('.header__bars').click(function() {
        $('.header__menu').slideToggle().css({borderTop: '1px solid black', borderBottom: '1px solid black',height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%'});
    })

})