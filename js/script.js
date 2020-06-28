document.getElementById('button-check').onclick = function(){						//Событие нажатие на кнопку
	let age = document.getElementById('age').value;					//Получение значения по id
	let out = document.getElementById('message');				//Получение блока по id для вывода сообщения
	let secondParam = document.getElementById('hide-param');		//Получение блока со скрытым параметром	
	document.getElementById('accompanied').checked = false;			//Изменение параметров чекбокса на false(Обнуление чекбокса)
	if(age < 18){
		secondParam.style.display = 'block';				//Показ скротого блока
		out.style.color = '#f00';						//изменение цвета
		out.innerHTML = 'Вы младше 18 лет, доступ закрыт';				//Запись сообщения 
		document.getElementById('accompanied').onchange = function(){
			if(document.getElementById('accompanied').checked){
				out.style.color = '#26ff00';
				out.innerHTML = 'Вам меньше 18 лет, но есть сопровождающий, доступ открыт';
			}else{
				out.style.color = '#f00';
				out.innerHTML = 'Вы младше 18 лет, доступ закрыт';
			}
		}
	}else{
		if(secondParam.style.display == 'block'){
			secondParam.style.display = 'none';
		}
		out.style.color = '#26ff00';
		out.innerHTML = 'Вам 18 лет и больше, доступ открыт';
	}
}