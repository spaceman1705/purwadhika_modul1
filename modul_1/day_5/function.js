function pertambahan(...arr){
    let sum = 0;
    for(const num of arr){
        sum += num;
    }
    return sum;
}

console.log(pertambahan(5, 10, 15, 20, 25, 30));

// DEFAULT PARAMETER
function perkalian(a, b = 1){
    console.log(a, b);
    return a * b;
}

console.log(perkalian(5));
console.log(perkalian(5, 10));

// CURRYING
function makeSandwich(daging, sayur, tomat, sambal){
    return `Sandwich dengan isi ${daging}, ${sayur}, ${tomat}, dan ${sambal}`;
}

console.log(makeSandwich("ayam", "selada"));

function makeSandwich2(daging){
    return function(sayur){
        return `Sandwich dengan isi ${daging} dan ${sayur}`;
    }
}
console.log(makeSandwich2("sapi")("tomat"));

const kasihDaging = makeSandwich2("sapi");
const sandwichSelada = kasihDaging("selada");
const sandwichBrokoli = kasihDaging("brokoli");

console.log(sandwichSelada);
console.log(sandwichBrokoli);


function addition(n1){
    return function(n2){
        return n1 + n2;
    }
}
const tambah5 = addition(5);
console.log(tambah5(10));
console.log(tambah5(20));
const tambah10 = addition(10);
console.log(tambah10(20));


// level 1 -> info
// level 2 -> error

function log(level){
    return function(message){
        const timestamp = new Date().toISOString();
        console.log(timestamp, level.toUpperCase() + ":", message);
    }
}

const infoLog = log("info");
const errorLog = log("error");