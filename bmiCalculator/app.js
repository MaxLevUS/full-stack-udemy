function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  var interpretation = Math.floor(bmi);

  if (interpretation < 18.5) {
    console.log("Your BMI is " + interpretation + ", so you are underweight.");
  }
  if (interpretation > 18.5 && interpretation < 24.9) {
    console.log(
      "Your BMI is " + interpretation + ", so you have a normal weight."
    );
  }
  if (interpretation > 24.9) {
    console.log("Your BMI is " + interpretation + ", so you are overweight.");
  }

  return interpretation;
}

bmiCalculator(100, 1.85);
