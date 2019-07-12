const dataWorldbank = WORLDBANK;
let indicatorsPer = [];
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

/* ----------------------------------Al hacer click en el boton explorar data-------------------------------------*/
exploreDataPeru = document.getElementById('explore-data-peru');
exploreDataPeru.addEventListener('click', ()=>{
document.getElementById('title-per').classList.remove("hide");
document.getElementById('filled').classList.remove("hide");
 showCategories('peru'); 
});

exploreDataMexico = document.getElementById('explore-data-mexico');
exploreDataMexico.addEventListener('click', ()=>{
  document.getElementById('title-mex').classList.remove("hide");
 showCategories('mexico');
});

exploreDataChile = document.getElementById('explore-data-chile');
exploreDataChile.addEventListener('click', ()=>{
  document.getElementById('title-chl').classList.remove("hide")
 showCategories('chile');
});

exploreDataBrasil = document.getElementById('explore-data-brasil');
exploreDataBrasil.addEventListener('click', ()=>{
 document.getElementById('title-bra').classList.remove("hide")
 
 showCategories('brasil');
});

function showCategories(countryId){
 document.getElementById('slide-show').classList.add('hide');
 document.getElementById('text-under-slide').classList.add('hide');
 document.getElementById('indicator').classList.remove('hide');
 document.getElementById('to-shrink').classList.add('to-shrink');
}

/* ======================Al hacer click en el ícono de la categoria : PERU===================================*/ 
const educationPeru = document.getElementById('education');
educationPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-gender').classList.add('hide');
  document.getElementById('indicator-table-work').classList.add('hide');
  document.getElementById('indicator-table-population').classList.add('hide');
  document.getElementById('indicator-table-education').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  
  indicatorsPer = window.worldbank.categorizePerCountry(WORLDBANK.PER.indicators);
  console.log(indicatorsPer.education);
  const educArrPer = indicatorsPer.education;
  
  let tableEduPer = document.getElementById("ind-education");
  tableEduPer.innerHTML = "";
  let rowHeaderEduPer = tableEduPer.insertRow(0);

  let cellHeaderEduPer1 = rowHeaderEduPer.insertCell(0);
  let cellHeaderEduPer2 = rowHeaderEduPer.insertCell(1);
  cellHeaderEduPer1.innerHTML = "N°";
  cellHeaderEduPer1.setAttribute('class', "nro"); 
  cellHeaderEduPer2.innerHTML = "Indicadores";
  cellHeaderEduPer2.setAttribute('class', "indicador");

  for ( let i = 0 ; i < educArrPer.length ; i++){
    var rowEduPer = tableEduPer.insertRow(i+1);
    var cellEduPer1 = rowEduPer.insertCell(0);
    var cellEduPer2 = rowEduPer.insertCell(1);
    cellEduPer1.innerHTML = i+1;
    cellEduPer2.innerHTML = `<a href="javascript:showDataEduPer(${i})"> ${educArrPer[i].indicatorName}</a>`;
  }
});

const showDataEduPer = (indexEduPer)=>{
  
  document.getElementById('indicator').classList.add('hide');
  document.getElementById('indicator-table-education').classList.add('hide');
  document.getElementById('showDataIndicator').classList.remove('hide');
  console.log(indicatorsPer.education[indexEduPer].data);

  let tableDataEduPer = document.getElementById("data");
    tableDataEduPer.innerHTML = "";
    let rowHeaderDataEduPer = tableDataEduPer.insertRow(0);

    let cellHeaderDataEduPer1 = rowHeaderDataEduPer.insertCell(0);
    let cellHeaderDataEduPer2 = rowHeaderDataEduPer.insertCell(1);
    cellHeaderDataEduPer1.innerHTML = "Años";
    cellHeaderDataEduPer1.setAttribute('class', "nro"); 
    cellHeaderDataEduPer2.innerHTML = "Valores";
    cellHeaderDataEduPer2.setAttribute('class', "indicador");

  let dataEduPer = indicatorsPer.education[indexEduPer].data;
  let i = 0;
  Object.entries(dataEduPer).forEach(([key, value]) => {
    if(value != ""){
      console.log(key + ' ' + value + '%'); 
    
      let rowDataEduPer = tableDataEduPer.insertRow(i+1);
      let cellDataEduPer = rowDataEduPer.insertCell(0);
      let cellDataEduPer2 = rowDataEduPer.insertCell(1);
      cellDataEduPer.innerHTML= key;
      cellDataEduPer.setAttribute('class', "nro"); 
      cellDataEduPer2.innerHTML= value;
      cellDataEduPer2.setAttribute('class', "indicador");
      i++;
    }   
});     
}

// -------------------------------------------------------
const populationPeru = document.getElementById('population');
populationPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-gender').classList.add('hide');
  document.getElementById('indicator-table-work').classList.add('hide');
  document.getElementById('indicator-table-education').classList.add('hide');
  document.getElementById('indicator-table-population').classList.remove('hide');
  indicatorsPer = window.worldbank.categorizePerCountry(WORLDBANK.PER.indicators);
  console.log(indicatorsPer.population);
  const popArrPer = indicatorsPer.population;
  
  let tablePopPer = document.getElementById("ind-population");
  tablePopPer.innerHTML = "";
  let rowHeaderPopPer = tablePopPer.insertRow(0);

  let cellHeaderPopPer1 = rowHeaderPopPer.insertCell(0);
  let cellHeaderPopPer2 = rowHeaderPopPer.insertCell(1);
  cellHeaderPopPer1.innerHTML = "N°";
  cellHeaderPopPer1.setAttribute('class', "nro"); 
  cellHeaderPopPer2.innerHTML = "Indicadores";
  cellHeaderPopPer2.setAttribute('class', "indicador");

  for ( let i = 0 ; i < popArrPer.length ; i++){
    var rowPopPer = tablePopPer.insertRow(i+1);
    var cellPopPer1 = rowPopPer.insertCell(0);
    var cellPopPer2 = rowPopPer.insertCell(1);
    cellPopPer1.innerHTML = i+1;
    cellPopPer2.innerHTML = `<a href="javascript:showDataPopPer(${i})"> ${popArrPer[i].indicatorName}</a>`;
  }
});
const showDataPopPer = (indexPopPer)=>{
  
  document.getElementById('indicator').classList.add('hide');
  document.getElementById('indicator-table-population').classList.add('hide');
  document.getElementById('showDataIndicator').classList.remove('hide');
  console.log(indicatorsPer.population[indexPopPer].data);

  let tableDataPopPer = document.getElementById("data");
    tableDataPopPer.innerHTML = "";
    let rowHeaderDataPopPer = tableDataPopPer.insertRow(0);

    let cellHeaderDataPopPer1 = rowHeaderDataPopPer.insertCell(0);
    let cellHeaderDataPopPer2 = rowHeaderDataPopPer.insertCell(1);
    cellHeaderDataPopPer1.innerHTML = "Años";
    cellHeaderDataPopPer1.setAttribute('class', "nro"); 
    cellHeaderDataPopPer2.innerHTML = "Valores";
    cellHeaderDataPopPer2.setAttribute('class', "indicador");

  let dataPopPer = indicatorsPer.population[indexPopPer].data;
  let i = 0;
  Object.entries(dataPopPer).forEach(([key, value]) => {
    if(value != ""){
      console.log(key + ' ' + value + '%'); 
    
      let rowDataPopPer = tableDataPopPer.insertRow(i+1);
      let cellDataPopPer = rowDataPopPer.insertCell(0);
      let cellDataPopPer2 = rowDataPopPer.insertCell(1);
      cellDataPopPer.innerHTML= key;
      cellDataPopPer.setAttribute('class', "nro"); 
      cellDataPopPer2.innerHTML= value;
      cellDataPopPer2.setAttribute('class', "indicador");
      i++;
    }   
});     

}
// -------------------------------------------------------
const workPeru = document.getElementById('work');
// let indicatorsPer = [];
workPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-gender').classList.add('hide');
  document.getElementById('indicator-table-education').classList.add('hide');
  document.getElementById('indicator-table-population').classList.add('hide');
  document.getElementById('indicator-table-work').classList.remove('hide');
  indicatorsPer = window.worldbank.categorizePerCountry(WORLDBANK.PER.indicators);
  console.log(indicatorsPer.work)
  const workArrPer = indicatorsPer.work;

 let tableWorkPer = document.getElementById("ind-work");
  tableWorkPer.innerHTML = "";
  let rowHeaderWorkPer = tableWorkPer.insertRow(0);
  
  let cellHeaderWorkPer1 = rowHeaderWorkPer.insertCell(0);
  let cellHeaderWorkPer2 = rowHeaderWorkPer.insertCell(1);
  cellHeaderWorkPer1.innerHTML = "N°";
  cellHeaderWorkPer1.setAttribute('class', "nro"); 
  cellHeaderWorkPer2.innerHTML = "Indicadores";
  cellHeaderWorkPer2.setAttribute('class', "indicador");

  for ( let i = 0 ; i < workArrPer.length ; i++){

    var rowWorkPer = tableWorkPer.insertRow(i+1);
    var cellWorkPer1 = rowWorkPer.insertCell(0);
    var cellWorkPer2 = rowWorkPer.insertCell(1);
    cellWorkPer1.innerHTML = i+1;
    cellWorkPer2.innerHTML = `<a href="javascript:showDataWorkPer(${i})"> ${workArrPer[i].indicatorName}</a>`;
  }
});
const showDataWorkPer = (indexWork)=>{
  
  document.getElementById('indicator').classList.add('hide');
  document.getElementById('indicator-table-work').classList.add('hide');
  document.getElementById('showDataIndicator').classList.remove('hide');
  console.log(indicatorsPer.work[indexWork].data);
 
  
  let tableDataWork = document.getElementById("data");
  tableDataWork.innerHTML = "";
  let rowHeaderDataWork = tableDataWork.insertRow(0);

  let cellHeaderDataWork1 = rowHeaderDataWork.insertCell(0);
  let cellHeaderDataWork2 = rowHeaderDataWork.insertCell(1);
  cellHeaderDataWork1.innerHTML = "Años";
  cellHeaderDataWork1.setAttribute('class', "nro"); 
  cellHeaderDataWork2.innerHTML = "Valores";
  cellHeaderDataWork2.setAttribute('class', "indicador");

  let data = indicatorsPer.work[indexWork].data;
  let i = 0;
  Object.entries(data).forEach(([key, value]) => {
    if(value != ""){
      console.log(key + ' ' + value + '%'); 
    
      let rowDataWork = tableDataWork.insertRow(i+1);
      let cellDataWork = rowDataWork.insertCell(0);
      let cellDataWork2 = rowDataWork.insertCell(1);
      cellDataWork.innerHTML= key;
      cellDataWork.setAttribute('class', "nro"); 
      cellDataWork2.innerHTML= value;
      cellDataWork2.setAttribute('class', "indicador");
      i++;
    }   
});
}
// -------------------------------------------------------------------------------------
const genderPeru = document.getElementById('gender');
// let indicatorsPer = [];
genderPeru.addEventListener('click', ()=>{
  document.getElementById('indicator-table-education').classList.add('hide');
  document.getElementById('indicator-table-population').classList.add('hide');
  document.getElementById('indicator-table-work').classList.add('hide');
  document.getElementById('indicator-table-gender').classList.remove('hide');
  indicatorsPer = window.worldbank.categorizePerCountry(WORLDBANK.PER.indicators);
  console.log(indicatorsPer.gender);
  const genArrPer = indicatorsPer.gender;

  let table = document.getElementById("ind-gender");
  table.innerHTML = "";
  let rowHeader = table.insertRow(0);
  
  let cellHeader1 = rowHeader.insertCell(0);
  let cellHeader2 = rowHeader.insertCell(1);
  cellHeader1.innerHTML = "N°";
  cellHeader1.setAttribute('class', "nro"); 
  cellHeader2.innerHTML = "Indicadores";
  cellHeader2.setAttribute('class', "indicador");

  for ( let i = 0 ; i < genArrPer.length ; i++){

    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = i+1;
    cell2.innerHTML = `<a href="javascript:showDataGenPer(${i})"> ${genArrPer[i].indicatorName}</a>`;

    // document.getElementById('ind-gen-per').appendChild(`<tr><td> 1 </td><td><a index="${i}" href="#"> ${genArrPer[i].indicatorName}</a></td></tr>`);
  }
});

const showDataGenPer = (index)=>{
  // console.log(index);
  document.getElementById('indicator').classList.add('hide');
  document.getElementById('indicator-table-gender').classList.add('hide');
  document.getElementById('showDataIndicator').classList.remove('hide');
  console.log(indicatorsPer.gender[index].data);
  // console.log(indicatorsPer.genderPer[index].indicatorName);
  
  let tableData = document.getElementById("data");
  tableData.innerHTML = "";
  let rowHeaderData = tableData.insertRow(0);

  let cellHeaderData1 = rowHeaderData.insertCell(0);
  let cellHeaderData2 = rowHeaderData.insertCell(1);
  cellHeaderData1.innerHTML = "Años";
  cellHeaderData1.setAttribute('class', "nro"); 
  cellHeaderData2.innerHTML = "Valores";
  cellHeaderData2.setAttribute('class', "indicador");

  let data = indicatorsPer.gender[index].data;
  let i = 0;
  Object.entries(data).forEach(([key, value]) => {
    if(value != ""){
      console.log(key + ' ' + value + '%'); 
    
      let rowData = tableData.insertRow(i+1);
      let cellData = rowData.insertCell(0);
      let cellData2 = rowData.insertCell(1);
      cellData.innerHTML= key;
      cellData.setAttribute('class', "nro"); 
      cellData2.innerHTML= value;
      cellData2.setAttribute('class', "indicador");
      i++;
    }   
});
}

// /* ----------------------Al hacer click en el ícono de la categoria : MEXICO----------------------------------*/ 
// const educationMexico = document.getElementById('education-mexico');
// educationMexico.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-mexico-gender').classList.add('hide');
//   document.getElementById('indicator-table-mexico-work').classList.add('hide');
//   document.getElementById('indicator-table-mexico-population').classList.add('hide');
//   document.getElementById('indicator-table-mexico-education').classList.remove('hide');
//   document.getElementById('to-shrink').classList.add('to-shrink');
//   const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
//   console.log(indicatorsMex.educationMex);
//   const educArrMex = indicatorsMex.educationMex;
//   for ( let i = 0 ; i < educArrMex.length ; i++){
//     document.getElementById('ind-educ-mex').innerHTML +=`<a href="#"> ${educArrMex[i].indicatorName}</a>`;
//   }
// });
// const populationMexico = document.getElementById('population-mexico');
// populationMexico.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-mexico-gender').classList.add('hide');
//   document.getElementById('indicator-table-mexico-work').classList.add('hide');
//   document.getElementById('indicator-table-mexico-education').classList.add('hide');
//   document.getElementById('indicator-table-mexico-population').classList.remove('hide');
//   const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
//   console.log(indicatorsMex.populationMex);
//   const popArrMex = indicatorsMex.populationMex;
//   for ( let i = 0 ; i < popArrMex.length ; i++){
//     document.getElementById('ind-pop-mex').innerHTML +=`<a href="#"> ${popArrMex[i].indicatorName}</a>`;
//   }
// });
// const workMexico = document.getElementById('work-mexico');
// workMexico.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-mexico-gender').classList.add('hide');
//   document.getElementById('indicator-table-mexico-education').classList.add('hide');
//   document.getElementById('indicator-table-mexico-population').classList.add('hide');
//   document.getElementById('indicator-table-mexico-work').classList.remove('hide');
//   const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
//   console.log(indicatorsMex.workMex);
//   const workArrMex = indicatorsMex.workMex;
//   for ( let i = 0 ; i < workArrMex.length ; i++){
//     document.getElementById('ind-work-mex').innerHTML +=`<a href="#"> ${workArrMex[i].indicatorName}</a>`;
//   }
// });
// const genderMexico = document.getElementById('gender-mexico');
// genderMexico.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-mexico-education').classList.add('hide');
//   document.getElementById('indicator-table-mexico-population').classList.add('hide');
//   document.getElementById('indicator-table-mexico-work').classList.add('hide');
//   document.getElementById('indicator-table-mexico-gender').classList.remove('hide');
//   const indicatorsMex = window.worldbank.indicatorsMexicoCategory(dataWorldbank.MEX.indicators);
//   console.log(indicatorsMex.genderMex);
//   const genArrMex = indicatorsMex.genderMex;
//   for ( let i = 0 ; i < genArrMex.length ; i++){
//     document.getElementById('ind-gen-mex').innerHTML +=`<a href="#"> ${genArrMex[i].indicatorName}</a>`;
//   }
// });
// /* ----------------------Al hacer click en el ícono de la categoria : CHILE----------------------------------*/ 
// const educationChile = document.getElementById('education-chile');
// educationChile.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-chile-gender').classList.add('hide');
//   document.getElementById('indicator-table-chile-work').classList.add('hide');
//   document.getElementById('indicator-table-chile-population').classList.add('hide');
//   document.getElementById('indicator-table-chile-education').classList.remove('hide');
//   const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
//   console.log(indicatorsChl.educationChl);
//   const educArrChl = indicatorsChl.educationChl;
//   for ( let i = 0 ; i < educArrChl.length ; i++){
//     document.getElementById('ind-educ-chl').innerHTML +=`<a href="#"> ${educArrChl[i].indicatorName}</a>`;
//   }
// });
// const populationChile = document.getElementById('population-chile');
// populationChile.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-chile-gender').classList.add('hide');
//   document.getElementById('indicator-table-chile-work').classList.add('hide');
//   document.getElementById('indicator-table-chile-education').classList.add('hide');
//   document.getElementById('indicator-table-chile-population').classList.remove('hide');
//   const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
//   console.log(indicatorsChl.populationChl);
//   const popArrChl = indicatorsChl.populationChl;
//   for ( let i = 0 ; i < popArrChl.length ; i++){
//     document.getElementById('ind-pop-chl').innerHTML +=`<a href="#"> ${popArrChl[i].indicatorName}</a>`;
//   }
// });
// const workChile = document.getElementById('work-chile');
// workChile.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-chile-gender').classList.add('hide');
//   document.getElementById('indicator-table-chile-education').classList.add('hide');
//   document.getElementById('indicator-table-chile-population').classList.add('hide');
//   document.getElementById('indicator-table-chile-work').classList.remove('hide');
//   const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
//   console.log(indicatorsChl.workChl);
//   const workArrChl = indicatorsChl.workChl;
//   for ( let i = 0 ; i < workArrChl.length ; i++){
//     document.getElementById('ind-work-chl').innerHTML +=`<a href="#"> ${workArrChl[i].indicatorName}</a>`;
//   }
// });
// const genderChile = document.getElementById('gender-chile');
// genderChile.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-chile-education').classList.add('hide');
//   document.getElementById('indicator-table-chile-population').classList.add('hide');
//   document.getElementById('indicator-table-chile-work').classList.add('hide');
//   document.getElementById('indicator-table-chile-gender').classList.remove('hide');
//   const indicatorsChl = window.worldbank.indicatorsChileCategory(dataWorldbank.CHL.indicators);
//   console.log(indicatorsChl.genderChl);
//   const genArrChl = indicatorsChl.genderChl;
//   for ( let i = 0 ; i < genArrChl.length ; i++){
//     document.getElementById('ind-gen-chl').innerHTML +=`<a href="#"> ${genArrChl[i].indicatorName}</a>`;
//   }
// });
// /* ----------------------Al hacer click en el ícono de la categoria :BRASIL----------------------------------*/ 
// const educationBrasil = document.getElementById('education-brasil');
// educationBrasil.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-brasil-gender').classList.add('hide');
//   document.getElementById('indicator-table-brasil-work').classList.add('hide');
//   document.getElementById('indicator-table-brasil-population').classList.add('hide');
//   document.getElementById('indicator-table-brasil-education').classList.remove('hide');
//   const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
//   console.log(indicatorsBra.educationBra);
//   const educArrBra = indicatorsBra.educationBra;
//   for ( let i = 0 ; i < educArrBra.length ; i++){
//     document.getElementById('ind-educ-bra').innerHTML +=`<a href="#"> ${educArrBra[i].indicatorName}</a>`;
//   }
// });
// const populationBrasil = document.getElementById('population-brasil');
// populationBrasil.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-brasil-gender').classList.add('hide');
//   document.getElementById('indicator-table-brasil-work').classList.add('hide');
//   document.getElementById('indicator-table-brasil-education').classList.add('hide');
//   document.getElementById('indicator-table-brasil-population').classList.remove('hide');
//   const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
//   console.log(indicatorsBra.populationBra);
//   const popArrBra = indicatorsBra.populationBra;
//   for ( let i = 0 ; i < popArrBra.length ; i++){
//     document.getElementById('ind-pop-bra').innerHTML +=`<a href="#"> ${popArrBra[i].indicatorName}</a>`;
//   }
// });
// const workBrasil = document.getElementById('work-brasil');
// workBrasil.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-brasil-gender').classList.add('hide');
//   document.getElementById('indicator-table-brasil-education').classList.add('hide');
//   document.getElementById('indicator-table-brasil-population').classList.add('hide');
//   document.getElementById('indicator-table-brasil-work').classList.remove('hide');
//   const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
//   console.log(indicatorsBra.workBra);
//   const workArrBra = indicatorsBra.workBra;
//   for ( let i = 0 ; i < workArrBra.length ; i++){
//     document.getElementById('ind-work-bra').innerHTML +=`<a href="#"> ${workArrBra[i].indicatorName}</a>`;
//   }
// });
// const genderBrasil = document.getElementById('gender-brasil');
// genderBrasil.addEventListener('click', ()=>{
//   document.getElementById('indicator-table-brasil-education').classList.add('hide');
//   document.getElementById('indicator-table-brasil-population').classList.add('hide');
//   document.getElementById('indicator-table-brasil-work').classList.add('hide');
//   document.getElementById('indicator-table-brasil-gender').classList.remove('hide');
//   const indicatorsBra = window.worldbank.indicatorsBrasilCategory(dataWorldbank.BRA.indicators);
//   console.log(indicatorsBra.genderBra);
//   const genArrBra = indicatorsBra.genderBra;
//   for ( let i = 0 ; i < genArrBra.length ; i++){
//     document.getElementById('ind-gen-bra').innerHTML +=`<a href="#"> ${genArrBra[i].indicatorName}</a>`;
//   }
// });
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