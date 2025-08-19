 const marvel_heros = ["thor", "ironman", "spiderman"]
 const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
 console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // spread operator
console.log(all_new_heros);

const another_array = [1, 2, 3 , [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // removes subarrays
console.log(real_another_array);

console.log(Array.isArray("tia")); // false
console.log(Array.from("tia")); // 't', 'i', 'a'
console.log(Array.from({name: "tia"})); // [] // important

let score1 = 200
let score2 = 300
let score3 = 400
console.log(Array.of(score1, score2, score3));





 
 