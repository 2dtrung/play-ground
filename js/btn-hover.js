$(document).ready(function() {
    $('.box-type').mouseover(function() {
        $(this).animate({marginTop: '-20px'},100)
    })
    $('.box-type').mouseleave(function() {
        $(this).animate({marginTop: '0px'},100)
    })
})