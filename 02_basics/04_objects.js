// const tinderUser = object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123"
tinderUser.name = "sanaya"
tinderUser.isloggedin = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tia",
            lastname: "roy"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign( obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    }

]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isloggedin"));

const course = {
    coursename: "Js",
    price: "899",
    courseInstructor: "abc"
}

//course.courseInstructor  //oldmethod

const {courseInstructor: instructor} = course
console.log(instructor);


//JSON
// {
//     "name": "tia",
//     "coursename": "Js",
//     "price": "899"
// }


