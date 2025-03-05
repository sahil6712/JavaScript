// Map to keep track of frequency of number on each dice role
let map = new Map();

let condition = true;
while(condition) {
    //Roll a dice and find the number between 1 to 6
    let numberOnDice = Math.floor(Math.random()*6)+1;
    console.log(`dice rolled and the number is ${numberOnDice}`);
    
    if(map.has(numberOnDice)) {
        if(map.get(numberOnDice) >= 10) {
            condition = false;
            break;
        } else {
            let freq = map.get(numberOnDice)+1;
            map.set(numberOnDice, freq);
        }
    } else {
        map.set(numberOnDice, 1);
    }

}
let keyMax = 0;
let maxKeyFreq = 0;
let keyMin = 7;
let minKeyFreq = 0;
// Traversing the map
map.forEach((value, key)=> {
    if(value > maxKeyFreq) {
        keyMax = key;
        maxKeyFreq = value;
    }
    if(value < minKeyFreq) {
        keyMin = key;
        minKeyFreq = value;
    }
}); 

// output
console.log(`\nMaximum times ${keyMax} appeared on dice\nMinimum times ${keyMin} appeared on dice`);
