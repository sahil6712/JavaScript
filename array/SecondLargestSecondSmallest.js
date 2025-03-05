let nums = new Array();

// Array storing 3 digit number 
for(let i=0; i<10; i++) {
    let random = Math.floor(Math.random()*900)+100;
    nums.push(random);
    console.log(nums[i]);
} 

let largest = 99;
let secondLargest = 98;

for(let i=0; i<10; i++) {
    if(nums[i] > largest) {
        secondLargest = largest;
        largest = nums[i];
    }
}

let smallest = 1000;
let secondSmallest = 1001;

for(let i=0; i<10; i++) {
    if(nums[i] < smallest) {
        secondSmallest = smallest;
        smallest = nums[i];
    }
}

console.log(`Largest is ${largest} second largest is ${secondLargest} \nSmallest is ${smallest} and second smallest is ${secondSmallest}`);