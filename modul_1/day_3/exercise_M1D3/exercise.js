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
