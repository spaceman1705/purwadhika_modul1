//NUMBER

let angka = 5;
console.log(angka.toFixed(2)); // Membulatkan angka menjadi 2 desimal

//STRING

let text = "Hello, World!";
console.log(text.toUpperCase()); // Mengubah teks menjadi huruf besar
let textAngka = "5";
console.log(Number(textAngka));
console.log("Hello, Budi".toLowerCase()); // Mengubah teks menjadi huruf kecil

let num = "5.232523";
num = Number(num);
console.log(typeof num);
num = num.toFixed(1);
console.log(typeof num);
num = num.replace("3", "2");
console.log(num);