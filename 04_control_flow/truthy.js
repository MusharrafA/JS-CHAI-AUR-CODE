const userEmail = "moju@gmail.in" // if string is empty
if(userEmail){
    console.log("Got the Email");    
} else{
    console.log("Don't have user Email");
    
}

//falsy values
// false, 0, -0, BigInt, "", null, undefined, NaN, 0n

//Truthy values
// "0", " ", 'false', [],{},function(){}

if(userEmail.length=== 0){     //length property
    console.log("Array is empty");
    
}
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Objectis empty");
    
}

// Nullish coalescing Operator (??) : null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
// val1 = null ?? 10?? 20  // here it take first vale
console.log(val1);

//Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

