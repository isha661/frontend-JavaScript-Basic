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




// Map and set 

let student = new Map();
student.set("isha", "python"); // adding value in map
student.set("ismini", "backend");
student.set("bd","frontend");



student.forEach((n, m) => {
       console.log(n , ":", m);
});

// for(let [n,m] of student){
//     console.log(n,":", m);
// }





// recursion function :function that calls itself to solve a problem.
let val = 1;
function show(){
  console.log("hello isha", val);
  val ++;

  if(val <= 9512)
    show();
}

show(); 



