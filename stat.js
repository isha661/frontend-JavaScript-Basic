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