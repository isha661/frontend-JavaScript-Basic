// learning set in js 
// set: A Set is a collection that does not allow duplicate values.

let nums = new Set("bookeeper");
console.log(nums);


// Adding values : (add())

let fruits = new Set();
fruits.add("banana");
fruits.add("apple");

fruits.forEach( n => {
  console.log(n);
})





// Checking if a value exists:  (has())

let falful = new Set(["apple", "banana", "pineapple", "graps"]);
console.log(falful.has("apple"));
