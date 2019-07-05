const dataWorldbank = WORLDBANK;
/* ----------------------------------------------LOGIN------------------------------------------------- */
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
    document.getElementById('text-under-slide').classList.remove('hide');
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
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


/*
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
*/
/* ----------------------------------Al hacer click en el boton explorar data-------------------------------------*/
exploreDataPeru = document.getElementById('explore-data-peru');
exploreDataPeru.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('text-under-slide').classList.add('hide');
  document.getElementById('indicator-peru').classList.remove('hide');
  document.getElementById('text-apoyo').classList.remove('hide');
  document.getElementById('to-shrink').classList.remove('to-shrink');
});
exploreDataMexico = document.getElementById('explore-data-mexico');
exploreDataMexico.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('text-under-slide').classList.add('hide');
  document.getElementById('indicator-mexico').classList.remove('hide');
  document.getElementById('text-apoyo').classList.remove('hide');
  document.getElementById('to-shrink').classList.remove('to-shrink');
});
exploreDataChile = document.getElementById('explore-data-chile');
exploreDataChile.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('text-under-slide').classList.add('hide');
  document.getElementById('indicator-chile').classList.remove('hide');
  document.getElementById('text-apoyo').classList.remove('hide');
  document.getElementById('to-shrink').classList.remove('to-shrink');
});
exploreDataBrasil = document.getElementById('explore-data-brasil');
exploreDataBrasil.addEventListener('click', ()=>{
  document.getElementById('slide-show').classList.add('hide');
  document.getElementById('text-under-slide').classList.add('hide');
  document.getElementById('indicator-brasil').classList.remove('hide');
  document.getElementById('text-apoyo').classList.remove('hide');
  document.getElementById('to-shrink').classList.remove('to-shrink');
});


/* ======================Al hacer click en el ícono de la categoria : PERU===================================*/ 
const educationPeru = document.getElementById('education-peru');
educationPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-peru-gender').classList.add('hide');
  document.getElementById('indicator-table-peru-work').classList.add('hide');
  document.getElementById('indicator-table-peru-population').classList.add('hide');
  document.getElementById('indicator-table-peru-education').classList.remove('hide');
  document.getElementById('text-apoyo').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  const indicatorsPer = window.worldbank.indicatorsPeruCategory(dataWorldbank.PER.indicators);
  console.log(indicatorsPer.educationPer);
  const educArrPer = indicatorsPer.educationPer;
  for ( let i = 0 ; i < educArrPer.length ; i++){
    document.getElementById('ind-educ-per').innerHTML +=`<a href="#">- ${educArrPer[i]}</a>`;
  }
});
const populationPeru = document.getElementById('population-peru');
populationPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-peru-gender').classList.add('hide');
  document.getElementById('indicator-table-peru-work').classList.add('hide');
  document.getElementById('indicator-table-peru-education').classList.add('hide');
  document.getElementById('indicator-table-peru-population').classList.remove('hide');
  document.getElementById('text-apoyo').classList.add('hide');
  const indicatorsPer = window.worldbank.indicatorsPeruCategory(dataWorldbank.PER.indicators);
  console.log(indicatorsPer.populationPer);
  const popArrPer = indicatorsPer.populationPer;
  for ( let i = 0 ; i < popArrPer.length ; i++){
    document.getElementById('ind-pop-per').innerHTML +=`<a href="#"> ${popArrPer[i]}</a>`;
  }
});
const workPeru = document.getElementById('work-peru');
workPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-peru-gender').classList.add('hide');
  document.getElementById('indicator-table-peru-education').classList.add('hide');
  document.getElementById('indicator-table-peru-population').classList.add('hide');
  document.getElementById('indicator-table-peru-work').classList.remove('hide');
  const indicatorsPer = window.worldbank.indicatorsPeruCategory(dataWorldbank.PER.indicators);
  console.log(indicatorsPer.workPer)
  const workArrPer = indicatorsPer.workPer;
  for ( let i = 0 ; i < workArrPer.length ; i++){
    document.getElementById('ind-work-per').innerHTML +=`<a href="#"> ${workArrPer[i]}</a>`;
  }
});
const genderPeru = document.getElementById('gender-peru');
genderPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-peru-education').classList.add('hide');
  document.getElementById('indicator-table-peru-population').classList.add('hide');
  document.getElementById('indicator-table-peru-work').classList.add('hide');
  document.getElementById('indicator-table-peru-gender').classList.remove('hide');
  const indicatorsPer = window.worldbank.indicatorsPeruCategory(dataWorldbank.PER.indicators);
  console.log(indicatorsPer.genderPer);
  const genArrPer = indicatorsPer.genderPer;
  for ( let i = 0 ; i < genArrPer.length ; i++){
    document.getElementById('ind-gen-per').innerHTML +=`<a href="#"> ${genArrPer[i]}</a>`;
  }
});

/* ----------------------Al hacer click en el ícono de la categoria : MEXICO----------------------------------*/ 
const educationMexico = document.getElementById('education-mexico');
educationMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table-mexico-gender').classList.add('hide');
  document.getElementById('indicator-table-mexico-work').classList.add('hide');
  document.getElementById('indicator-table-mexico-population').classList.add('hide');
  document.getElementById('indicator-table-mexico-education').classList.remove('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
  console.log(indicatorsMex.educationMex);
  const educArrMex = indicatorsMex.educationMex;
  for ( let i = 0 ; i < educArrMex.length ; i++){
    document.getElementById('ind-educ-mex').innerHTML +=`<a href="#"> ${educArrMex[i]}</a>`;
  }
});
const populationMexico = document.getElementById('population-mexico');
populationMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table-mexico-gender').classList.add('hide');
  document.getElementById('indicator-table-mexico-work').classList.add('hide');
  document.getElementById('indicator-table-mexico-education').classList.add('hide');
  document.getElementById('indicator-table-mexico-population').classList.remove('hide');
  const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
  console.log(indicatorsMex.populationMex);
  const popArrMex = indicatorsMex.populationMex;
  for ( let i = 0 ; i < popArrMex.length ; i++){
    document.getElementById('ind-pop-mex').innerHTML +=`<a href="#"> ${popArrMex[i]}</a>`;
  }
});
const workMexico = document.getElementById('work-mexico');
workMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table-mexico-gender').classList.add('hide');
  document.getElementById('indicator-table-mexico-education').classList.add('hide');
  document.getElementById('indicator-table-mexico-population').classList.add('hide');
  document.getElementById('indicator-table-mexico-work').classList.remove('hide');
  const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
  console.log(indicatorsMex.workMex);
  const workArrMex = indicatorsMex.workMex;
  for ( let i = 0 ; i < workArrMex.length ; i++){
    document.getElementById('ind-work-mex').innerHTML +=`<a href="#"> ${workArrMex[i]}</a>`;
  }
});
const genderMexico = document.getElementById('gender-mexico');
genderMexico.addEventListener('click', ()=>{
  document.getElementById('indicator-table-mexico-education').classList.add('hide');
  document.getElementById('indicator-table-mexico-population').classList.add('hide');
  document.getElementById('indicator-table-mexico-work').classList.add('hide');
  document.getElementById('indicator-table-mexico-gender').classList.remove('hide');
  const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
  console.log(indicatorsMex.genderMex);
  const genArrMex = indicatorsMex.genderMex;
  for ( let i = 0 ; i < genArrMex.length ; i++){
    document.getElementById('ind-gen-mex').innerHTML +=`<a href="#"> ${genArrMex[i]}</a>`;
  }
});
/* ----------------------Al hacer click en el ícono de la categoria : CHILE----------------------------------*/ 
const educationChile = document.getElementById('education-chile');
educationChile.addEventListener('click', ()=>{
  document.getElementById('indicator-table-chile-gender').classList.add('hide');
  document.getElementById('indicator-table-chile-work').classList.add('hide');
  document.getElementById('indicator-table-chile-population').classList.add('hide');
  document.getElementById('indicator-table-chile-education').classList.remove('hide');
  const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
  console.log(indicatorsChl.educationChl);
  const educArrChl = indicatorsChl.educationChl;
  for ( let i = 0 ; i < educArrChl.length ; i++){
    document.getElementById('ind-educ-chl').innerHTML +=`<a href="#"> ${educArrChl[i]}</a>`;
  }
});
const populationChile = document.getElementById('population-chile');
populationChile.addEventListener('click', ()=>{
  document.getElementById('indicator-table-chile-gender').classList.add('hide');
  document.getElementById('indicator-table-chile-work').classList.add('hide');
  document.getElementById('indicator-table-chile-education').classList.add('hide');
  document.getElementById('indicator-table-chile-population').classList.remove('hide');
  const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
  console.log(indicatorsChl.populationChl);
  const popArrChl = indicatorsChl.populationChl;
  for ( let i = 0 ; i < popArrChl.length ; i++){
    document.getElementById('ind-pop-chl').innerHTML +=`<a href="#"> ${popArrChl[i]}</a>`;
  }
});
const workChile = document.getElementById('work-chile');
workChile.addEventListener('click', ()=>{
  document.getElementById('indicator-table-chile-gender').classList.add('hide');
  document.getElementById('indicator-table-chile-education').classList.add('hide');
  document.getElementById('indicator-table-chile-population').classList.add('hide');
  document.getElementById('indicator-table-chile-work').classList.remove('hide');
  const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
  console.log(indicatorsChl.workChl);
  const workArrChl = indicatorsChl.workChl;
  for ( let i = 0 ; i < workArrChl.length ; i++){
    document.getElementById('ind-work-chl').innerHTML +=`<a href="#"> ${workArrChl[i]}</a>`;
  }
});
const genderChile = document.getElementById('gender-chile');
genderChile.addEventListener('click', ()=>{
  document.getElementById('indicator-table-chile-education').classList.add('hide');
  document.getElementById('indicator-table-chile-population').classList.add('hide');
  document.getElementById('indicator-table-chile-work').classList.add('hide');
  document.getElementById('indicator-table-chile-gender').classList.remove('hide');
  const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
  console.log(indicatorsChl.genderChl);
  const genArrChl = indicatorsChl.genderChl;
  for ( let i = 0 ; i < genArrChl.length ; i++){
    document.getElementById('ind-gen-chl').innerHTML +=`<a href="#"> ${genArrChl[i]}</a>`;
  }
});
/* ----------------------Al hacer click en el ícono de la categoria :BRASIL----------------------------------*/ 
const educationBrasil = document.getElementById('education-brasil');
educationBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table-brasil-gender').classList.add('hide');
  document.getElementById('indicator-table-brasil-work').classList.add('hide');
  document.getElementById('indicator-table-brasil-population').classList.add('hide');
  document.getElementById('indicator-table-brasil-education').classList.remove('hide');
  const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
  console.log(indicatorsBra.educationBra);
  const educArrBra = indicatorsBra.educationBra;
  for ( let i = 0 ; i < educArrBra.length ; i++){
    document.getElementById('ind-educ-bra').innerHTML +=`<a href="#"> ${educArrBra[i]}</a>`;
  }
});
const populationBrasil = document.getElementById('population-brasil');
populationBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table-brasil-gender').classList.add('hide');
  document.getElementById('indicator-table-brasil-work').classList.add('hide');
  document.getElementById('indicator-table-brasil-education').classList.add('hide');
  document.getElementById('indicator-table-brasil-population').classList.remove('hide');
  const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
  console.log(indicatorsBra.populationBra);
  const popArrBra = indicatorsBra.populationBra;
  for ( let i = 0 ; i < popArrBra.length ; i++){
    document.getElementById('ind-pop-bra').innerHTML +=`<a href="#"> ${popArrBra[i]}</a>`;
  }
});
const workBrasil = document.getElementById('work-brasil');
workBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table-brasil-gender').classList.add('hide');
  document.getElementById('indicator-table-brasil-education').classList.add('hide');
  document.getElementById('indicator-table-brasil-population').classList.add('hide');
  document.getElementById('indicator-table-brasil-work').classList.remove('hide');
  const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
  console.log(indicatorsBra.workBra);
  const workArrBra = indicatorsBra.workBra;
  for ( let i = 0 ; i < workArrBra.length ; i++){
    document.getElementById('ind-work-bra').innerHTML +=`<a href="#"> ${workArrBra[i]}</a>`;
  }
});
const genderBrasil = document.getElementById('gender-brasil');
genderBrasil.addEventListener('click', ()=>{
  document.getElementById('indicator-table-brasil-education').classList.add('hide');
  document.getElementById('indicator-table-brasil-population').classList.add('hide');
  document.getElementById('indicator-table-brasil-work').classList.add('hide');
  document.getElementById('indicator-table-brasil-gender').classList.remove('hide');
  const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
  console.log(indicatorsBra.genderBra);
  const genArrBra = indicatorsBra.genderBra;
  for ( let i = 0 ; i < genArrBra.length ; i++){
    document.getElementById('ind-gen-bra').innerHTML +=`<a href="#"> ${genArrBra[i]}</a>`;
  }
});
/*
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
*/