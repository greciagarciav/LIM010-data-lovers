/* eslint-disable id-length */
window.worldbank = {
  sortArrData: (newArrData, dataType, orderType) => {
    // Ordena Año de Menor a Mayor
    const OrderYearAsc = (a, b) => {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
      return 0; 
    };
    // Ordena Año de Mayor a Menor
    const OrderYearDesc = (a, b) => {
      if (a[0] < b[0]) {
        return 1;
      }
      if (a[0] > b[0]) {
        return -1;
      }
      return 0; 
    };

    // Ordena Porcentaje de Menor a Mayor
    const OrderPercentageAsc = (a, b) => {
      if (a[1] > b[1]) {
        return 1;
      }
      if (a[1] < b[1]) {
        return -1;
      }
      return 0; 
    };

    // Ordena Porcentaje de Mayor a Menor
    const OrderPercentageDesc = (a, b) => {
      if (a[1] < b[1]) {
        return 1;
      }
      if (a[1] > b[1]) {
        return -1;
      }
      return 0; 
    };
    let sorted = [];
    if (dataType === 'Valores') {
      switch (orderType) {
      case 'Mayor':
        sorted = newArrData.sort(OrderPercentageDesc);
        break;
      case 'Menor':
        sorted = newArrData.sort(OrderPercentageAsc);
      }
    } else if (dataType === 'Años') {
      switch (orderType) {
      case 'Mayor':
        sorted = newArrData.sort(OrderYearDesc);
        break;
      case 'Menor':
        sorted = newArrData.sort(OrderYearAsc);
      }
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
  filter: (arrYears, firstYear, lastYear) => {
    let rango = arrYears.filter(filteredArr => filteredArr[0] >= firstYear && filteredArr[0] <= lastYear);
    return rango;
  }
};