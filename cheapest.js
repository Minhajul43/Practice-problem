const phones = [
  { name:'sumsung',price:12000,camera:'12pc',color:'black'},
  { name:'sumpony',price:8000,camera:'12pc',color:'black'},
  { name:'Vivo',price:15000,camera:'12pc',color:'black'},
  { name:'sumoimi',price:20000,camera:'12pc',color:'black'},
  { name:'Itel',price:10000,camera:'12pc',color:'black'},
]

function cheapestPhone(cheap) {
  let min = cheap[0]
  for (let i = 0; i < cheap.length; i++){
    if (min.price > cheap[i].price) {
      min = cheap[i];
    }
  }

  return min;
}
const cheap = cheapestPhone(phones);
console.log(cheap);