

$(document).ready(function() {



	$('.good__actions__size .btn-choise').on('click', function () {
		$(this).parent('.good__actions__size').children('.btn-choise').removeClass('btn-choise_black')
        $(this).parent('.good__actions__size').children('.btn-choise').addClass('btn-choise_white')
        $(this).removeClass('btn-choise_white')
		$(this).addClass('btn-choise_black')
	})

})