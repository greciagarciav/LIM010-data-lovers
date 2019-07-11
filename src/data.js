let education = [];
  let population = [];
  let work = [];
  let gender = [];

window.worldbank = {

  categorizePerCountry: (countryIndicators)=>{
  
  for (let i = 0; i < countryIndicators.length ; i++) {
   
    if (countryIndicators[i].indicatorCode.split(".")[0] === "SE"){
      education.push(countryIndicators[i]);
    }
    else if (countryIndicators[i].indicatorCode.split(".")[0] === "SP" || countryIndicators[i].indicatorCode.split(".")[0] === "IC" || countryIndicators[i].indicatorCode.split(".")[0] === "SH") {
      population.push(countryIndicators[i]);
    }
    else if (countryIndicators[i].indicatorCode.split(".")[0] === "SL" || countryIndicators[i].indicatorCode.split("_")[0] === "per" || countryIndicators[i].indicatorCode.split(".")[0] === "HD" || countryIndicators[i].indicatorCode.split(".")[0] === "MS" || countryIndicators[i].indicatorCode.split(".")[0] === "DT") {
      work.push(countryIndicators[i]);
    }
    else if (countryIndicators[i].indicatorCode.split(".")[0] === "SG"){
      gender.push(countryIndicators[i]);
    }
  }
  return {education: education, population: population, work: work, gender: gender}
},

sortAscending: ()=>{
  
},

sortDescending: ()=>{

},

filterData: ()=>{
  
},

averageValue: ()=>{

}

}
