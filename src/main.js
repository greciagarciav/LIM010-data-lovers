let globalCountry = [];
let globalCategories = [];
let globalCategory = [];
let globalData = [];

/* ====================================================== LOGIN ======================================================== */
const email = document.getElementById('email');
const password = document.getElementById('password');
const sentLogin = document.getElementById('login-button');
const login = document.getElementById('login');
password.addEventListener('keypress', (event) =>{
  document.getElementById('wrong-password').classList.add('hide');  
  if (event.keyCode === 13) {
    sentLogin.click(password.value);
  }   
});
login.classList.remove('hide');
sentLogin.addEventListener('click', ()=>{
  if (password.value === '' && email.value === '') {
    document.getElementById('login').classList.add('hide');
    document.getElementById('frame').classList.remove('hide');
    document.getElementById('text-under-frame').classList.remove('hide');
    document.getElementById('header').classList.remove('hide');
    document.getElementById('footer').classList.remove('hide');
  } else {
    document.getElementById('login').classList.remove('hide');
    document.getElementById('wrong-password').classList.remove('hide');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
});

/* ========================================== AL HACER CLICK EN LA IMAGEN DE CADA PAÍS ================================= */
// ------------------------- Perú ------------------------------------
exploreDataPeru = document.getElementById('explore-data-peru');
exploreDataPeru.addEventListener('click', () => {
  document.getElementById('title-per').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('peru'); 
  globalCountry = WORLDBANK.PER.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});
document.getElementById('go-peru').addEventListener('click', ()=>{
  document.getElementById('title-per').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.add('hide');
  document.getElementById('title-mex').classList.add('hide');
  document.getElementById('title-bra').classList.add('hide');
  document.getElementById('title-chl').classList.add('hide');
  showCategories('peru'); 
  globalCountry = WORLDBANK.PER.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});
// ------------------------- México ---------------------------------
exploreDataMexico = document.getElementById('explore-data-mexico');
exploreDataMexico.addEventListener('click', () => {
  document.getElementById('title-mex').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('mexico');
  globalCountry = WORLDBANK.MEX.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});
document.getElementById('go-mexico').addEventListener('click', ()=>{
  document.getElementById('title-mex').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.add('hide');
  document.getElementById('title-per').classList.add('hide');
  document.getElementById('title-bra').classList.add('hide');
  document.getElementById('title-chl').classList.add('hide');
  showCategories('mexico');
  globalCountry = WORLDBANK.MEX.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});
// ------------------------- Brasil ----------------------------------
exploreDataBrasil = document.getElementById('explore-data-brasil');
exploreDataBrasil.addEventListener('click', () => {
  document.getElementById('title-bra').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('brasil');
  globalCountry = WORLDBANK.BRA.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});
document.getElementById('go-brasil').addEventListener('click', ()=>{
  document.getElementById('title-bra').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.add('hide');
  document.getElementById('title-per').classList.add('hide');
  document.getElementById('title-mex').classList.add('hide');
  document.getElementById('title-chl').classList.add('hide');
  showCategories('bra');
  globalCountry = WORLDBANK.BRA.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});
//  ------------------------ Chile -----------------------------------
exploreDataChile = document.getElementById('explore-data-chile');
exploreDataChile.addEventListener('click', () => {
  document.getElementById('title-chl').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('chile');
  globalCountry = WORLDBANK.CHL.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});
document.getElementById('go-chile').addEventListener('click', ()=>{
  document.getElementById('title-chl').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.add('hide');
  document.getElementById('title-per').classList.add('hide');
  document.getElementById('title-mex').classList.add('hide');
  document.getElementById('title-bra').classList.add('hide');
  showCategories('chile');
  globalCountry = WORLDBANK.CHL.indicators;
  globalCategories = categorizePerCountry(globalCountry);
});

/* ============================================== FUNCIÓN DE CATEGORIZACIÓN =========================================== */
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

/* ===================================== FUNCIÓN QUE MUESTRA LAS CATEGORIAS =========================================== */
const showCategories = (countryId) => {
  document.getElementById('frame').classList.add('hide');
  document.getElementById('text-under-frame').classList.add('hide');
  document.getElementById('indicator').classList.remove('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
};

/* ====================================== AL HACER CLICK EN EL ICONO DE LA CATEGORIA ================================== */ 
const tableIndicatorCategory = document.getElementById('category'); 
const tableData = document.getElementById('data');
// --------------------------Educación-------------------------------
const education = document.getElementById('education');
education.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'EDUCACIÓN'; 
  const educArr = globalCategories.education;
  createTableIndicatorCategory(educArr);
});
// ---------------------------Población------------------------------
const population = document.getElementById('population');
population.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'POBLACIÓN'; 
  const popArr = globalCategories.population;
  createTableIndicatorCategory(popArr);
});
// ------------------------------Trabajo-----------------------------
const work = document.getElementById('work');
work.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'TRABAJO'; 
  const workArr = globalCategories.work;
  createTableIndicatorCategory(workArr);
});
// ------------------------------Género------------------------------
const gender = document.getElementById('gender');
gender.addEventListener('click', () => {
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'GÉNERO'; 
  const genArr = globalCategories.gender;
  createTableIndicatorCategory(genArr);
});

/* ================================= FUNCIÓN QUE CREA LA TABLA DE CATEGORIAS ===========================================*/
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
                            <a href="javascript:showData(${ i })"> ${ arrCategory[i].indicatorName }</a>
                          </td>
                       </tr>`;
  }
  table = table + '</tbody>';
  tableIndicatorCategory.innerHTML = table;
};

/* =====================================  FUNCIÓN QUE CREA LA TABLA DE DATA =========================================== */
let valuePerIndicator = [];
let years = [];
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
  let year = [];
  valuePerIndicator = percent;
  years = year;
  arrData.forEach(([key, value]) => {
    if (value !== '') {
      table = table + `<tbody class="bordes"> <tr>
                      <td class="nro4">${ key } </td>
                      <td class="indicador4">${ value.toFixed(2) } % </td>
                    </tr>`;
      let valor = value;
      let valores = key;
      percent.push(valor);
      year.push(valores);
    }   
  });
  table = table + '</tbody >';
  tableData.innerHTML = table;
}; 

/* =====================================  FUNCIÓN QUE MUESTRA LA TABLA DE DATA ========================================= */
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

/* ======================================= FUNCIÓN QUE MUESTRA EL PROMEDIO ============================================= */
document.getElementById('average-btn').addEventListener('click', (event) => {
  event.preventDefault();
  let resultadoPromedio = window.worldbank.averageValue(valuePerIndicator);
  document.getElementById('average-result').innerHTML = 'EL PROMEDIO ES : ' + resultadoPromedio.toFixed(2) + ' %';
});

/* =========================================  FUNCIÓN QUE ORDENA LA DATA =============================================== */
document.getElementById('sort-btn').addEventListener('click', () => {
  let typeSelected = document.getElementById('data-type').value;
  let orderSelected = document.getElementById('order-type').value;
  let arrData = globalData;
  let arrSort = window.worldbank.sortArrData(arrData, typeSelected, orderSelected);
  createTableData(arrSort);
});

/* =====================================  FUNCIÓN QUE FILTRA LA DATA POR RANGO DE AÑOS ================================= */
document.getElementById('filter-btn').addEventListener('click', () =>{
  document.getElementById('average-btn').classList.add('hide');
  document.getElementById('average-result').classList.add('hide');
  let initialYear = document.getElementById('initial-year').value;
  let finalYear = document.getElementById('final-year').value;
  let arrData = globalData;
  let arrFilt = window.worldbank.filter(arrData, initialYear, finalYear);
  createTableData(arrFilt);
});