/* // conditional statement

// comparison operator
// equal, apakah 1 value sama dengan value lainnya (hanya mengecek value tanpa mengecek tipe data)
console.log("apel1" == "apel2");
console.log(10 == "10"); // true
console.log(angka % 2);

// strict equal, apakah 1 value sama dengan value lainnya (mengecek value dan tipe data)
console.log(10 === "10"); // false

//greater than, mengecek apakah value kiri lebih besar dari value kanan
console.log(10 > 5); // true

//less than, mengecek apakah value kiri lebih kecil dari value kanan
console.log(5 < 10); // true

//greater than or equal, mengecek apakah value kiri lebih besar atau sama dengan value kanan
console.log(10 >= 10); // true
console.log(10 >= 15); // false

//less than or equal, mengecek apakah value kiri lebih kecil atau sama dengan value kanan
console.log(5 <= 10); // true

//not equal, mengecek apakah value kiri tidak sama dengan value kanan
console.log(5 != 10); // true

//strict not equal, mengecek apakah value kiri tidak sama dengan value kanan atau tipe data berbeda
console.log(5 !== "5"); // true, karena tipe data berbeda */

/* let angka = 55;
if (angka % 2 === 0) {
  console.log(angka + " adalah bilangan genap");
} else {
  console.log(angka + " adalah bilangan ganjil");
} */

/* let nilai ="B";

if (nilai == "A") {
  console.log("Nilai Anda sangat baik");
} else if (nilai == "B") {
    console.log("Nilai Anda baik");
} else if (nilai == "C") {
    console.log("Nilai Anda cukup");
}else {
    console.log("Nilai Anda kurang baik");
} */

/* angka = 5;

if (angka == 5) {
  console.log("angka adalah 5");
} else if (angka >= 5) {
  console.log("angka lebih besar dari 5 atau sama dengan 5");
}

if (angka == 5) {
  console.log("angka sama dengan 5");
}
if (angka >= 5) {
    console.log("angka lebih besar dari 5 atau sama dengan 5");
} */

// switch case
let buah = "jeruk";

switch (buah) {
    case "apel":
        console.log("buah apel");
        break;
    case "mangga":
        console.log("buah mangga");
        break;
    case "pisang":
        console.log("buah pisang");
        break;
    default:
        console.log("buah " + buah + " tidak ada di daftar");

}