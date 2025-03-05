const args = process.argv.slice(2);

if(args.length == 0) {
    console.log("node file.js <input>");
    process.exit(1);
}

let num = parseInt(args[0]); 

// array to store all the factors
let factors  = new Array();
let divisor = 2;

while(num >= 2) {
    if(num%divisor == 0) {
        factors.push(divisor);
        num = num/divisor;
    }
    else {
        divisor++;
    }
}

// output
console.log(`Factors of ${num} are: \n`)
for(let factor of factors) {
    console.log(factor);
}