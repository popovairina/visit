// Отправка заявки 
$(document).ready(function() {
	$('form').on('submit', function(e) { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		e.preventDefault();
		var self = $(this);
		if (self.find('input').val() == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: self.serialize()
		}).done(function() {
            $('.form__wrap').hide();
            $('.form__title').text('Спасибо за заявку! Ожидайте звонка.');
			self.trigger('reset');
		});
		return false;
	});
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});