document.getElementById('button-check').onclick = function(){
	let age = document.getElementById('age').value;
	let out = document.getElementById('message');
	let secondParam = document.getElementById('hide-param');
	document.getElementById('accompanied').checked = false;
	if(age < 18){
		secondParam.style.display = 'block';
		out.style.color = '#f00';
		out.innerHTML = 'Вы младше 18 лет, доступ закрыт';
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