/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama Anda: ", (name) => {
    let massage = "welcome";
    console.log(`Halo, ${name}! Selamat datang di program ini.`);
    rl.close();
});

//VARIABLE
//LET VALUE DIDALAMNYA BISA DIRUBAH
let massage = "Welocme, Budi";
console.log(5 + 5);

//CONST VALUE DIDALAMNYA TIDAK BISA DIRUBAH
const hello = "Hello World";
console.log(hello);
 */
let panjang;
let lebar;

panjang = 10;
lebar = 5;

const rumusPersegiPanjang = panjang * lebar;
console.log(`Luas Persegi Panjang adalah: ${rumusPersegiPanjang}`);

let a = 10;
let b = a;

a = 5;
console.log(a + b);

let now = new Date();
console.log(now);
let date = new Date("2023-08-27");
console.log(date);

let text = "5";
console.log(text + 5);
console.log(Number(text) + 5);
// concat
