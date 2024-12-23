//singleton objects means single onjects

const tinderUser = {}
// const tinderUser = new Object()  this is also used to define onjects 

tinderUser.id = "12344"
tinderUser.name = "Sammmy"
tinderUser.isLoggedIn = false

// console.log(tinderUser )

const regularUser = {
    email: "bahiw@gmail.com",
    fullname: {     // we can do nesting here t will not problme anyone
        userfullname:{
            firstname: "bhai",
            lastname: "khan"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userfullname.firstname); // we access nested elements

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
// const obj3= Object.assign(obj1, obj2)
const obj3 = {...obj1,...obj2}  // this is user to combine 
console.log(obj3)

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // 
const course={
    coursename: "java script",
    price: "999",
    courseInstructor:"hitesh"
}
//cource.courseInstructor
const {courseInstructor: instructor}=course
// console.log(courseInstructor); //iski value ke liye hame course.courseInstructor likhne ki jarurat nhi h
console.log(instructor) // yaha CInstructor ka naya naaam instructor de diya hai

//JASON 
{
    //yaha is file ka koi naam nhi hai mtlb variable nhi diye hai toh yeh as a JASON act kregi
    name:"moju"
    coursename:"JS"
    price:"free"
}
//API
//api mtlb apna kaam dusro se krwana
//API in the form of strings
{

}
//APIs in the form of Arrays
[
    {},
    {},
    {}//yaha arrays store hota hai 
]
