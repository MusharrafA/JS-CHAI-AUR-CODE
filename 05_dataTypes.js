// Primitives data Types
// 7 types : String,number, boolean , null,undefined, symbol, BigInt !!!!!!!!!!

const score = 100
const scorevalue = 100.3 // we not need to define like float or integer it will automatically get number!!
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 8267534382312n // this is bigInteger!!!!!!!



//Reference or non primitives datatypes  :  Arrays , Objects , Functions!!!!!!!


//Arrays

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "moju",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world!");
}
console.log(typeof bigNumber)  // this is big Integer data type

console.log(typeof Function)  // this will return function!!!

console.log(typeof heros); /// this is object data type