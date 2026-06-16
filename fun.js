// learning function in javascript

//defining function
// function greet()
// {
//     console.log("hello isha goodmorning !!");
// }
// greet();  // calling function 




// //// passing and accepting in function 
// function food(user) // creating // accpetimg  user
// {
//     return `${user} momo !!`

// }
// let user = "isha all time fav is ";
// let type = food(user ); // calling  //passing user 
// console.log(type); // printing 






// function expression in javascript
// num1, num2 : parameter
let add = function(num1 ,num2)//assigning function in varaibale (add)
{
  return num1 + num2;
} 
// let sum = add
// let result = sum(5,6)

let result = add(5, 6) // arguments

console.log(result);



// Local and Global varaibale 
// varaible created inside function : local
// out side function : global

let glo = 'this is global'; // global

function me(g)
{
    let num = 5; // local
    console.log(num);
    return `hi ${g}`
}

let str = me(glo);
console.log(str);



//
function plus( val1, val2, val3) // val3 = 3 if there is two value in argument
{
    console.log(val1, val2, val3);
    return val1 + val2 + val3;
}
let ans = plus(1,2,3);
console.log(ans);




// arrow function in js
let greet = (user) => {
    console.log(`hello isha ${user}` );
    return 1;
}
console.log(greet('nisha'));


// example of arrow function:
let minus = (min1 , min2) =>  min1 - min2; // this is arrow fun

let res = minus(6,4)
console.log(res);



