function bmiCalculate(weight, height) {
    var calculate = Math.round(weight/ (height * height));
    return calculate;
  }
  
  let bmi = bmiCalculate(65, 1.8);
  console.log(bmi);