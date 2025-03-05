let nums = [1,2,3,4,-1,-2,-3];

let count = 0; // For calculating the number of triplets with 0 sum

for(let i=0; i<nums.length-2; i++) {
    for( let j=i+1; j<nums.length-1; j++) {
        for (let k=j+1; k<nums.length; k++) {
            if((nums[i] + nums[j] + nums[k]) == 0) { 
                count++;
                console.log(`Triplet with sum zero is: ${nums[i]}, ${nums[j]}, ${nums[k]}`);
            }
        }
    }
}

if(count == 0) {
    console.log("There are no triplets with 0 sum");
}