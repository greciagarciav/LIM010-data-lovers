/* eslint-disable id-length */
window.worldbank = {

  sortArrData: (newArrData, dataType, orderType) => {
    const OrderYearAsc = (a, b) => {
      return a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0;
    };

    const OrderPercentageAsc = (a, b) => {
      return a[1] > b[1] ? 1 : b[1] > a[1] ? -1 : 0;
    };

    let sorted = [];
    if (dataType === 'Valores') {
      switch (orderType) {
      case 'Mayor':
        sorted = newArrData.sort(OrderPercentageAsc).reverse();
        break;
      case 'Menor':
        sorted = newArrData.sort(OrderPercentageAsc);
      }
    } else if (dataType === 'Años') {
      switch (orderType) {
      case 'Mayor':
        sorted = newArrData.sort(OrderYearAsc).reverse();
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