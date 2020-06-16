let app = new Vue({
		el: '#app',
		data:{
			message:{
				open: 'Вам 18 лет и больше, доступ открыт',
				close: 'Вы младше 18 лет, доступ закрыт',
				unclose: 'Вам меньше 18 лет, но есть сопровождающий, доступ открыт'
			},
			age: null,
			result: null,
			hide: false,
			status: null,
			checks: null
		},
		methods: {
			checkAge(){
				this.status = false;
				this.checks = false;
				if(this.age < 18){
					this.result = this.message.close;
					this.status = false;
					this.hide = true;
				}else{
					this.status = true;
					this.result = this.message.open;
					this.hide = false;
				}
			},
			check(){
				this.result = this.message.unclose;
				this.status = true;
			}
		}
	})