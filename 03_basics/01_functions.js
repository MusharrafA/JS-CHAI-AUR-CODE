//functions 

function sayMyName(){
    console.log("h");
    console.log("i");
    
    
}
// sayMyName()// this is used to execute 
// function addTwoNumbers(no1, no2){  //these nos are parameters 
//     console.log(no1+no2);
// }
// addTwoNumbers(3, 4);// these nos are arguments
// function addTwoNos(no1, no2){
//     let result = no1+no2
//     return result
// }
// const result = addTwoNos(3, 5)
// console.log("result: " , result);


// function loginUserMessage(usernaam){
//     if(usernaam === undefined){
//          console.log("Please enter a usernaam")
//     }
//     return`${ usernaam} just logged in`
// }
// // console.log(loginUserMessage("moju"))
// console.log(loginUserMessage());

function calculateCartPrice(...num1){  //agar yaha (val1, val2, ...num1) hota toh console me 500 aur 2000 hi aata kyoki 200 aur 500 val1 and val2 me store ho jate 
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

//object
const user = {
     usernaam: "moju",
     age: "23",
     price:"2233"   
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.usernaam} and price is ${anyobject.price}`);
}

