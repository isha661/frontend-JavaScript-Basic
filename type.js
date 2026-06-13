// Type Conversion & Type Coercion

let num = 6
console.log(num, typeof num)

//
let x 
console.log(x, typeof x);

x = 8
console.log(x, typeof x);

x = x + ""
console.log(x, typeof x);

x = !x
console.log(x, typeof x);

////
let y = parseInt("123 isha");
console.log(y);  




//shorts 
let value = 4
value += 2 // value = value + 2
value ++  // post increment
console.log(value)
++value  // pre increment
console.log(value)



//Arthimetic Operators +,-,/,%
let num1 = 4
let num2 = 2
let result = num1 + num2
console.log(result);



//Relational Operator <,>,==
let data = 7 > 8
console.log(data);

data = 6 <= 6
console.log(data);

let m = "3" //string
let n = 3
let o = m === n // == : check equal value, ===: strict equality operator
console.log(o)



//logical Operator
let c = 7, d = 8, e = 9
let ans = c > d && c > e  // and operator (.)
console.log(ans)

let ans = c > d + c > e  // OR operator (+)
let ans = c > d + c > e  // NOT operator (!)


