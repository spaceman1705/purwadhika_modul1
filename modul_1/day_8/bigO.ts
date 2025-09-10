function o1(n:number[]){
    return n[0];
}
console.log(o1([5, 6, 7, 8, 9, 10, 42, 69, 12, 100]));

function on(n: number[]){
    for (const num of n){
        console.log(num);
    }
    
}

on([])