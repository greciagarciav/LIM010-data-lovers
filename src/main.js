let globalCountry = [];
let globalCategories = [];
let globalCategory = [];
let globalData = [];

/* ===================================================== LOGIN ================================================ */
const inputUser = document.getElementById('input-user');
const inputPassword = document.getElementById('input-password');
const btnGetLogin = document.getElementById('btn-login');
const sectionLogin = document.getElementById('section-login');

inputPassword.addEventListener('keypress', (event) =>{
  document.getElementById('lbl-wrong-password').classList.add('hide');  
  if (event.keyCode === 13) {
    btnGetLogin.click(inputPassword.value);
  }   
});

sectionLogin.classList.remove('hide');
btnGetLogin.addEventListener('click', ()=>{
  if (inputPassword.value === '' && inputUser.value === '') {
    document.getElementById('section-login').classList.add('hide');
    document.getElementById('section-frame').classList.remove('hide');
    document.getElementById('text-in-frame').classList.remove('hide');
    document.getElementById('header').classList.remove('hide');
    document.getElementById('footer').classList.remove('hide');
  } else {
    document.getElementById('section-login').classList.remove('hide');
    document.getElementById('lbl-wrong-password').classList.remove('hide');
    document.getElementById('input-user').value = '';
    document.getElementById('input-password').value = '';
  }
});

/* ====================================== FUNCIÓN QUE CREA LAS CATEGORIAS =================================== */
const categorizePerCountry = (countryIndicators) => {
  let education = [];
  let population = [];
  let work = [];
  let gender = [];
  for (let i = 0; i < countryIndicators.length ; i++) {
    if (countryIndicators[i].indicatorCode.split('.')[0] === 'SE') {
      education.push(countryIndicators[i]);
    } else if (countryIndicators[i].indicatorCode.split('.')[0] === 'SP' || countryIndicators[i].indicatorCode.split('.')[0] === 'IC' || countryIndicators[i].indicatorCode.split('.')[0] === 'SH') {
      population.push(countryIndicators[i]);
    } else if (countryIndicators[i].indicatorCode.split('.')[0] === 'SL' || countryIndicators[i].indicatorCode.split('_')[0] === 'per' || countryIndicators[i].indicatorCode.split('.')[0] === 'HD' || countryIndicators[i].indicatorCode.split('.')[0] === 'MS' || countryIndicators[i].indicatorCode.split('.')[0] === 'DT') {
      work.push(countryIndicators[i]);
    } else if (countryIndicators[i].indicatorCode.split('.')[0] === 'SG') {
      gender.push(countryIndicators[i]);
    }
  }
  return {education: education,
    population: population,
    work: work,
    gender: gender};
};

/* ================================== FUNCIÓN QUE MUESTRA LAS CATEGORIAS =================================== */
const showCategories = (countryId) => {

  switch (countryId) {
    case 'peru':
      globalCountry = WORLDBANK.PER.indicators;   
      break;
    case 'mexico':
      globalCountry = WORLDBANK.MEX.indicators;
      break;
    case 'brasil':
      globalCountry = WORLDBANK.BRA.indicators;
      break;
    case 'chile':
      globalCountry = WORLDBANK.CHL.indicators;
      break;
    }

  globalCategories = categorizePerCountry(globalCountry);
  document.getElementById('section-frame').classList.add('hide');
  document.getElementById('text-in-frame').classList.add('hide');
  document.getElementById('indicator').classList.remove('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('average-result').innerHTML = '';
  document.getElementById('filled').classList.remove('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.add('hide');
};
/* ========================================== MUESTRA LAS CATEGORIAS POR PAÍS =============================== */
const titlePerCountry = (countryId)=>{
  document.getElementById('title-peru').classList.add('hide');
  document.getElementById('title-mexico').classList.add('hide');
  document.getElementById('title-brasil').classList.add('hide');
  document.getElementById('title-chile').classList.add('hide');
  document.getElementById('title-' + countryId).classList.remove('hide');
}

// ------------------------- Perú ------------------------------------
const exploreDataPeru = document.getElementById('explore-data-peru');
exploreDataPeru.addEventListener('click', () => {
  titlePerCountry('peru');
  showCategories('peru'); 
});

document.getElementById('go-peru').addEventListener('click', ()=>{
  titlePerCountry('peru');
  showCategories('peru'); 
});
// ------------------------- México ---------------------------------
const exploreDataMexico = document.getElementById('explore-data-mexico');
exploreDataMexico.addEventListener('click', () => {
  titlePerCountry('mexico');
  showCategories('mexico');
});

document.getElementById('go-mexico').addEventListener('click', ()=>{
  titlePerCountry('mexico');
  showCategories('mexico');
});
// ------------------------- Brasil ----------------------------------
const exploreDataBrasil = document.getElementById('explore-data-brasil');
exploreDataBrasil.addEventListener('click', () => {
  titlePerCountry('brasil');
  showCategories('brasil');
});

document.getElementById('go-brasil').addEventListener('click', ()=>{
  titlePerCountry('brasil');
  showCategories('brasil');
});
//  ------------------------ Chile -----------------------------------
const exploreDataChile = document.getElementById('explore-data-chile');
exploreDataChile.addEventListener('click', () => {
  titlePerCountry('chile');
  showCategories('chile');
});

document.getElementById('go-chile').addEventListener('click', ()=>{
  titlePerCountry('chile');
  showCategories('chile');
});

/* ============================== FUNCIÓN QUE CREA LA TABLA CON INDICADORES SEGÚN CATEGORIA =============================*/
const createTableIndicatorCategory = (arrCategory) => {
  globalCategory = arrCategory;
  tableIndicatorCategory.innerHTML = '';
  let table = `<thead>
                <tr>
                  <th class="nro1">N°</th>
                  <th class="indicador1">Indicadores</th>
                </tr>
               </thead>`;
  for (let i = 0 ; i < arrCategory.length ; i++) {
    table = table + `<tr>
                          <td class="nro2">${ i + 1 } </td>
                          <td class="indicador2">
                            <a class="indicator-style" href="javascript:showData(${ i })"> ${ arrCategory[i].indicatorName }</a>
                          </td>
                       </tr>`;
  }
  table = table + '</tbody>';
  tableIndicatorCategory.innerHTML = table;
};

/* ============================ MUESTRA TABLA CON INDICADORES SEGÚN CATEGORIA SELECCIONADA ============================= */ 
const tableIndicatorCategory = document.getElementById('category'); 
const tableData = document.getElementById('data');

const showCategoryTitle = (categoryTitle)=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('category-title').innerHTML = categoryTitle; 
}

// --------------------------Educación-------------------------------
const education = document.getElementById('education');
education.addEventListener('click', ()=>{
  showCategoryTitle('EDUCACIÓN');
  const educArr = globalCategories.education;
  createTableIndicatorCategory(educArr);
});
// ---------------------------Población------------------------------
const population = document.getElementById('population');
population.addEventListener('click', ()=>{
  showCategoryTitle('POBLACIÓN');
  const popArr = globalCategories.population;
  createTableIndicatorCategory(popArr);
});
// ------------------------------Trabajo-----------------------------
const work = document.getElementById('work');
work.addEventListener('click', ()=>{
  showCategoryTitle('TRABAJO');
  const workArr = globalCategories.work;
  createTableIndicatorCategory(workArr);
});
// ------------------------------Género------------------------------
const gender = document.getElementById('gender');
gender.addEventListener('click', () => {
  showCategoryTitle('GÉNERO');
  const genArr = globalCategories.gender;
  createTableIndicatorCategory(genArr);
});

/* ================================ FUNCIÓN QUE CREA LA TABLA DE DATA POR INDICADOR ================================= */
let valuePerIndicator = [];
const createTableData = (arrData) =>{
  globalData = arrData;
  tableData.innerHTML = '';
  let table = `
              <thead>
                <tr>
                  <th class="nro3">Años</th>
                  <th class="indicador3">Valores</th>
                </tr>
              </thead>`;
  let percent = [];
  valuePerIndicator = percent;
  arrData.forEach(([key, value]) => {
    if (value !== '') {
      table = table + `<tbody class="bordes"> <tr>
                      <td class="nro4">${ key } </td>
                      <td class="indicador4">${ value.toFixed(2) } </td>
                    </tr>`;
      let valor = value;
      percent.push(valor);
    }   
  });
  table = table + '</tbody >';
  tableData.innerHTML = table;
}; 

/* ============================================= MUESTRA LA TABLA DE DATA =========================================== */
const showData = (index) => {
  document.getElementById('average-btn').classList.remove('hide');
  document.getElementById('average-result').classList.remove('hide');
  document.getElementById('indicator').classList.add('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.remove('hide');
  let arrData = Object.entries(globalCategory[index].data);
  document.getElementById('indicator-title-data').innerHTML = globalCategory[index].countryName.toUpperCase() + ': ' + globalCategory[index].indicatorName;
  createTableData(arrData);
};

/* ==================================== MUESTRA EL PROMEDIO DE LOS VALORES DE LA DATA ================================ */
document.getElementById('average-btn').addEventListener('click', () => {
  let resultadoPromedio = window.worldbank.averageValue(valuePerIndicator);
  document.getElementById('average-result').innerHTML = 'EL PROMEDIO ES : ' + resultadoPromedio.toFixed(2) + ' %';
});

/* ========================================= MUESTRA LA DATA ORDENADA  =============================================== */
document.getElementById('sort-btn').addEventListener('click', () => {
  let typeSelected = document.getElementById('data-type').value;
  let orderSelected = document.getElementById('order-type').value;
  let arrData = globalData;
  let arrSort = window.worldbank.sortArrData(arrData, typeSelected, orderSelected);
  createTableData(arrSort);
});

/* ================================ MUESTRA EL FILTRADO DE LA DATA POR RANGO DE AÑOS ================================= */
document.getElementById('initial-year').addEventListener('keypress', () =>{
  document.getElementById('enter-a-year').classList.add('hide');
});

document.getElementById('filter-btn').addEventListener('click', () =>{
  let initialYear = document.getElementById('initial-year').value;
  let finalYear = document.getElementById('final-year').value;
  if (initialYear !== '' && finalYear !== '') {
    document.getElementById('average-btn').classList.add('hide');
    document.getElementById('average-result').classList.add('hide');
    let arrData = globalData;
    let arrFilt = window.worldbank.filter(arrData, initialYear, finalYear);
    createTableData(arrFilt);
  } else {
    document.getElementById('enter-a-year').classList.remove('hide');
  }  
});
