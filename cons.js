// learning construction in js 
// A constructor is a special function used to create and initialize objects.
// this : the current object being created

function Alien(name, age){ // constructure function 
    this.name = name;  // this is Inside constructor
    this.age = age;
}

//new: Create a new empty object and use Alien constructor on it.
let alien1 = new Alien('isha', 20); //This is calling the constructor.
let alien2 = new Alien('yashi', 24);

console.log(alien2);