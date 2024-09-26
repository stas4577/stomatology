

$(document).ready(function () {

    let news_count = $('.news-el').length
    let remain_els = $('.news-el').length - 3
    console.log($('.news-el').css('flex-basis'))


    $('#news-right').on('click', function () {

        if (remain_els == 0) {
            return false
        }
        remain_els = remain_els - 1

        let news_el_width = $('.news-el').eq(0).width()
        let current_offset = parseInt($('.news__content').css('left'))
        let current_gap = parseInt($('.news__content').css('gap'))

        console.log($('.news__content').css('gap'))

        $('.news__content').css('left', current_offset - news_el_width - current_gap)


    })

    $('#news-left').on('click', function () {

        if (remain_els + 3 == news_count) {
            return false
        }
        remain_els = remain_els + 1

        let news_el_width = $('.news-el').eq(0).width()
        let current_offset = parseInt($('.news__content').css('left'))
        let current_gap = parseInt($('.news__content').css('gap'))

        console.log($('.news__content').css('gap'))

        $('.news__content').css('left', current_offset + news_el_width + current_gap)


    })


})