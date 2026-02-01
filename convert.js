function feetToInch(inch) {
  let feet = inch / 12;
  let feetNumber = parseInt(feet);
  let Fraction = inch % 12;

  let result = feetNumber+' ft and '+ Fraction+' inch.';

  console.log(result);

const heith = 75;
feetToInch(heith);
// console.log(feetToInch(heith));