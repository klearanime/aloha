const languages = require('./db.js');


const userLanguage = process.argv[2]
// to.toLowerCase()
const words = userLanguage

console.log(languages.greeting)
console.log(languages.farewell)
