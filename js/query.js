

$(document).ready(function() {

	function validate(elements) {
		let done = true
		elements.each(function () {
			if ($(this).val() == '') {
				done = false

			}
		})
		if (done == true) {
			$('.quest__form__submit').removeAttr('disabled')
		}
		else{
			$('.quest__form__submit').attr('disabled', '');
		}
	}


	$('.quest__form').on('keyup', function() {
		validate($('.quest__form .quest__input'))
	})
})