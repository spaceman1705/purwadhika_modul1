// write a code to display the multiplication table of a given integer
let num = 9;
let limit = 10;
for (let i = 1; i <= limit; i++) {
    console.log(num + "x" + i);
}


// write a code to check wheather a string is a palindrome or not
let str = "madam";
let reversedStr = str.split("").reverse().join("");
if (str === reversedStr) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}


// write a code to convert centimeter to kilometer
let cm = 100000;
let km = cm / 100000;
console.log(cm + " cm is equal to " + km + " km");


// write a code to format number as currency (IDR)
let amount = 1000;
let formattedAmount = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
console.log(formattedAmount);


// write a code to capitalize the first letter of each word in a string
let sentence = "hello world";
let capitalizedSentence = sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(capitalizedSentence);


// write a code to swap the case of each character in a string
let inputStr = "Hello World";
let swappedStr = inputStr.split("").map(char => {
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }
}).join("");
console.log(swappedStr);


// Write a code to find the largest of two given integers
let a = 10;
let b = 20;
if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}


// Write a conditional statement to sort three numbers
let x = 42;
let y = 27;
let z = 18;
if (x > y && x > z) {
    if (y > z) {
        console.log(x, y, z);
    } else {
        console.log(x, z, y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y, x, z);
    } else {
        console.log(y, z, x);
    }
} else {
    if (x > y) {
        console.log(z, x, y);
    } else {
        console.log(z, y, x);
    }  
}


// write a code that show 1 if input is a string, 2 if the input is a number, and 3 for others data type
let input = "123";
if (typeof input === "string") {
    console.log(1);
} else if (typeof input === "number") {
    console.log(2);
} else {
    console.log(3);
}


// write a code to change every latter a into * from a string of input
let text = "An apple a day keeps the doctor away";
let modifiedText = text.replace(/a/gi, "*");
console.log(modifiedText);