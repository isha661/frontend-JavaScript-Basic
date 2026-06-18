


// this is third party compare
function getFastLaptop(laptop1, laptop2)
{
    if(laptop1.cpu > laptop2.cpu){
    console.log(laptop1);
}
else{
    console.log(laptop2);
}

}



let laptop2 = {
    cpu: 'i7',
    ram: 16,
    brand: 'apple',

    getConfig: function(){

        console.log(this.cpu);
    }

}

let laptop1 = {
    cpu: 'i9',
    ram: 9,
    brand: 'hp',

    getConfig: function(){
        console.log(this.cpu);
        }
}

getFastLaptop(laptop1, laptop2);




/////laptop comparing it slef 


let laptop2 = {
    cpu: 'i7',
    ram: 16,
    brand: 'apple',
    
    compare: function(other){
        if(this.cpu > other.cpu)
        {
            console.log(this);
        }
        else
        {
            console.log(other);
        }   

    },

    getConfig: function(){

        console.log(this.cpu);
    }

}

let laptop1 = {
    cpu: 'i9',
    ram: 9,
    brand: 'hp',
    compare: function(other){
        if(this.cpu > other.cpu)
        {
            console.log(this);
        }
        else
        {
            console.log(other);
        }   

    },

    getConfig: function(){
        console.log(this.cpu);
        }
}

laptop2.compare(laptop1);