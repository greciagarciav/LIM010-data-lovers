/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const indicators = (indicatorsArray,index) => {
  let indicatorNameArray = [];
  indicatorNameArray = indicatorsArray.filter(populationElement => populationElement.indicators === index);
  return 'indicatorsArray';
  console.log(indicatorNameArray);
};

window.indicators = indicators;
*/
// const dataBancoMundial = (data) => {
//   let arrayBancoMundial = [];
//   for (let i =0; i< data.length; i++){
//      arrayBancoMundial.push({
//       indicador : data[i].indicatorName,
//     }); 

//     }
//     return arrayBancoMundial;
   
// };


// window.worldbank = {
//   dataBancoMundial: dataBancoMundial, 

// };

const indicatorsPeru = WORLDBANK.PER.indicators;
// const indicatorsMexico= WORLDBANK.MEX.indicators;
// const indicatorsBrasil= WORLDBANK.BRA.indicators;
// const indicatorsChile= WORLDBANK.CHL.indicators;

let educationPer= [];
let populationPer= [];
let workPer= [];
let genderPer= [];

// let educationMex= [];
// let populationMex= [];
// let workMex= [];
// let genderMex= [];

// let educationBra= [];
// let populationBra= [];
// let workBra= [];
// let genderBra= [];

// let educationChl= [];
// let populationChl= [];
// let workChl= [];
// let genderChl= [];

for(let i=0; i<indicatorsPeru.length; i++){
  if(indicatorsPeru[i].indicatorCode.split(".")[0]=="SE"){
    educationPer.push([indicatorsPeru[i]]);
    for (let i=0; i<educationPer.length; i++){
      educationPer[i].data
    }
  }
  else if (indicatorsPeru[i].indicatorCode.split(".")[0]=="SP" || indicatorsPeru[i].indicatorCode.split(".")[0]=="IC" || indicatorsPeru[i].indicatorCode.split(".")[0]=="SH"){
    populationPer.push([indicatorsPeru[i]]);    
  }
  else if (indicatorsPeru[i].indicatorCode.split(".")[0]=="SL" || indicatorsPeru[i].indicatorCode.split("_")[0]=="per" || indicatorsPeru[i].indicatorCode.split(".")[0]=="HD" || indicatorsPeru[i].indicatorCode.split(".")[0]=="MS" || indicatorsPeru[i].indicatorCode.split(".")[0]=="DT"){
    workPer.push([indicatorsPeru[i]]);
  }
  else if (indicatorsPeru[i].indicatorCode.split(".")[0]=="SG"){
    genderPer.push([indicatorsPeru[i]]);
  }
}
console.log(educationPer)
console.log(populationPer)
console.log(workPer)
console.log(genderPer)


// for(let i=0; i<indicatorsMexico.length; i++){
//   if(indicatorsMexico[i].indicatorCode.split(".")[0]=="SE"){
//     educationMex.push(indicatorsMexico[i].indicatorName);
//   }
//   else if (indicatorsMexico[i].indicatorCode.split(".")[0]=="SP" || indicatorsMexico[i].indicatorCode.split(".")[0]=="IC" || indicatorsMexico[i].indicatorCode.split(".")[0]=="SH"){
//     populationMex.push(indicatorsMexico[i].indicatorName); 
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