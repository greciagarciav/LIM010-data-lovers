/* eslint-disable id-length */
window.worldbank = {

  categorizePerCountry: (countryIndicators) => {
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
  },


  sortArrData: (newArrData, dataType, orderType) => {
    let sorted = [];
    if (dataType === 'Valores') {
      switch (orderType) {
      case 'Mayor':
        sorted = newArrData.sort(OrderPercentageDesc);
        break;
      case 'Menor':
        sorted = newArrData.sort(OrderPercentageAsc);
      }
    } else
      switch (orderType) {
      case 'Mayor':
        sorted = newArrData.sort(OrderYearDesc);
        break;
      case 'Menor':
        sorted = newArrData.sort(OrderYearAsc);
      }
    return sorted;
  },
  averageValue: (dato)=>{
    let sum = dato.reduce((a, b)=>{
      return a + b;
    });
    let divider = dato.length;
    return sum / divider;
  },
};

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
function OrderPercentageAsc(a, b) {
  if (a[1] > b[1]) {
    return 1;
  }
  if (a[1] < b[1]) {
    return -1;
  }
  return 0;
}

// Ordena Porcentaje de Mayor a Menor
function OrderPercentageDesc(a, b) {
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  return 0; 
}
