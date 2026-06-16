// learning function in javascript

//defining function
function greet()
{
    console.log("hello isha goodmorning !!");
}
greet();  // calling function 




//// passing and accepting in function 
function food(user) // creating // accpetimg  user
{
    return `${user} momo !!`

}
let user = "isha all time fav is ";
let type = food(user ); // calling  //passing user 
console.log(type); // printing 






// function expression in javascript

let add = function(num1 ,num2)//assigning function in varaibale (add)
{
  return num1 + num2;
} 
// let sum = add
// let result = sum(5,6)

let result = add(5, 6)

console.log(result);
