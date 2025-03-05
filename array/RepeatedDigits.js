// Array to store repeated digits like 11,22,33 upto 100
let repeatedDigits = [];

for(let i=11; i<100; i+=11) {
    repeatedDigits.push(i);
}

// Output
console.log("Repeated digits are:");
for(let ele of repeatedDigits) {
    console.log(ele);
}