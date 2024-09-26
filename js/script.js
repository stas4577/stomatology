$(function () {
	$('.search__bar input').focus(function () {
		$('body').css('background-color', 'rgba(43, 42, 41, 0.25)')
	})
	$('.search__bar input').focusout(function () {
		$('body').css('background-color', '#fff')
	})
})
