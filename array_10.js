//  learning array in js

//creating array of value
let values = new Array(5,6,7); // or []; both give empty array 
console.log(values);
console.log('the length of an array is ',values.length);


// function of array
//push() : this Adds item at the end
let arrayNum = [];
arrayNum.push(5,10,12); 
console.log(arrayNum);



//unshift(): Adds item at the beginning.
arrayNum.unshift("isha");
console.log(arrayNum);



//Removing Items
// pop(): remove last item
arrayNum.pop();
console.log(arrayNum);

//shift(): remove first item
arrayNum.shift();
console.log(arrayNum);


//Finding an Item
//includes(): check if value exist 

console.log(arrayNum.includes(10));

// indexOf(): return position 
console.log(arrayNum.indexOf(5));



// Array with Different Data Types
let data = ["isha", 20, true, null];
console.log(data);



// splice

let stress = [1,2,3,4,5,6];
console.log(stress.splice(2,2)); // the number that is removed 
console.log(stress)







//////////////////////////////////////////////////////////////////////////



//loops in array

let nums = [];

nums[0] = 8;
nums[99] = 9;

console.log(nums.length);


//for of loop: gives you the value
for( let n of nums){
    console.log(n);
}


//for in loop: gives you the index/key

let fruits = ["apple", "banana", "orange"];

for(let index in fruits)
{
    console.log(index);
}



/////////////////////////////////////////////////////////////////////

//destructuring of array 
// taking values from an array and putting them into variables easily.

let country = ["nepal", "usa", "iceland"];
let asian = country[0];
console.log(asian);



//position in array 
let numbers = [1,2,3,4,5];
let [a,b,c,d,e] = numbers;
console.log(b);


// skip value in array
let color = ["red", "blue", "yellow","cyan"];
let [f,g,,i,] = color;
console.log(f);



//swapping values in array
let n = 88;
let m = 77;
[n,m] = [m,n];
console.log(n);
console.log(m);



// function in array 

function show([name, age]) // show: function name
{
    console.log(name);
    console.log(age);
}


show(["isha",20]);




// for each method 
//forEach() is a method that goes through every item in an array one by one and does something with each item.

let nums = [20,45,22,49, 89];
nums.forEach(n => {
    console.log(n);
})



// map: map() goes through each item in an array, modifies it, and returns a new array


let number = [20,30,40,50];
let value = number.map( n =>
{
    return n * 2;
}
);
console.log(value);



// filter: checks each item and keeps only the items that pass the condition.
let ran = [1,2,46,45,55,60];
// let evenNum = ran.filter( n => {
//     return n % 2 === 0;
// });
// console.log(evenNum);



let evenNum = ran.filter( n =>  n % 2 === 0)
  .forEach( n =>  {

    console.log(n);
});



// reduce(): reduce() takes multiple values and reduces them to one value.
let use = [1,2,3,4];
let newValue = use.reduce((sum, n) => {
    return sum + n ;
});
console.log("the one value :")
console.log(newValue)