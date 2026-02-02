const height = [23, 33, 54, 56, 76, 82, 12, 34, 45, 56, 75];

function getMax(number) {
  // console.log(number);
  let max = 0;
  for (let i = 0; i < number.length; i++){
    if (number[i] > max) {
      // let temp = number[i];
      // number[i] = max;
      // max = temp;
      max = number[i];
    }
  }
  return max;
}

const result = getMax(height);
console.log("The maximun number of array is :",result);