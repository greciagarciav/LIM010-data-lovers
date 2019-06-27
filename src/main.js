/* Manejo del DOM */
const email = document.getElementById('email');
const password = document.getElementById('password');
const sentLogin = document.getElementById('login-button');
const login = document.getElementById('login');
login.classList.remove('hide');
sentLogin.addEventListener('click',()=>{
	if(password.value == 'LABORATORIA' && email.value == 'LABORATORIA'){
		document.getElementById('login').classList.add('hide');
		document.getElementById('cuerpo').classList.remove('hide');
	}
	else{
		document.getElementById('login').classList.remove('hide');
		
	}
});
