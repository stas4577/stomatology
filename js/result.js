

$(document).ready(function() {



	$('.result__el__more .result__el__ammount').on('click', function () {
		$(this).parent('.result__el__more').children('.result__el__ammount').removeClass('result__el__ammount_active')
		$(this).addClass('result__el__ammount_active')
	})

})