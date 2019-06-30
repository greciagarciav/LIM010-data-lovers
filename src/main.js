/* Manejo del DOM */
const indexBrasil = WORLDBANK.BRA.indicators;
const indexChile = WORLDBANK.CHL.indicators;
const indexPeru = WORLDBANK.PER.indicators;
const indexMexico = WORLDBANK.MEX.indicators;
const contenedor = document.getElementById("contenedor"); 

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
		document.getElementById('slide-show').classList.remove('hide');
    document.getElementById('header').classList.remove('hide');
    document.getElementById('footer').classList.remove('hide');
	}
	else{
		document.getElementById('login').classList.remove('hide');
		document.getElementById('wrong-password').classList.remove('hide')
		document.getElementById('email').value = '';
		document.getElementById('password').value = '';
	}
});
/*--------------------------------SLIDESHOW---------------------------------------------------*/
/*let slideIndex = 0;
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
*/
/*
const nextBrasil = document.getElementById('next-img-brasil');
const nextChile = document.getElementById('next-img-chile');
const nextMexico = document.getElementById('next-img-mexico');
const nextPeru = document.getElementById('next-img-peru');

const imgBrasil = document.getElementById('img-brasil');
const imgChile = document.getElementById('img-chile');
const imgMexico = document.getElementById('img-mexico');
const imgPeru = document.getElementById('img-peru');

imgBrasil.classList.remove('hide')
nextBrasil.classList.remove('hide');

nextBrasil.addEventListener('click',()=>{
  imgBrasil.classList.add('hide');
  imgChile.classList.remove('hide');
  nextBrasil.classList.add('hide');
  nextChile.classList.remove('hide');
});
nextChile.addEventListener('click',()=>{
  imgChile.classList.add('hide');
  imgMexico.classList.remove('hide');
  nextChile.classList.add('hide');
  nextMexico.classList.remove('hide');
});
nextMexico.addEventListener('click',()=>{
  imgMexico.classList.add('hide');
  imgPeru.classList.remove('hide');
  nextMexico.classList.add('hide');
  nextPeru.classList.remove('hide');
});
nextPeru.addEventListener('click',()=>{
  imgPeru.classList.add('hide');
  imgBrasil.classList.remove('hide');
  nextPeru.classList.add('hide');
  nextBrasil.classList.remove('hide');
});
*/

let slideIndex = 0;
const showSlides=()=> {
       let i;
       let slides = document.getElementsByClassName("slide");
       for (i = 0; i < slides.length; i++) {
       slides[i].classList.add('hide-slide');
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].classList.remove('hide-slide');
       setTimeout(showSlides,5000);
};
showSlides();
const plusSlides=(n)=> {
  showSlides(slideIndex += n);
}




/*-------------------------------------------------------------------------------------------*/
const mostrarBancoMundial = (data) => {
     let mostrar = '';
     for(let i = 0; i< data.length; i++){
         let llamado = `<p>Indicador : ${data[i].indicatorName}</p>`;
         
         mostrar+= llamado;
    }
    return mostrar;

 };
contenedor1.innerHTML = mostrarBancoMundial(indexPeru);
contenedor2.innerHTML = mostrarBancoMundial(indexMexico);
contenedor3.innerHTML = mostrarBancoMundial(indexChile);
contenedor4.innerHTML = mostrarBancoMundial(indexBrasil);
