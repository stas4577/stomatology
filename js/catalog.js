

$(document).ready(function () {
    
    $('.catalog__nav__el').on('click',function () {

        if ($(this).hasClass('catalog__nav__el_active')) {
            $('.catalog__nav__el').removeClass('catalog__nav__el_active')
        }
        else {
            $('.catalog__nav__el').removeClass('catalog__nav__el_active')
            $(this).addClass('catalog__nav__el_active')
        }
    })



    let news_count = $('.latest__goods .good').length
    let remain_els = $('.latest__goods .good').length - 4


    $('#right').on('click', function () {

        if (remain_els == 0) {
            return false
        }
        remain_els = remain_els - 1

        let news_el_width = $('.latest__goods .good').eq(0).outerWidth()
        let current_offset = parseInt($('.latest__goods').css('left'))
        let current_gap = parseInt($('.latest__goods').css('gap'))

        console.log($('.latest__goods .good').eq(0).outerWidth())

        $('.latest__goods').css('left', current_offset - news_el_width - current_gap)


    })

    $('#left').on('click', function () {

        if (remain_els + 4 == news_count) {
            return false
        }
        remain_els = remain_els + 1

        let news_el_width = $('.latest__goods .good').eq(0).outerWidth()
        let current_offset = parseInt($('.latest__goods').css('left'))
        let current_gap = parseInt($('.latest__goods').css('gap'))

        console.log($('.latest__goods').css('gap'))

        $('.latest__goods').css('left', current_offset + news_el_width + current_gap)


    })


})