const greet = (message, cb) => {
    console.log(message);
    cb();
};

const sayBye = () => {
    console.log("Oke Bye");
};

greet("Hallo", sayBye);

const arr = [5, 4, 3, 2, 1];
arr.sort((a, b) => a - b);

arr.map((num) =>{
    console.log(num);
});