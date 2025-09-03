// function declaration
function addTwo(num){
    return num + 2;
}

function addTwo1(num){
    console.log(num + 2);
}
console.log(addTwo(8));
addTwo1(10);
addTwo1(20);

function addNumbers(num1, num2){
    console.log(num1 + num2);
}

addNumbers(5, 10);

function greet(){
    console.log("Hello, World!");
}

greet();

function greet1(){
    return "Hello, World!";
}

const message = greet1();
console.log(message);


// REST PARAMETER
function substractNumber(...nums){
    console.log(nums);
    let sum = nums[0];
    for(const num of nums){
        sum += num;
    }
    console.log(sum);
}

function substractNumber1(...nums){
    console.log(nums);
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        sum -= nums[i];
    }
    console.log(sum);
}

substractNumber(10, 5, 4, 6, 7, 1, 9);
substractNumber1(50, 5, 4, 6, 7, 1, 9);

// FUNCTION EXPRESSION
const multiplyNumber = function(a, b){
    return a * b;
}

console.log(multiplyNumber(5, 10));

// Arrow Function
const divideNumber = (a, b) => a / b;

console.log(divideNumber(20, 4));


const checkEvenOdd = (num) => {
    let mesaage = "";
    if(num % 2 === 0){
        message = "Bilangan " + num + " adalah genap";
    } else {
        message = "Bilangan " + num + " adalah ganjil";
    }
    return message;
}

const checkEvenOdd1 = (num3) => {
    // ternary operator (penyingkat if else)
    return (num3 % 2 === 0) 
    ? "Bilangan " + num3 + " adalah genap" 
    : "Bilangan " + num3 + " adalah ganjil";
}
console.log(checkEvenOdd1(7));