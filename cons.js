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


///

function Devloper(name, age){ // constructure function 
    this.name = name;  // this is Inside constructor
    this.age = age;


    //share common method 
    this.work = function(){
        console.log("solve error");
        
    }

    return "goodday" ; // inside constructure it ignore prmetive data
}

//new: Create a new empty object and use Alien constructor on it.
let dev1 = new Devloper ('isha', 20); //This is calling the constructor.
let dev2 = new Devloper ('yashi', 24);

console.log(dev2);
dev1.work(()); // calling work fun