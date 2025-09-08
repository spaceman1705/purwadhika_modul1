// write a function to get the lowest. highest and average value in the array
arr = [12, 5, 23, 18, 4, 45, 32];
function getLowestHighestAverage(arr) {
    let lowest = arr[0];
    let highest = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
        if (arr[i] > highest) {
            highest = arr[i];
        }
        sum += arr[i];
    }
    let average = sum / arr.length;
    return {
        lowest: lowest,
        highest: highest,
        average: average,
    };
}
console.log(getLowestHighestAverage(arr));


// write a function that takes an array of words and return a string by concatenating the words in the array, separated by commas and the last word should be separated by "and"
function concatenateWords(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += ", ";
        }
        if (i === arr.length - 2) {
            result += "and ";
        }
    }
    return result;
}
console.log(concatenateWords(["apple", "banana", "cherry", "date"]));


// write a function from a given array of numbers and return the second smallest number in the array
function getSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}
console.log(getSecondSmallest([5, 3, 1, 7, 2, 6]));


// write a function to calculate each element in the same position from two arrays of integer. assume both array are of the same length
function sumArrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}
console.log(sumArrays([1, 2, 3], [3, 2, 1]));


// write a function that adds an element to the end of array. however, the element should only be added if it is not already in the array
function addNewElement(arr, element) {
    if (!arr.includes(element)) {
        arr.push(element);
    }
    return arr;
}
console.log(addNewElement([1, 2, 3, 4], 4));
console.log(addNewElement([1, 2, 3, 4], 7));