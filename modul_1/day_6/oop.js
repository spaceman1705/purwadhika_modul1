const mouse1 = {
    // properti object
    // brand, type, price adalah key
    // "Logitech", "GX-500", 250000 adalah value
    brand: "Logitech",
    type: "GX-500",
    price: 250000,
};

console.log(mouse1);
console.log(mouse1.brand);
console.log(mouse1.type);
console.log(mouse1.price);
console.log(mouse1["brand"]);

mouse1.price = 300000; // update value
mouse1.color = "black"; // menambah key dan value baru
console.log(mouse1);
delete mouse1.type; // menghapus key dan value [type]
console.log(mouse1);

const person = {
    name: "John doe",
    email: "john@gmail.com",
    phoneNumber: "08123456789",
    address: {
        address: "Jl. Merdeka No. 1",
        postal: {
            code: 12345,
            provinsi: "DKI Jakarta",
            kecamatan: "Gambir",
        },
    },
};

console.log(person.address.postal.kecamatan);

const test = {
    a: "ini string",
    b: 12345,
    c: [
        {
            d: "ini object di dalam array",
            e: 67890,
            f: [1, 2, 3, 4, 5],
        }
    ]
}

// mutable dan immutable
// primitive data type (string, number, boolean) -> immutable
// reference data type (object, array) -> mutable
let string1 = "hello";
let newString = string1; // copy by value
newString = "world"; // merubah value newString
console.log(string1); // hello

const arr = [1, 2, 3];
const newArr = arr;
arr.push(4); // merubah isi array newArr
console.log(newArr); // [1, 2, 3, 4]

// FOR IN LOOP
const keyboard = {
    brand: "Logitech",
    type: "Mechanical",
    price: 1500000,
};

for (const key in keyboard) {
    console.log(key); // menampilkan key
    console.log(keyboard[key]); // menampilkan value
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const laptop = {
    brand: "Asus",
    type: "ROG",
    cpu: "Intel Core i7",
    ram: "16GB",
    gpu: "NVIDIA GeForce RTX 3060",
    storage: "1TB SSD",
    display: "15.6 inch",
    price: 20000000,
};

const { 
    brand: brands, // alias 
    type, 
    cpu, 
    ram, 
    gpu, 
    storage, 
    display, 
    price 
} = laptop; // destructuring object


console.log(brands);
console.log(type);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

