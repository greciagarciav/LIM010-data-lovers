/* Manejo del DOM */

const email = document.getElementById('email');
const password = document.getElementById('password');
const sentLogin = document.getElementById('login-button');
const login = document.getElementById('login');

email.addEventListener('keypress', (event)  =>{
	document.getElementById('wrong-password').classList.add('hide');  
		});

login.classList.remove('hide');
sentLogin.addEventListener('click',()=>{
	if(password.value == 'LABORATORIA' && email.value == 'LABORATORIA'){
		document.getElementById('login').classList.add('hide');
		document.getElementById('cuerpo').classList.remove('hide');
	}
	else{
		document.getElementById('login').classList.remove('hide');
		document.getElementById('wrong-password').classList.remove('hide')
		document.getElementById('email').value = '';
		document.getElementById('password').value = '';
	}
});
