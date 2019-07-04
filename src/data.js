/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return example;
};
window.example = example;
*/
/*
const indicatorsPeru = WORLDBANK.PER.indicators;

const indicators = () => {
  let educationPer = [];
  let populationPer = [];
  let workPer = [];
  let genderPer = [];
  for (let i = 0; i < indicatorsPeru.length ; i++) {
    // eslint-disable-next-line quotes
    if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SE") {
      educationPer.push(indicatorsPeru[i].indicatorName);
    }// eslint-disable-next-line quotes
    else if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SP" || indicatorsPeru[i].indicatorCode.split(".")[0] === "IC" || indicatorsPeru[i].indicatorCode.split(".")[0] === "SH") {
      populationPer.push(indicatorsPeru[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SL" || indicatorsPeru[i].indicatorCode.split("_")[0] === "per" || indicatorsPeru[i].indicatorCode.split(".")[0] === "HD" || indicatorsPeru[i].indicatorCode.split(".")[0] === "MS" || indicatorsPeru[i].indicatorCode.split(".")[0] === "DT") {
      workPer.push(indicatorsPeru[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SG") {
      genderPer.push(indicatorsPeru[i].indicatorName);
    }
    return {workPer: workPer, 
      educationPer: educationPer};
  }
  console.log(populationPer);
  console.log(workPer);
  console.log(genderPer);
  console.log(educationPer);
};
window.indicators = {indicators, 
  workPer};
*/
/*
const data = WORLDBANK.PER.indicators;
const dataArray = Object.entries(data);
for (let i = 0 ; i < dataArray.length ; i++){
    //console.log(dataArray [i]);
    for (let j = 0 ; j< dataArray[i].length ; j++){
     console.log(dataArray[i][j].data);
     //const a = dataArray[i][j].data;
     //console.log(a.);
    }
}
*/
/*
const dataBancoMundial = () => {
  let arrayBancoMundial = [];
  for (let i =0; i< data.length; i++){
     arrayBancoMundial.push({
      indicador : data[i].indicatorName,
    }); 

    }
    return arrayBancoMundial;
   
};


window.worldbank = {
  dataBancoMundial: dataBancoMundial, 

};

*/












/*----
const indicatorsPeru = WORLDBANK.PER.indicators;
const catEduPer = ()=>{
  let educationPer = [];
  for (let i = 0; i < indicatorsPeru.length ; i++) {
    // eslint-disable-next-line quotes
    if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SE") {
      educationPer.push(indicatorsPeru[i].indicatorName);
    }
    for (let j = 0; j < educationPer.length; j++) {
      console.log(`Educacion : ${educationPer[j]}`);
    }
    return educationPer;
  }
};
window.catEduPer = catEduPer;
*/
/*
const indicatorsPeru = WORLDBANK.PER.indicators;
let educationPer = [];
for (let i = 0; i < indicatorsPeru.length ; i++) {
  // eslint-disable-next-line quotes
  if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SE") {
    educationPer.push(indicatorsPeru[i].indicatorName);
  }
  for (let j = 0; j < educationPer.length; j++) {
    console.log(`Educacion : ${educationPer[j]}`);
  }
}

let populationPer = [];
for (let i = 0; i < indicatorsPeru.length ; i++) {
  // eslint-disable-next-line quotes
  if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SP" || indicatorsPeru[i].indicatorCode.split(".")[0] === "IC" || indicatorsPeru[i].indicatorCode.split(".")[0] === "SH") {
    populationPer.push(indicatorsPeru[i].indicatorName);
  }
  for (let j = 0 ; j < populationPer.length ; j++) {
    console.log(`Poblacion : ${populationPer[j]}`);
  }
}

let workPer = [];
for (let i = 0; i < indicatorsPeru.length ; i++) {
  // eslint-disable-next-line quotes
  if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SL" || indicatorsPeru[i].indicatorCode.split("_")[0] === "per" || indicatorsPeru[i].indicatorCode.split(".")[0] === "HD" || indicatorsPeru[i].indicatorCode.split(".")[0] === "MS" || indicatorsPeru[i].indicatorCode.split(".")[0] === "DT") {
    workPer.push(indicatorsPeru[i].indicatorName);
  }
  for (let j = 0 ; j < workPer.length ; j++) {
    console.log(`Trabajo : ${workPer[j]}`);
  }
}

let genderPer = [];
for (let i = 0; i < indicatorsPeru.length ; i++) {
  // eslint-disable-next-line quotes
  if (indicatorsPeru[i].indicatorCode.split(".")[0] === "SG") {
    genderPer.push(indicatorsPeru[i].indicatorName);
  }
  for (let j = 0 ; j < genderPer.length ; j++) {
    console.log(`Género : ${genderPer[j]}`);
  }
}
*/
/*
const todosIndicadoresPeru = WORLDBANK.PER.indicators;
console.log(todosIndicadoresPeru);

const todosIndicadoresPeruArr = Object.entries(todosIndicadoresPeru);
console.log(todosIndicadoresPeruArr);

const todosAñosPeru = WORLDBANK.PER.indicators[0].data;
const todosAñosPeruArr = Object.entries(todosAñosPeru);
console.log(todosAñosPeruArr);


const indicatorsMexico= WORLDBANK.MEX.indicators;
let educationMex= [];
let populationMex= [];
let workMex= [];
let genderMex= [];
for(let i=0; i<indicatorsMexico.length; i++){
  if(indicatorsMexico[i].indicatorCode.split(".")[0]=="SE"){
    educationMex.push(indicatorsMexico[i].indicatorName);
  }
  else if (indicatorsMexico[i].indicatorCode.split(".")[0]=="SP" || indicatorsMexico[i].indicatorCode.split(".")[0]=="IC" || indicatorsMexico[i].indicatorCode.split(".")[0]=="SH"){
    populationMex.push(indicatorsMexico[i].indicatorName); 
  }
  else if (indicatorsMexico[i].indicatorCode.split(".")[0]=="SL" || indicatorsMexico[i].indicatorCode.split("_")[0]=="per" || indicatorsMexico[i].indicatorCode.split(".")[0]=="HD" || indicatorsMexico[i].indicatorCode.split(".")[0]=="MS" || indicatorsMexico[i].indicatorCode.split(".")[0]=="DT"){
    workMex.push(indicatorsMexico[i].indicatorName); 
  }
  else if (indicatorsMexico[i].indicatorCode.split(".")[0]=="SG"){
    genderMex.push(indicatorsMexico[i].indicatorName);  
  }
}
console.log(educationMex);
console.log(populationMex);
console.log(workMex);
console.log(genderMex);

const indicatorsBrasil= WORLDBANK.BRA.indicators;
let educationBra= [];
let populationBra= [];
let workBra= [];
let genderBra= [];

for(let i=0; i<indicatorsBrasil.length; i++){
  if(indicatorsBrasil[i].indicatorCode.split(".")[0]=="SE"){
    educationBra.push(indicatorsBrasil[i].indicatorName);
  }
  else if (indicatorsBrasil[i].indicatorCode.split(".")[0]=="SP" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="IC" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="SH"){
    populationBra.push(indicatorsBrasil[i].indicatorName);
  }
  else if (indicatorsBrasil[i].indicatorCode.split(".")[0]=="SL" || indicatorsBrasil[i].indicatorCode.split("_")[0]=="per" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="HD" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="MS" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="DT"){
    workBra.push(indicatorsBrasil[i].indicatorName); 
  }
  else if (indicatorsBrasil[i].indicatorCode.split(".")[0]=="SG"){
    genderBra.push(indicatorsBrasil[i].indicatorName); 
  }
}
console.log(educationBra);
console.log(populationBra);
console.log(workBra);
console.log(genderBra);

const indicatorsChile= WORLDBANK.CHL.indicators;
let educationChl= [];
let populationChl= [];
let workChl= [];
let genderChl= [];
for(let i=0; i<indicatorsChile.length; i++){
  if(indicatorsChile[i].indicatorCode.split(".")[0]=="SE"){
    educationChl.push(indicatorsChile[i].indicatorName);
  }
  else if (indicatorsChile[i].indicatorCode.split(".")[0]=="SP" || indicatorsChile[i].indicatorCode.split(".")[0]=="IC" || indicatorsChile[i].indicatorCode.split(".")[0]=="SH"){
    populationChl.push(indicatorsChile[i].indicatorName);
  }
  else if (indicatorsChile[i].indicatorCode.split(".")[0]=="SL" || indicatorsChile[i].indicatorCode.split("_")[0]=="per" || indicatorsChile[i].indicatorCode.split(".")[0]=="HD" || indicatorsChile[i].indicatorCode.split(".")[0]=="MS" || indicatorsChile[i].indicatorCode.split(".")[0]=="DT"){
    workChl.push(indicatorsChile[i].indicatorName); 
  }
  else if (indicatorsChile[i].indicatorCode.split(".")[0]=="SG"){
    genderChl.push(indicatorsChile[i].indicatorName);
  }
}
console.log(educationChl);
console.log(populationChl);
console.log(workChl);
console.log(genderChl);*/
