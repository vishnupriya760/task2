
// task1

for (let yr = 2000; yr <= 2050; yr++) {
if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
console.log(yr + " is a leap year");
}
}

// task2


let P = 5000;
let R = 5; 
let T = 3; 

let SI = (P * R * T) / 100;


console.log("Simple Interest after 3 years is ₹" + SI);


//task3

let pr=45000;
let disc=0;
if(pr<10000){
    disc=0.05
}
//task7
let radius=10;
let height=20;
let result=2*3.14*radius*(radius+height)
    console.log(result);
    
