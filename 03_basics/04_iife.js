// Immediately involked function expression (IIFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
// }) ()

// (function chai(){
//  console.log(`DB CONNECTED`)})  (chai())

//  ()()

// (yeh function )(yeh function call ) yeh dono iife kehlayenge 

(function chai(){
   console.log(`DB CONNECTED`);
}) ();

(function aurcode(){
    //named iife aur code
    console.log(`DB CONNECTED TWO`);
})();
((naam) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${naam}`);
}) ('moju')//yaha function call ho rha hai