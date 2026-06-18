//  learning array in js

//creating array of value
let values = new Array(5,6,7); // or []; both give empty array 
console.log(values);
console.log('the length of an array is ',values.length);


// function of array
//push() : if i want to assign value 
let arrayNum = [];
arrayNum.push(5,10); // this Adds item at the end.
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

