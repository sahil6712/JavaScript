// Take 5 numbers to sum and average

let sum = 0; // To store sum
let average = 0; // To store average        

for(let i=0; i<5; i++) {
    let a = Math.floor(Math.random()*90)+10; // To get the number in each iteration
    console.log("number ",i+1," is ",a);
    sum += a; // update total sum
}

average = sum/5; // Calculate average

console.log("Sum of number: ",sum);
console.log("average of number: ",average);