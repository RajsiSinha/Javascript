const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);    
}

const programming = ['js', 'python', 'cpp', 'java']
for (const key in programming) {
    console.log(`${key} : ${programming[key]}`);    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);  // not iterable
}
