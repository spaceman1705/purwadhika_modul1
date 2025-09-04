// TRUTHY & FALSY

// TRUTHY
console.log(Boolean("3")); // true
console.log(Boolean([])); // true

// FALSY
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

function greet(mesaage){
    if(!mesaage){
        return "INPUT TIDAK SESUAI";
    }
    return message;
}
console.log(greet());

// SHORT CIRCUITING && OPERATOR
console.log(false && "OPERAND KANAN JALAN");

// SHORT CIRCUITING || OPERATOR

function showName(name){
    const nama = name || "USER";
}
console.log(showName("Budi"));