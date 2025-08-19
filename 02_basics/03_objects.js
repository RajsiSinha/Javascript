// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "tia",
    "full name": "tia roy",
    [mySym]: "mykey1",
    age: 20,
    location: "Bihar",
    email: "tia@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) // access symbol

JsUser.email = "tiaroy@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "tiaroy@yahoo.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






 