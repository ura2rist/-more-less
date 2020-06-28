$(document).on('click', '#button-check', function(){			//Событие нажатие на кнопку
	let age = $('#age').val();							//Получение значения по id
	let out = $('#message');							//Получение блока по id для вывода сообщения
	let secondParam = $('#hide-param');					//Получение блока со скрытым параметром	
	$('#accompanied').prop('checked', false);			//Изменение параметров чекбокса на false(Обнуление чекбокса)
	if(age < 18){
		secondParam.css({'display':'block'});			//Показ скротого блока
		out.css({'color':'#f00'});						//изменение цвета
		out.html('Вы младше 18 лет, доступ закрыт');	//Запись сообщения 
		$(document).on('change', '#accompanied', function(){
			if($('#accompanied').prop('checked')){
				out.css({'color':'#26ff00'});
				out.html('Вам меньше 18 лет, но есть сопровождающий, доступ открыт');
			}else{
				out.css({'color':'#f00'});
				out.html('Вы младше 18 лет, доступ закрыт');
			}
		})
	}else{
		if(secondParam.css('display') == 'block'){
			secondParam.css({'display':'none'});
		}
		out.css({'color':'#26ff00'});
		out.html('Вам 18 лет и больше, доступ открыт');
	}
})