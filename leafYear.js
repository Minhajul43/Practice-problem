function isLeafYear(year) {
  // simple logic!
  if (year % 4 === 0) {
    return true;
  }
  else {
    return false;
  }
}

// satisfy by all year
function LeafYear(year) {
  if (year % 400=== 0 || (year % 100 !==0 && year % 4===0)) {
    return true;
  }
  else {
    return false;
  }
}

const years = LeafYear(2012);
const year1 = LeafYear(2014);
const year2 = LeafYear(2026);
const year3 = LeafYear(2028);
const year4 = LeafYear(2030);

console.log(years,year1,year2,year3,year4);