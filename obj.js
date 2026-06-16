//learning object in java 
//object literal
let laptop = {
    name: 'lenovo', // property
    model: 'yoga 7i',
    purpose: 'coding'
}

console.log(laptop.name); // fetching the name 
// console.log(laptop) : { name: 'lenovo', model: 'yoga 7i', purpose: 'coding' }



// according to user input 
let input = 'name'
let laptop = {
    name: 'lenovo',
    model: 'yoga 7i',
    purpose: 'coding',
    'work time': 5
}

console.log(laptop[input]); /// to fetch use square bracket in this con
console.log(laptop['work time']); /// to fetch two word data use square bracket in this con



/////////////////////////////////////////////////
// Complex object, delete property in js

let alien = {
    name: 'isha',
    tech: 'JS',
    age: 20,

    //object inside object 
    com:{
        cpu: 'i7',
        ram: 4,
        Brand:'apple'

    }
    

}
delete alien.tech // delete the property 
console.log(alien.com.cpu.length);



/////////////////////////////
// for loop 
let alien = {
    name: 'isha',
    tech: 'JS',
    age: 20,

    //object inside object 
    com:{
        cpu: 'i7',
        ram: 4,
        Brand:'apple'

    }
    

}
 
for(let key in alien)
{
    console.log(key, alien[key]);
}