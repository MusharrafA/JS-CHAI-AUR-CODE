//reduce 
// .reduce(() => (),0)
// .reduce(() => {return},0)
const myNums = [1,2,3,4]
// const mytotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+ currval
// }, 0)

const mytotal = myNums.reduce((acc,curr) => acc+curr, 0)
console.log(mytotal);

const shoppingcart = [
    {
        course: "javascript",
        price:"3000"
    },
    {
        course: "java",
        price:"5000"
    },
    {
        course: "data scientist",
        price:"31000"
    },
]

const pricetopay = shoppingcart.reduce((acc,item) => acc + item.price ,0)
console.log(pricetopay);
