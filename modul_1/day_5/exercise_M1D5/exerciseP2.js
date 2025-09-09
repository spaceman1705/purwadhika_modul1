// write a function from a given array of mixed data types and return the sum of all the number
function mixedArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        let item = arr[i];
        if (typeof item === "number" && !isNaN(item)){
            sum += item;
        }
    }
    return sum;
}
console.log(mixedArray(["3", 1, "string", null, false, undefined, 2]));


// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements)
function insertMaxSize(maxSize, ...nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (result.length < maxSize) {
            result.push(nums[i]);
        } else {
            break;
        }
    }
    return result;
}
console.log((5, 5, 10, 24, 3, 6, 7, 8));


// Write a function that will combine 2 given array into one array
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(combineArrays(array1, array2));


// Write a function to find duplicate values in an array
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let value of arr) {
        if (seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    }
    return Array.from(duplicates);
}
let numbers = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(numbers));


// Write a function to find the difference in 2 given array
function arrayDifference(arrx, arry) {
    let difference = [];

    for (let val of arrx) {
        if (!arry.includes(val)) {
            difference.push(val);
        }
    }
    for (let val of arr2) {
        if (!arrx.includes(val)) {
            difference.push(val);
        }
    }
    return difference;
}
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];
console.log(arrayDifference(a, b));