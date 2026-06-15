// loop in js
// while , do while and for loop

//////////////////////// while loop //nitialization, condition, increment
let i = 0 ;
 
while(i <= 5){
    console.log("My name is isha");
    i++;

}

//////////////////////do while 
// execute the code and then check the condition
let j = 1;
do{
    console.log("hi isha",j);
    j++;
}while(j<=5)


//////////////////////// for loop
for(let m = 1; m <= 5 ; m++)
{
 console.log("hi isha");
}


// exxercise 

for( let num = 0; num <=10; num++)
{
    
    console.log(num);
}



// even num from 1 - 20 using for and if
for (let even = 1; even <=20; even++){
    if( even % 2 === 0){
        console.log(even);
    }
}




//// sum of 1 to 100 using for loop
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);




//// multiplication of 5 using for loop
let num = 5;

for(let m = 1; m <= 10 ; m++)
{
    console.log(`${num} x ${m} = ${num * m}`); // tempelate literal
}




/////reverse 
let rev = 98974;
while(rev > 0)
{
    console.log(rev%10);
    rev = parseInt(rev / 10)
}