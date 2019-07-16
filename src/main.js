/* eslint-disable id-length */
const dataWorldbank = WORLDBANK;
let globalCountry = [];
let globalCategories = [];
let globalCategory = [];

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

/* ----------------------------------Al hacer click en el boton explorar data-------------------------------------*/
// --------------------------------------------------------------------------------------
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

const showCategories = (countryId) => {
  document.getElementById('frame').classList.add('hide');
  document.getElementById('text-under-frame').classList.add('hide');
  document.getElementById('indicator').classList.remove('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
};

/* ======================Al hacer click en el ícono de la categoria ===================================*/ 
const tableIndicatorCategory = document.getElementById('category'); 
const tableData = document.getElementById('data');


const education = document.getElementById('education');
education.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'EDUCACIÓN'; 

  const educArr = globalCategories.education;
  createtableIndicatorCategory(educArr);
});

// -------------------------------------------------------
const population = document.getElementById('population');
population.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'POBLACIÓN'; 

  const popArr = globalCategories.population;
  createtableIndicatorCategory(popArr);
});

// -------------------------------------------------------
const work = document.getElementById('work');
work.addEventListener('click', ()=>{
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'TRABAJO'; 

  const workArr = globalCategories.work;
  createtableIndicatorCategory(workArr);
});

// -------------------------------------------------------------------------------------
const gender = document.getElementById('gender');

gender.addEventListener('click', () => {
  document.getElementById('indicator-table').classList.remove('hide');
  document.getElementById('filled').classList.add('hide');
  document.getElementById('to-shrink').classList.add('to-shrink');
  document.getElementById('category-title').innerHTML = 'GÉNERO'; 

  const genArr = globalCategories.gender;
  createtableIndicatorCategory(genArr);
});

const createtableIndicatorCategory = (arrCategory) => {
  globalCategory = arrCategory;

  tableIndicatorCategory.innerHTML = '';

  let table = `<thead>
                <tr>
                  <th class="nro">N°</th>
                  <th class="indicador">Indicadores</th>
                </tr>
               </thead>`;

  for (let i = 0 ; i < arrCategory.length ; i++) {
    table = table + `<tr>
                          <td class="nro">${ i + 1 } </td>
                          <td class="indicador">
                            <a href="javascript:showData(${ i })"> ${ arrCategory[i].indicatorName }</a>
                          </td>
                       </tr>`;
  }

  table = table + '</tbody>';

  tableIndicatorCategory.innerHTML = table;
};

const createTableData = (objData) =>{
  tableData.innerHTML = '';

  let table = `

              <thead>
                <tr>
                  <th class="nro">Años</th>
                  <th class="indicador">Valores</th>
                </tr>
              </thead>`;

  Object.entries(objData).forEach(([key, value]) => {
    if (value !== '') {
      table = table + `<tr>
                      <td class="nro">${ key } </td>
                      <td class="indicador">${ value.toFixed(2) } % </td>
                    </tr>`;
      let valor = value;
      console.log(valor.length);

    }else{
      //console.log('es vacio');
    }

  });   

  table = table + '</tbody>';

  tableData.innerHTML = table;
}; 
const showData = (index) => {
  document.getElementById('indicator').classList.add('hide');
  document.getElementById('indicator-table').classList.add('hide');
  document.getElementById('show-data-indicator').classList.remove('hide');
  
  let objData = globalCategory[index].data;
  createTableData(objData);
};

let pruebita = [];
globalCategories = window.worldbank.categorizePerCountry(WORLDBANK.PER.indicators);
const prueba1 = Object.entries(globalCategories);
for (let i = 0; i < prueba1.length; i++) {
  const prueba2 = prueba1[i];
  for (let j = 0; j < prueba2.length; j++) {
    const prueba3 = prueba2[1];
    for (let k = 0; k < prueba3.length; k++) {
      const prueba4 = Object.entries(prueba3[k].data);
      for (let l = 0; l < prueba4.length; l++) {
        const prueba5 = prueba4[l];
        for (let m = 0; m < prueba5.length; m++) {
          pruebita.push(prueba5[1]);
          //console.log(prueba5[1]);
        }
      }
      
    }
  }
}


const sumatoria = pruebita.reduce(function(acumulador,siguientevalor){
return acumulador + siguientevalor;
},0);
// console.log(sumatoria);


//console.log(globalCategories);
/*// Pureba

var datos = { '1992': 9, 
  '1995': 6, 
  '1993': 8, 
  '1991': 10, 
  '1996': 5, 
  '1997': 4, 
  '1994': 7, 
  '1998': 3, 
  '1999': 2, 
  '2000': 1
};




// Crea las funciones de Ordenamiento

// Ordena Año de Menor a Mayor
function OrderYearAsc(a, b) {
  if (a[0] > b[0]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  }
  return 0;
}
// Ordena Año de Mayor a Menor
function OrderYearDesc(a, b) {
  if (a[0] < b[0]) {
    return 1;
  }
  if (a[0] > b[0]) {
    return -1;
  }
  return 0; 
}

// Ordena Porcentaje de Menor a Mayor
function OrderPorcentajeAsc(a, b) {
  if (a[1] > b[1]) {
    return 1;
  }
  if (a[1] < b[1]) {
    return -1;
  }
  return 0;
}

// Ordena Porcentaje de Mayor a Menor
function OrderPorcentaDesc(a, b) {
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  return 0; 
}

// Convierte a arreglos 
var arrData = Object.entries(datos);

console.log('Muestra arreglo inicial');
console.log(arrData);

console.log('Ordena Año de Mayor a Menor');
console.log(arrData.sort(OrderYearDesc));

console.log('Ordena Año de Menor a Mayor');
console.log(arrData.sort(OrderYearAsc));

console.log('Ordena Porcentaje de Mayor a Menor');
console.log(arrData.sort(OrderPorcentaDesc));

console.log('Ordena Porcentaje de Menor a Mayor');
console.log(arrData.sort(OrderPorcentajeAsc));*/
