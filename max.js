// find maximum number among the three number?

const num1 = 343;
const num2 = 345;
const num3 = 454;

function getMax(num1,num2,num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  else if (num2 > num1 && num2 >> num3) {
    return num2;
  }
  else {
    return num3;
  }
}

const maximum = getMax(num3, num1, num2);
// console.log(maximum);

// using another strategy 
const max = Math.max(23, 32, 45, 56, 67);
console.log("The maximum number is:",max);