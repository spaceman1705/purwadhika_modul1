// write a code to check wheather a number is even or odd
let number1 = 26
                // using if else
if (number1 % 2 === 0) {
    console.log(number1 + " adalah bilangan genap");
} else {
    console.log(number1 + " adalah bilangan ganjil");
}
                // using switch case
switch (number1 % 2) {
    case 0:
        console.log(number1 + " adalah bilangan genap");
        break;
    case 1:
        console.log(number1 + " adalah bilangan ganjil");
}


//write a code to check wheather the number is prime number or not
// bilangan prima adalah bilangan yang cuma bisa di bagi dengan bilangannya tersebut dan 1
let number2 = 7;
if (number2 > 1) {
    let prima = true;
    for (let i = 2; i < number2; i++) {
        if (number2 % i === 0) {
            prima = false;
            break;
        }
    }
    if (prima) {
        console.log(number2 + " adalah bilangan prima");
    } else {
        console.log(number2 + " bukan bilangan prima");
    }
}

//write a code to find the sum of the number 1 to N
let n = 5;
let sum = 0;
let i = 1
for (i ; i <= n; i++) {
    sum += i;
}
console.log(sum);
            // using while loop
while (i <= n) {
    sum += i;
    i++;
}
console.log(sum);



//write a code to find factorial of a number
let angka = 6;
let factorial = 1;
let j = 1;
for (j ; j <= angka; j++) {
    factorial *= j;
}
console.log(factorial);
            // using while loop
while (j <= angka) {
    factorial *= j;
    j++;
}
console.log(factorial);



//write a code to print the first N fibonacci numbers
let fibon = 15;
let a = 0;
let b = 1;
let c;
if (fibon >= 1) {
    console.log(a);
    for (let d = 1 ; d <= fibon; d++) {
        console.log(b);
        c = a + b;
        a = b;
        b = c;
    }
} else {
    console.log("Input harus lebih besar dari atau sama dengan 1");
}