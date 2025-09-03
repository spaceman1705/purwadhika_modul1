// PRIMITIVE DATA TYPES
let num1 = 10; // number
let str1 = "Hello"; // string
let bool1 = true; // boolean
let und1; // undefined
let nul1 = null;

let temp;
console.log(temp); // undefined


// NON-PRIMITIVE DATA TYPES
let arr1 = [1, 2, 3, 4, 5]; // array
let obj1 = { name: "John", age: 30 }; // object

const arrOfNum = [1, 2, 3, 4, 5];
console.log(arrOfNum[0]);

const arrOfStr = ["apple", "banana", "cherry"];
/* arrOfStr.push("date");//masukkan data di akhir array
arrOfStr.unshift("mango");//masukkan data di awal array
arrOfStr.pop();//menghapus data di akhir array
arrOfStr.shift();//menghapus data di awal array */
console.log(arrOfStr);

const arr = [1, "two", true, null, undefined];
console.log(arr);

for (let i = 0; i < arrOfNum.length; i++) {
    console.log(arrOfNum[i]);
}


for (const value of arrOfStr) {
    console.log(value.toUpperCase());
}