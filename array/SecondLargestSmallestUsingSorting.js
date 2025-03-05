let nums = new Array();

// Array storing 3 digit number 
for(let i=0; i<10; i++) {
    let random = Math.floor(Math.random()*900)+100;
    nums.push(random);
    console.log(nums[i]);  // print the elements of array
} 

// Sort the array
nums.sort();

// Output
console.log(`Largest is ${nums[nums.length-1]} second largest is ${nums[nums.length-2]}\nSmallest is ${nums[0]} and second smallest is ${nums[1]}`);