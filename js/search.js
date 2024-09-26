

$(function() {
    $('.search__bar input').focus(function() {
    	$('.black-bg').addClass('black-bg_active')
        $('.search__bar__btn').addClass('search__bar__btn_noactive')
    });
    $('.search__bar input').focusout(function() {
    	$('.black-bg').removeClass('black-bg_active')
        $('.search__bar__btn').removeClass('search__bar__btn_noactive')
    });
}) 