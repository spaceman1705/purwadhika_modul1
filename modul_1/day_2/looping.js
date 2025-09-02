// while loop

let i = 0;
while (i < 5) {
    console.log(1);
    i+=1;
}
console.log(i);

// for loop
for (let j=10; j > 0;j--) {
    console.log(j);
}

// do dwhile
let x = 11;
do {
    console.log(x);
    x++;
} while (x < 10);


for (let k = 0; k < 5; k++) {
    if (k === 3) {
        console.log("bertemu break");
        break;
    }
    console.log(k);
}
for (let k = 0; k < 5; k++) {
    if (k === 3) {
        console.log("bertemu continue");
        continue;
    }
    console.log(k);
}
