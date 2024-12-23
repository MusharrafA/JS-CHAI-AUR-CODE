const user = {
    username: "moju",
    price: "100",
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // here thus is current context because w need to call the functuion here with in the scope
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "bhai"
user.welcomeMessage()   //yeh function use hoga call krne ke liye variable ko
console.log(this )  //this will give "{}"  empty but when we do this in browser console it will give us "Window {}" .


// function chai(){
//     console.log(this);
// }
// chai()  //here it will give many objects like global,clearImmediate , setImmediate , etc....


//++++++++++this function+++++++++++++++++++++++++++++
// const chai = function(){
//     let username = "moju"
//     console.log(this.username);
    
// }
// chai()



///++++++arrow function++++++++++++++++++++++++++++++++++



// const chai = () =>{   // these arrow is arrow function
//     let username = "moju"
//     console.log(this); 
// }
// chai()


//arrow function


const addTwo = (num1, num2) => {
    return num1 + num2
}

// const addTwo = (num1, num2) => num1 + num2 
// const addTwo = (num1, num2) => (num1,num2)  
// const addTwo = (num1, num2) => ({username: "moju"})  yaha agar object ke liye sirf braces lagate toh return bhi lagana padta 

// yaha bhi function likh sakte hai lekin agar curly braces {} lagaya toh  return likhna padega agar() lagaya toh bina return lagayeh bhi likh sakte hai

console.log(addTwo(3, 5))

// () => () 
// () => {} yaha pe object  ko return krna padega
// () => ({})    yaha pe objecty ko return nhi krna padega

