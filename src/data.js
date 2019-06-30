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
const dataBancoMundial = (data) => {
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