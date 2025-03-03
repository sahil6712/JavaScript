// Take 5 numbers to sum and average

let sum = 0;
let average = 0;

for(let i=0; i<5; i++) {
    let a = Math.floor(Math.random()*90)+10;
    console.log("number ",i+1," is ",a);
    sum += a;
}

average = sum/5;

console.log("Sum of number: ",sum);
console.log("average of number: ",average);