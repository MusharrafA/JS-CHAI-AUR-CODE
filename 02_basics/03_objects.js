//object literals == means multiple object we can take
const mySym = Symbol("key1")
const JsUser = {
    name: "moju",
    "full name": "moju ansari",
    mySym: "mykey1",
    age: 18,
    location: "Bhopal",
    email: "moju@google.com",
    isLoggedIn: false

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])

JsUser.email = "khanbaba@gamil.com"
// Object.freeze(JsUser) //here object freeze the object so it will not take other value in JsUser
JsUser.email = "khan@google.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Helllo JS users, ${this.name}`); // this kyeword will give you the value you need by dot . 
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())