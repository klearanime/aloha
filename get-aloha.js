const languages = require('./db.js')
// Your code here.


const greeting = languages.greeting
const farewell = languages.farewell
const helloGoodbye = {
    greeting: greeting,
    farewell: farewell,
}   

    const getAloha = function(words) {
    if (languages===greeting) {
        return greeting.toLowerCase(q);
    } else if (greeting === undefined) {
            return null
        } else {
            return greeting
        }
    }
    


// Our code here.
if (typeof getAloha === 'undefined') {
    getAloha = undefined;
}


module.exports = getAloha;