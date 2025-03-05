// Map to store number of people with same birthday month
let birthdayMonth = new Map();

// birth month of 50 individuals between the year 92 & 93.
for(let i=0; i<50; i++) {
    let birthMonth = Math.floor(Math.random()*12)+1;

    if(birthdayMonth.has(birthMonth)) {
        let freq = birthdayMonth.get(birthMonth)+1;
        birthdayMonth.set(birthMonth,freq);
    } 
    else {
        birthdayMonth.set(birthMonth,1);
    }
} 

// output
birthdayMonth.forEach((value, key)=> {
    console.log(`${value} people born in ${key}`);
})