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
	if(password.value == '' && email.value == ''){
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
/*--------------------------------SLIDESHOW---------------------------------------------------*/
let slideIndex = 0;
const showSlides=()=> {
       let i;
       let slides = document.getElementsByClassName("slide");
       for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       lides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,2000);
};
