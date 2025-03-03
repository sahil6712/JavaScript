let n = parseInt(process.argv[2]);

// Check if n is a valid number
if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer for n.");
} else {
    console.log(`Powers of 2 up to 2^${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}
