//1. write an loop that culclate the sum of all numder from 1 to 5 and store the result in a variable named sum

let sum = 0;
let i = 1;
// 1+ 2+ 3 + 4 + 5 = 15

while (i <= 5) 
    {
        sum += i; // sum = sum + i
        i++;
    }
// console.log(sum);


// write a while loop  that counts down from 10 to 1 and stores numders in a array named countdown

let countdown = [ ];
let j = 10;
while (j >= 1) {
    countdown.push(j);
    j--;
}
console.log(countdown);

