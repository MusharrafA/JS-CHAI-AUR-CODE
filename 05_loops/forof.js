// for-of loop

// ["","",""]
// [{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
    
}
const greeting = "Hello dunia "
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('Aus',"Australia")
// console.log(map);


// yaha key aur value define krna padega
// for(const [key, value] of map){
// console.log(key, ':-', value);

// }
const myObject = {
    'game1': 'NFS',
    'game2': 'CoC'
}
// this is not working for object it will give error called object is not iterable
for(const [key, value] of myObject){
    console.log(key, ':-', value);
    
}
