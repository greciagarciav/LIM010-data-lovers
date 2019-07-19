const dataWorldbank = WORLDBANK;
let globalCountry = [];
let globalCategories = [];
let globalCategory = [];
let globalData = [];
/* =======================================================Login ======================================================== */
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
/* ===========================================Al hacer click en el boton explorar data===================================*/
exploreDataPeru = document.getElementById('explore-data-peru');
exploreDataPeru.addEventListener('click', () => {
  document.getElementById('title-per').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('peru'); 
  globalCountry = WORLDBANK.PER.indicators;
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
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
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
});
// --------------------------------------------------------------------------------------
exploreDataMexico = document.getElementById('explore-data-mexico');
exploreDataMexico.addEventListener('click', () => {
  document.getElementById('title-mex').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('mexico');
  globalCountry = WORLDBANK.MEX.indicators;
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
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
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
});
// ---------------------------------------------------------------------------------------
exploreDataBrasil = document.getElementById('explore-data-brasil');
exploreDataBrasil.addEventListener('click', () => {
  document.getElementById('title-bra').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('brasil');
  globalCountry = WORLDBANK.BRA.indicators;
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
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
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
});
// ---------------------------------------------------------------------------------------
exploreDataChile = document.getElementById('explore-data-chile');
exploreDataChile.addEventListener('click', () => {
  document.getElementById('title-chl').classList.remove('hide');
  document.getElementById('filled').classList.remove('hide');
  showCategories('chile');
  globalCountry = WORLDBANK.CHL.indicators;
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
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
  globalCategories = window.worldbank.categorizePerCountry(globalCountry);
});
// -------------------------------------------------------
const showCategories = (countryId) => {
  document.getElementById('frame').classList.add('hide');
  document.getElementById('text-under-frame').classList.add('hide');
  document.getElementById('indicator').classList.remove('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
};
/* ============================================Al hacer click en el ícono de la categoria ===================================*/ 
const tableIndicatorCategory = document.getElementById('category'); 
const tableData = document.getElementById('data');
// --------------------------Educación-----------------------------
const education = document.getElementById('education');
education.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'EDUCACIÓN'; 
  const educArr = globalCategories.education;
  createtableIndicatorCategory(educArr);
});
// ---------------------------Población----------------------------
const population = document.getElementById('population');
population.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'POBLACIÓN'; 
  const popArr = globalCategories.population;
  createtableIndicatorCategory(popArr);
});
// ------------------------------Trabajo----------------------------
const work = document.getElementById('work');
work.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'TRABAJO'; 
  const workArr = globalCategories.work;
  createtableIndicatorCategory(workArr);
});
// ------------------------------Género------------------------------
const gender = document.getElementById('gender');
gender.addEventListener('click', () => {
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'GÉNERO'; 
  const genArr = globalCategories.gender;
  createtableIndicatorCategory(genArr);
});
// -------------Función que crea la tabla de categorías---------------
const createtableIndicatorCategory = (arrCategory) => {
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
// -------------Función que crea la tabla de data------------------
let porcentaje = [];
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
  porcentaje = percent;
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
// ------------------Función que muestra la data------------------
const showData = (index) => {
  document.getElementById('average-btn').classList.remove('hide');
  document.getElementById('average-result').classList.remove('hide');
  document.getElementById('indicator').classList.add('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.remove('hide');
  let arrData = Object.entries(globalCategory[index].data);
  createTableData(arrData);
};
// --------------------Función que muestra el promedio -------------
document.getElementById('average-btn').addEventListener('click', () => {
  // event.preventDefault();
  let datoPromedio = [];
  console.log(datoPromedio);
  for (let i = 0; i < porcentaje.length; i++) {
    datoPromedio.push(Number(porcentaje[i]));
  }
  let resultadoPromedio = window.worldbank.averageValue(datoPromedio);
  document.getElementById('average-result').innerHTML = 'EL PROMEDIO ES : ' + resultadoPromedio.toFixed(2) + ' %';
});
// ---------------------Función que ordena la data------------------
document.getElementById('sort-btn').addEventListener('click', () => {
  let typeSelected = document.getElementById('data-type').value;
  let orderSelected = document.getElementById('order-type').value;
  let arrData = globalData;
  let arrSort = window.worldbank.sortArrData(arrData, typeSelected, orderSelected);
  createTableData(arrSort);
});
// ---------------------Función que filtra la data------------------
document.getElementById('filter-btn').addEventListener('click', () =>{
  document.getElementById('average-btn').classList.add('hide');
  document.getElementById('average-result').classList.add('hide');
  let initialYear = document.getElementById('initial-year').value;
  let finalYear = document.getElementById('final-year').value;

  let arrData = globalData;
  let arrFilt = window.worldbank.filter(arrData, initialYear, finalYear);
  createTableData(arrFilt);
});
