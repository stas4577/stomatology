$(document).ready(function () {
	let count_slides = $('.main-slider__content').length

	for (let i = 0; i < count_slides - 1; i++) {
		$('.main-slider__nav').append("<div class='main-slider__nav-el'></div>")
	}

	$('.slider-right').click(function () {
		let active_slide = $('.main-slider_active').index()
		let slide_width = $('.main-slider_active').outerWidth()
		let gap = 20

		$('.main-slider__content').removeClass('main-slider_active')

		active_slide + 1 == count_slides ? (active_slide = 0) : active_slide++
		active_slide == 0 ? (gap = 0) : (gap = 20)

		$('.main-slider__content')
			.eq(active_slide)
			.addClass('main-slider_active')

		//alert(active_slide)

		$('.main-slider__content')
			.eq(0)
			.css(
				'margin-left',
				(active_slide * slide_width + gap * active_slide) * -1
			)
		$('.main-slider__nav-el').removeClass('main-slider__nav-el_active')
		$('.main-slider__nav-el')
			.eq(active_slide)
			.addClass('main-slider__nav-el_active')
	})

	$('.slider-left').click(function () {
		let active_slide = $('.main-slider_active').index()
		let slide_width = $('.main-slider_active').outerWidth()
		let gap = 20

		$('.main-slider__content').removeClass('main-slider_active')

		active_slide - 1 == -1
			? (active_slide = count_slides - 1)
			: active_slide--
		active_slide == 0 ? (gap = 0) : (gap = 20)

		$('.main-slider__content')
			.eq(active_slide)
			.addClass('main-slider_active')

		//alert(active_slide)

		$('.main-slider__content')
			.eq(0)
			.css(
				'margin-left',
				(active_slide * slide_width + gap * active_slide) * -1
			)
		$('.main-slider__nav-el').removeClass('main-slider__nav-el_active')
		$('.main-slider__nav-el')
			.eq(active_slide)
			.addClass('main-slider__nav-el_active')
	})

	$('.workers__slider__right').on('click', function () {
		if ($('.workers__slide').eq(-1).hasClass('workers__slide_active')) {
			return false
		}

		$('.workers__slider__nav').css('pointer-events', 'none')

		setTimeout(() => {
			$('.workers__slider__nav').css('pointer-events', 'all')
		}, 500)

		let worker_slide_count = $('.workers__slide').length
		let first_slide_active = $('.workers__slide_active').eq(0).index()
		let active_left = parseInt(
			$('.workers__slide').eq(0).css('margin-left')
		)
		let worker_slide_width = parseInt($('.workers__slide').width())
		let worker_gap = parseInt($('.workers__slider').css('gap'))

		$('.workers__slide')
			.eq(0)
			.css(
				'margin-left',
				active_left + (worker_slide_width + worker_gap) * -1
			)

		$('.workers__slide_active').eq(0).removeClass('workers__slide_active')
		$('.workers__slide')
			.eq($('.workers__slide_active').eq(-1).index() + 1)
			.addClass('workers__slide_active')
	})
	$('.workers__slider__left').on('click', function () {
		if ($('.workers__slide').eq(0).hasClass('workers__slide_active')) {
			return false
		}

		$('.workers__slider__nav').css('pointer-events', 'none')

		setTimeout(() => {
			$('.workers__slider__nav').css('pointer-events', 'all')
		}, 500)

		let worker_slide_count = $('.workers__slide').length
		let first_slide_active = $('.workers__slide_active').eq(0).index()
		let active_left = parseInt(
			$('.workers__slide').eq(0).css('margin-left')
		)
		let worker_slide_width = parseInt($('.workers__slide').width())
		let worker_gap = parseInt($('.workers__slider').css('gap'))

		$('.workers__slide')
			.eq(0)
			.css('margin-left', active_left + (worker_slide_width + worker_gap))

		$('.workers__slide_active').eq(-1).removeClass('workers__slide_active')
		$('.workers__slide')
			.eq($('.workers__slide_active').eq(0).index() - 1)
			.addClass('workers__slide_active')
	})

	let galery_current_step = 0

	$('.galery__slider__right').on('click', function () {
		let steps_count = 2
		if (steps_count == galery_current_step) {
			return false
		}
		let galery_step =
			parseInt($('.galery__item').eq(1).width()) +
			parseInt($('.galery__block').css('gap'))
		$('.galery__item').css(
			'margin-left',
			parseInt($('.galery__item').css('margin-left')) - galery_step
		)
		galery_current_step += 1
		$('.galery__slider__nav').css('pointer-events', 'none')
		setTimeout(() => {
			$('.galery__slider__nav').css('pointer-events', 'all')
		}, 500)
	})

	$('.galery__slider__left').on('click', function () {
		if (galery_current_step == 0) {
			return false
		}
		let galery_step =
			parseInt($('.galery__item').eq(1).width()) +
			parseInt($('.galery__block').css('gap'))
		$('.galery__item').css(
			'margin-left',
			parseInt($('.galery__item').css('margin-left')) + galery_step
		)
		galery_current_step -= 1
		$('.galery__slider__nav').css('pointer-events', 'none')
		setTimeout(() => {
			$('.galery__slider__nav').css('pointer-events', 'all')
		}, 500)
	})
})
