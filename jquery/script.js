$(document).on('click', '#button-check', function(){
	let age = $('#age').val();
	let out = $('#message');
	let secondParam = $('#hide-param');
	$('#accompanied').prop('checked', false);
	if(age < 18){
		secondParam.css({'display':'block'});
		out.css({'color':'#f00'});
		out.html('Вы младше 18 лет, доступ закрыт');
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