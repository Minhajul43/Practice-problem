const Prices = [12, 34, 45, 56, 67, 76, 78, 89, 34, 34, 2, 45, 1, 45];

function min(number) {
  let min = number[0];
  for (let i = 0; i < number.length;i++) {
    if (min > number[i]) {
      min = number[i];
    }
  }
  return min;
  
}

const minimum = min(Prices);
console.log("The minimum prices is:",minimum);