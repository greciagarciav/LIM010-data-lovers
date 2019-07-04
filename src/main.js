const dataWorldbank = WORLDBANK;
/* ----------------------------------------------LOGIN------------------------------------------------ */
const email = document.getElementById('email');
const password = document.getElementById('password');
const sentLogin = document.getElementById('login-button');
const login = document.getElementById('login');
email.addEventListener('keypress', (event) =>{
  document.getElementById('wrong-password').classList.add('hide');  
});
login.classList.remove('hide');
sentLogin.addEventListener('click', ()=>{
  if (password.value === '' && email.value === '') {
    document.getElementById('login').classList.add('hide');
    document.getElementById('slide-show').classList.remove('hide');
    document.getElementById('header').classList.remove('hide');
    document.getElementById('footer').classList.remove('hide');
  } else {
    document.getElementById('login').classList.remove('hide');
    document.getElementById('wrong-password').classList.remove('hide');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
});
/* --------------------------------SLIDESHOW---------------------------------------------------*/
let slideIndex = 0;
const showSlides = ()=> {
  let i;
  let slides = document.getElementsByClassName('slide');
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('hide-slide');
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.remove('hide-slide');
  setTimeout(showSlides, 5000);
};
showSlides();
// eslint-disable-next-line id-length
const plusSlides = (n)=> {
  showSlides(slideIndex += n);
};
/* ----------------------------------Al hacer click en el boton explorar data-------------------------------------*/
exploreDataPeru = document.getElementById('explore-data-peru');
exploreDataPeru.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('indicator-peru').classList.remove('hide');
});
exploreDataMexico = document.getElementById('explore-data-mexico');
exploreDataMexico.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('indicator-mexico').classList.remove('hide');
});
exploreDataChile = document.getElementById('explore-data-chile');
exploreDataChile.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('indicator-chile').classList.remove('hide');
});
exploreDataBrasil = document.getElementById('explore-data-brasil');
exploreDataBrasil.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('indicator-brasil').classList.remove('hide');
});
/* ----------------------Al hacer click en el ícono de la categoria : PERU----------------------------------*/ 
const educationPeru = document.getElementById('education-peru');
educationPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-peru-education').classList.remove('hide');
});
const economyPeru = document.getElementById('economy-peru');
economyPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const workPeru = document.getElementById('work-peru');
workPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const genderPeru = document.getElementById('gender-peru');
genderPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
/* ----------------------Al hacer click en el ícono de la categoria : MEXICO----------------------------------*/ 
const educationMexico = document.getElementById('education-mexico');
educationMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const economyMexico = document.getElementById('economy-mexico');
economyMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const workMexico = document.getElementById('work-mexico');
workMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const genderMexico = document.getElementById('gender-mexico');
genderMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
/* ----------------------Al hacer click en el ícono de la categoria : CHILE----------------------------------*/ 
const educationChile = document.getElementById('education-chile');
educationMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const economyChile = document.getElementById('economy-chile');
economyChile.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const workChile = document.getElementById('work-chile');
workChile.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const genderChile = document.getElementById('gender-chile');
genderChile.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
/* ----------------------Al hacer click en el ícono de la categoria :BRASIL----------------------------------*/ 
const educationBrasil = document.getElementById('education-brasil');
educationBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const economyBrasil = document.getElementById('economy-brasil');
economyBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const workBrasil = document.getElementById('work-brasil');
workBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});
const genderBrasil = document.getElementById('gender-brasil');
genderBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
});

const access = document.getElementById('education-peru');
access.addEventListener('click',()=>{
  const indicatorsPer = window.worldbank.indicators(dataWorldbank.PER.indicators);
  //console.log(indicatorsPer.educationPer);
  const a = indicatorsPer.educationPer;
  //console.log(a);
  for ( let i = 0 ; i < a.length ; i++){
    document.getElementById('aqui').innerHTML +=`<a href="#"> ${a[i]}</a>`;
  }
});



/* Aqui en el main se va a hacer un for para recorrer las categorias*/
/*for (let i = 0 ; i < workPer.length ; i++) {
  console.log(workPer[i]);
}
*/
