// This is the syntax of switch case 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3    // we can take here march but we need to change it in condition like below
switch (month) {
    case 1:         //in the case of taking march here, we need to write "jan"
        console.log("January")
        break;
    case 2:         // here "februry " in case of month in string
        console.log("feb")
        break;
    case 3:      // check it string or not 
        console.log("march")
        break;

    default:
        console.log("other")
        break;
}