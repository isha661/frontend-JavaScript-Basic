//

let laptop = {   // creating object
    cpu: 'i9',
    ram: 16,
    Brand: 'HP',


    // adding function which is method
    greet: function(user){
        console.log(`helloo this is me ${user}`);
    }
}

laptop.greet("isha");