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
