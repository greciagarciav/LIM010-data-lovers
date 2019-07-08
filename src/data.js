const indicatorsPeruCategory = (indicatorsPeruCategory) => {
  let educationPer = [];
  let populationPer = [];
  let workPer = [];
  let genderPer = [];
  for (let i = 0; i < indicatorsPeruCategory.length ; i++) {
    // eslint-disable-next-line quotes
    if (indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "SE") {
      educationPer.push(indicatorsPeruCategory[i].indicatorName);
    }// eslint-disable-next-line quotes
    else if (indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "SP" || indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "IC" || indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "SH") {
      populationPer.push(indicatorsPeruCategory[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "SL" || indicatorsPeruCategory[i].indicatorCode.split("_")[0] === "per" || indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "HD" || indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "MS" || indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "DT") {
      workPer.push(indicatorsPeruCategory[i].indicatorName);indicatorsPeruCategory
    }
    // eslint-disable-next-line quotes
    else if (indicatorsPeruCategory[i].indicatorCode.split(".")[0] === "SG") {
      genderPer.push(indicatorsPeruCategory[i].indicatorName);
    }
  }
  return {educationPer: educationPer, populationPer: populationPer, workPer: workPer, genderPer: genderPer}
};

const indicatorsMexicoCategory = (indicatorsMexicoCategory) => {
  let educationMex = [];
  let populationMex = [];
  let workMex = [];
  let genderMex = [];
  for (let i = 0; i < indicatorsMexicoCategory.length ; i++) {
    // eslint-disable-next-line quotes
    if (indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "SE") {
      educationMex.push(indicatorsMexicoCategory[i].indicatorName);
    }// eslint-disable-next-line quotes
    else if (indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "SP" || indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "IC" || indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "SH") {
      populationMex.push(indicatorsMexicoCategory[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "SL" || indicatorsMexicoCategory[i].indicatorCode.split("_")[0] === "per" || indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "HD" || indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "MS" || indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "DT") {
      workMex.push(indicatorsMexicoCategory[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsMexicoCategory[i].indicatorCode.split(".")[0] === "SG") {
      genderMex.push(indicatorsMexicoCategory[i].indicatorName);
    }
  }
  return {educationMex: educationMex, populationMex: populationMex, workMex: workMex, genderMex: genderMex}
};

const indicatorsChileCategory = (indicatorsChileCategory) => {
  let educationChl = [];
  let populationChl = [];
  let workChl = [];
  let genderChl = [];
  for (let i = 0; i < indicatorsChileCategory.length ; i++) {
    // eslint-disable-next-line quotes
    if (indicatorsChileCategory[i].indicatorCode.split(".")[0] === "SE") {
      educationChl.push(indicatorsChileCategory[i].indicatorName);
    }// eslint-disable-next-line quotes
    else if (indicatorsChileCategory[i].indicatorCode.split(".")[0] === "SP" || indicatorsChileCategory[i].indicatorCode.split(".")[0] === "IC" || indicatorsChileCategory[i].indicatorCode.split(".")[0] === "SH") {
      populationChl.push(indicatorsChileCategory[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsChileCategory[i].indicatorCode.split(".")[0] === "SL" || indicatorsChileCategory[i].indicatorCode.split("_")[0] === "per" || indicatorsChileCategory[i].indicatorCode.split(".")[0] === "HD" || indicatorsChileCategory[i].indicatorCode.split(".")[0] === "MS" || indicatorsChileCategory[i].indicatorCode.split(".")[0] === "DT") {
      workChl.push(indicatorsChileCategory[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsChileCategory[i].indicatorCode.split(".")[0] === "SG") {
      genderChl.push(indicatorsChileCategory[i].indicatorName);
    }
  }
  return {educationChl: educationChl, populationChl: populationChl, workChl: workChl, genderChl: genderChl}
};

const indicatorsBrasilCategory = (indicatorsBrasilCategory) => {
  let educationBra = [];
  let populationBra = [];
  let workBra = [];
  let genderBra = [];
  for (let i = 0; i < indicatorsBrasilCategory.length ; i++) {
    // eslint-disable-next-line quotes
    if (indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "SE") {
      educationBra.push(indicatorsBrasilCategory[i].indicatorName);
    }// eslint-disable-next-line quotes
    else if (indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "SP" || indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "IC" || indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "SH") {
      populationBra.push(indicatorsBrasilCategory[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "SL" || indicatorsBrasilCategory[i].indicatorCode.split("_")[0] === "per" || indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "HD" || indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "MS" || indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "DT") {
      workBra.push(indicatorsBrasilCategory[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicatorsBrasilCategory[i].indicatorCode.split(".")[0] === "SG") {
      genderBra.push(indicatorsBrasilCategory[i].indicatorName);
    }
  }
  return {educationBra: educationBra, populationBra: populationBra, workBra: workBra, genderBra: genderBra}
};

const ascending = (datasi)=>{
  for (let i = 0 ; i < datasi.length ; i++) {
    const datas = datasi[i].data;
    const arrDatas = Object.entries(datas);
    //console.log(arrDatas);
  }
  return
};

const descending = (datasi)=>{
  return -1 * ascending();
};






//console.log(indicators(indicators).educationPer);
window.worldbank = {
  indicatorsPeruCategory: indicatorsPeruCategory,
  indicatorsMexicoCategory: indicatorsMexicoCategory,
  indicatorsChileCategory: indicatorsChileCategory,
  indicatorsBrasilCategory: indicatorsBrasilCategory,
  ascending: ascending,
  descending:descending,
};




/*  const arrPeru = WORLDBANK.PER.indicators;//array de objetos
  //console.log(arrPeru);//se visualiza el array de objetos
  for (let i = 0 ; i <arrPeru.length ; i++) {
    //console.log(arrPeru[i]);//se ve los objetos uno por uno.
    const datas = arrPeru[i].data;//se ve las datas una por una.tipo objeto
    //console.log(datas);
    const datasArrKey = Object.keys(datas);
    const datasArrValue = Object.values(datas);
    //console.log(datasArr);
    datasArrKey.reverse();//ordena de a-d y d-a
    datasArrValue.reverse();
    //console.log(datasArrKey);
    //console.log(datasArrValue);
    const arrDatas = Object.entries(datas);//vuelve las 139 datas en vector y dentro de ellas hay 58 vectores.
    //const datas = WORLDBANK.PER.indicators[i].data;//se ve las datas una por una.
    const arrDatasKeyValue = arrDatas;
    arrDatasKeyValue.reverse();
    console.log (arrDatasKeyValue);
    for (let j = 0 ; j < arrDatas.length ; j++){
      const año = arrDatas[j];//devuelve 8062 vectores dentro de ellos hay 2 posiciones de año y valor
      //console.log(año);
      for ( let k = 0 ; k < año.length ; k++){
        const añoValor = año[k];
      }
    }
  }*/



/*const arrPeru = WORLDBANK.PER.indicators;//array de objetos
//console.log(arrPeru);//se visualiza el array de objetos
for (let i = 0 ; i <arrPeru.length ; i++) {
//console.log(arrPeru[i]);//se ve los objetos uno por uno.
const datas = arrPeru[i].data;//se ve las datas una por una.tipo objeto
//console.log(datas);
const datasArrKey = Object.keys(datas);
const datasArrValue = Object.values(datas);
//console.log(datasArr);
datasArrKey.reverse();//ordena de a-d y d-a
datasArrValue.reverse();
console.log(datasArrKey);
console.log(datasArrValue);
const arrDatas = Object.entries(datas);//vuelve las 139 datas en vector y dentro de ellas hay 58 vectores.
//const datas = WORLDBANK.PER.indicators[i].data;//se ve las datas una por una.
const arrDatasKeyValue = arrDatas;
arrDatasKeyValue.reverse();
//console.log (arrDatasKeyValue);
}*/


/*
const indicators = (indicators) => {
  let educationPer = [];
  let populationPer = [];
  let workPer = [];
  let genderPer = [];
  for (let i = 0; i < indicators.length ; i++) {
    // eslint-disable-next-line quotes
    if (indicators[i].indicatorCode.split(".")[0] === "SE") {
      educationPer.push(indicators[i].indicatorName);
    }// eslint-disable-next-line quotes
    else if (indicators[i].indicatorCode.split(".")[0] === "SP" || indicators[i].indicatorCode.split(".")[0] === "IC" || indicators[i].indicatorCode.split(".")[0] === "SH") {
      populationPer.push(indicators[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicators[i].indicatorCode.split(".")[0] === "SL" || indicators[i].indicatorCode.split("_")[0] === "per" || indicators[i].indicatorCode.split(".")[0] === "HD" || indicators[i].indicatorCode.split(".")[0] === "MS" || indicators[i].indicatorCode.split(".")[0] === "DT") {
      workPer.push(indicators[i].indicatorName);
    }
    // eslint-disable-next-line quotes
    else if (indicators[i].indicatorCode.split(".")[0] === "SG") {
      genderPer.push(indicators[i].indicatorName);
    }
  }
  return {educationPer: educationPer, populationPer: populationPer, workPer: workPer, genderPer: genderPer}
};

//console.log(indicators(indicators).educationPer);

window.worldbank = {
  indicators: indicators, 
};
*/
//   }
//   else if (indicatorsMexico[i].indicatorCode.split(".")[0]=="SL" || indicatorsMexico[i].indicatorCode.split("_")[0]=="per" || indicatorsMexico[i].indicatorCode.split(".")[0]=="HD" || indicatorsMexico[i].indicatorCode.split(".")[0]=="MS" || indicatorsMexico[i].indicatorCode.split(".")[0]=="DT"){
//     workMex.push(indicatorsMexico[i].indicatorName); 
//   }
//   else if (indicatorsMexico[i].indicatorCode.split(".")[0]=="SG"){
//     genderMex.push(indicatorsMexico[i].indicatorName);  
//   }
// }
// console.log(educationMex)
// console.log(populationMex)
// console.log(workMex)
// console.log(genderMex)

// for(let i=0; i<indicatorsBrasil.length; i++){
//   if(indicatorsBrasil[i].indicatorCode.split(".")[0]=="SE"){
//     educationBra.push(indicatorsBrasil[i].indicatorName);
//   }
//   else if (indicatorsBrasil[i].indicatorCode.split(".")[0]=="SP" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="IC" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="SH"){
//     populationBra.push(indicatorsBrasil[i].indicatorName);
//   }
//   else if (indicatorsBrasil[i].indicatorCode.split(".")[0]=="SL" || indicatorsBrasil[i].indicatorCode.split("_")[0]=="per" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="HD" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="MS" || indicatorsBrasil[i].indicatorCode.split(".")[0]=="DT"){
//     workBra.push(indicatorsBrasil[i].indicatorName); 
//   }
//   else if (indicatorsBrasil[i].indicatorCode.split(".")[0]=="SG"){
//     genderBra.push(indicatorsBrasil[i].indicatorName); 
//   }
// }
// console.log(educationBra)
// console.log(populationBra)
// console.log(workBra)
// console.log(genderBra)

// for(let i=0; i<indicatorsChile.length; i++){
//   if(indicatorsChile[i].indicatorCode.split(".")[0]=="SE"){
//     educationChl.push(indicatorsChile[i].indicatorName);
//   }
//   else if (indicatorsChile[i].indicatorCode.split(".")[0]=="SP" || indicatorsChile[i].indicatorCode.split(".")[0]=="IC" || indicatorsChile[i].indicatorCode.split(".")[0]=="SH"){
//     populationChl.push(indicatorsChile[i].indicatorName);
//   }
//   else if (indicatorsChile[i].indicatorCode.split(".")[0]=="SL" || indicatorsChile[i].indicatorCode.split("_")[0]=="per" || indicatorsChile[i].indicatorCode.split(".")[0]=="HD" || indicatorsChile[i].indicatorCode.split(".")[0]=="MS" || indicatorsChile[i].indicatorCode.split(".")[0]=="DT"){
//     workChl.push(indicatorsChile[i].indicatorName); 
//   }
//   else if (indicatorsChile[i].indicatorCode.split(".")[0]=="SG"){
//     genderChl.push(indicatorsChile[i].indicatorName);
//   }
// }
// console.log(educationChl)
// console.log(populationChl)
// console.log(workChl)
// console.log(genderChl)
