//Conditiona statement : If Else
// finding smallar or big num
let num1 = 6;
let num2 = 4;
let num3 = 7;

if(num1 > num2 && num1 > num3){
    console.log("num1 is greater");
}
else if(num2 > num1 && num2 > num3){
    console.log("num2 is greater");
}
else{
    console.log("num3 is greater")
}

console.log("byeeeee");



// find even or odd
let num = 7;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}


// Ternary operator 
// condition ? value_if_true : value_if_false
let result = 10;

console.log(result % 2 === 0 ? "Even number" : "Odd number");



// Switch Statement in Java Script
// Mon : 7am
// Tue to thurs : 4 am
// fri : 9am

// switch(day) → checks the value of day
//  case 1: → "Is day equal to 1?"

// If yes → runs the code
// If no → moves to next case
// break stops the switch
let day = "Friday"

switch(day){
  case "Monday":
    console.log("wake up at 7 am");
    break;

  case "Tuesday":
    console.log("wake up at 4 am");
    break;

  case "Wednesday":
    console.log("wake up at 4 am");
    break;
   
  case "Thursday":
    console.log("4 am");
    break;

  case "Friday":  
  case "Saturday":
    console.log("wake up at 9 am");
    break;
    
  default:
    console.log("No day found");  
    console.log("Give available day !!")

}



// Templeate Literal in javascript
// Template literals in JavaScript are a way to create strings using backticks ( ) instead of normal quotes
let ek1 = 4;
let ek2 = 5;
let last = ek1 + ek2
console.log(`The addition of ${ek1} and ${ek2} is ${last}`);

