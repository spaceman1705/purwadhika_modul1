// create function that can creat a triangle pattern according to the height
function trianglePattern(height) {
  let pattern ="";
  let counter = 1;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += counter + " ";
            counter++;
        }
        pattern += "\n";
    }
    return pattern;
}
console.log(trianglePattern(4));


// create a function that can loop the number of times according to the input we provide, and will replace muliples 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz"
function fizzBuzz(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz";
        } else if (i % 3 === 0) {
            result += "Fizz";
        } else if (i % 5 === 0) {
            result += "Buzz";
        } else {
            result += i;
        }
    }
    return result;
}
console.log(fizzBuzz(6));


// create a function to calculate Body mass index (BMI)
let weight = 120; // in kg
let height = 1.75; // in meters
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Less weight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Ideal";
    } else if (bmi >= 25.0 && bmi < 29.9) {
        return "Overweight";
    } else if (bmi >= 30.0 && bmi <39.9 ) {
        return "Very Overweight";
    } else {
        return "Obesity";
    }
}
console.log(calculateBMI(weight, height));


// write a function to remove all odd numbers in an array and return a new array that cointains only even numbers
function removeOddNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// write a function to split a string and convert it into an array of words
function stringToArray(str) {
    return str.split(" ");
}
console.log(stringToArray("Hello world this is a test"));