/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const dataBancoMundial = (data) => {
//   let arrayBancoMundial = [];
//   for (let i =0; i< data.length; i++){
//      arrayBancoMundial.push({
//       indicador : data[i].indicatorName,
//     }); 

//     }
//     return arrayBancoMundial;
// };

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


// let educationBra= [];
// let populationBra= [];
// let workBra= [];
// let genderBra= [];

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


// let educationChl= [];
// let populationChl= [];
// let workChl= [];
// let genderChl= [];

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