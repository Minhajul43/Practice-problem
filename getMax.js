const num1 = 32;
const num2 = 54;

if (num1 > num2) {
  // console.log('The maximum number:', num1);
}
else {
  // console.log('The maximum number:', num2);
}

// using build in function 
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
const result = getMax(num1, num2);
console.log(result);