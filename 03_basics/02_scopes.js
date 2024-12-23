// var c = 499
let a = 699 // these are global scope 
if(true){  // thiese curly braces are scope 
    let a = 10
    const b = 20
    var c = 30
    // console.log("andar: ", a);
}

// console.log(a);
// (console.log(typeof(b)))
// console.log(c);

// nested scope 
function ek(){

    const username = "moju"

    function doo(){  // yeh doo wala ek se maang sakta hai lekin yeh ek doo se nhi mang sakta (ice-cream)
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    // doo()
}
// ek()

if(true){
    const username = "moju"
    if(username === "moju"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++interesting++++++++++++++++++++++++
addek(5)
function addek(num){
    return num + 1

}
adddoo(5)   // yaha yeh error de dega kyuko function variable ke andar declare hua hai 
const adddoo = function(num){
    return num+2

}
