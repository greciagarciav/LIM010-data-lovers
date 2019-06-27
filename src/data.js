/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const indicators = (indicatorsArray,index) => {
	let indicatorNameArray = [];
	indicatorNameArray = indicatorsArray.filter(populationElement => populationElement.indicators === index);
  return 'indicatorsArray';
  console.log(indicatorNameArray);
};

window.indicators = indicators;
