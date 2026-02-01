function OddAverage(array) {
  // console.log(array);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0) {
      sum = sum + array[i];
      count++;
    }
  }
  console.log(sum);
  console.log(count);
  let avg = sum / count;
  return avg;
}

let array = [23, 43, 54, 65, 78, 34, 23, 34, 65, 34, 53];
const Average = OddAverage(array);
console.log("The average of the Odd number is:",Average);