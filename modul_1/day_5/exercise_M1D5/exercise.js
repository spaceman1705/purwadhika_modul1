function primitiveOnly(arr){
    const result = [];
    for(const val of arr){
        if(typeof val !== 'object' || val === null){
            result.push(val);
        }
    }
    return result;
}

console.log(primitiveOnly([1, "2", true, null, undefined, {}, [], function(){}]));



function sumDupliacate(arr1){
    let sum = 0;
    const dup = [];
    for(let i = 0; i < arr1.length; i++){
        if(dup.includes(arr1[i])){
            continue;
        }
        let count = 0;
        for(let j = 0; j < arr1.length; j++){
            if(arr1[i] === arr1[j]){
                count++;
            }
        }
        if(count > 1){
            sum += arr1[i] * count;
            dup.push(arr1[i]);
        }
    }
    return sum;
}
console.log(sumDupliacate([10, 20, 40, 10, 50, 30, 10, 60, 10]));


