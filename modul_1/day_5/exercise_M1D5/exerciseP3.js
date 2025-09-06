// based on the array below write a function that wil return primitive values only
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


// write a function from the beelow array of numbers that will return the sum of duplicate numbers only
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


// write a game of rock paper scissors
function rockPaperScissors(player1, player2){
    let choice = ["rock", "paper", "scissors"];
    let random;
    random = Math.floor(Math.random() * 3);
    if(random === 0){
        player2 = "rock";
    }
    else if(random === 1){
        player2 = "paper";
    }
    else{
        player2 = "scissors";
    }
    if(player1 === player2){
        return "player 1 memilih "+player1 +" sedangkan komputer memilih "+player2+" hasilnya DRAW";
    }
    else if((player1 === "rock" && player2 === "scissors") || 
            (player1 === "scissors" && player2 === "paper") || 
            (player1 === "paper" && player2 === "rock")){
        return "player 1 memilih "+player1 + " sedangkan komputer memilih "+player2+" hasilnya PLAYER 1 MENANG";
    }
    else{
        return "player 1 memilih "+player1 + " sedangkan komputer memilih "+player2 +" hasilnya KOMPUTER MENANG";
    }
}
console.log(rockPaperScissors("rock"));