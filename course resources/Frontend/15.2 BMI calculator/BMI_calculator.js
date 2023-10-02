function bmiCalculator(weight, height) {
    var bmiCalculator = weight / (height ** 2);
    if (bmiCalculator < 18.5) {
        var interpretation = "Your BMI is " + bmiCalculator + " , so you are underweigth";
    }
    if (bmiCalculator >= 18.5 && bmi <= 24.9) {
        var interpretation = "Your BMI is " + bmiCalculator + " , so you have a normal weight";
    } else {
        var interpretation = "Your BMI is " + bmiCalculator + " , so you are overweigth";
    }
    return interpretation;
}

console.log(bmiCalculator(50, 1.75));