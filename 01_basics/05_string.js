const name = "mannat"
const repoCount = 50

//console.log(name + repoCount + "value");
console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("reptide-gp")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(-1,5)
console.log(newString); // javascript does not support negative indexing in substring(),it automatically converts negative value to 0.

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    mannat   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://admin.com/password%20localhost"

console.log(url.replace('%20', '-'));

console.log(url.includes('password'));
console.log(gameName.split('-'));











