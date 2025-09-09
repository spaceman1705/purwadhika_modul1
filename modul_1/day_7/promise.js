
// SYNCHRONUS
console.log(1);
console.log(2);
console.log(3);

// ASYNCHRONUS
console.log(1);
setTimeout(() => console.log(2), 2000);
console.log(3);

// PROMISE

const makeIceCream = new Promise((resolve, reject) => {
    //let isReady = true;
    let isReady = Math.random() > 0.5; 

    setTimeout(() => {
        if (isReady){
            resolve("Es Krim sudah siap diambil");
        } else {
            reject("Es krimnya jatoh");
        }
    }, 2000);
});
//console.log(makeIceCream);
makeIceCream
    .then((str) => console.log(str, "ini then jalan"))
    .catch((err) => console.log(err, "ini catch jalan"))
    .finally(() => console.log("Sidah Selesai"));


// ASYNC AWAIT
async function networkCall(){
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        //data.then((data) => console.log(data));
        const res = await data.json();

        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
//networkCall();

const ob = {
    name: "Budi",
    age: 22,
};

const json = JSON.stringify(obj);
console.log(json);

const newObj = JSON.parse(json)
console.log(newObj);

let str = "test";
str = 5;