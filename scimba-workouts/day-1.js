/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

export function Day1(str) {
    let stringArr = str.split(" ");

    function makeCaps(val) {
        return val.toUpperCase();
        // const [first, ...remain] = charArr
        // let firstChar = first.toUpperCase();
        // return `${firstChar}${remain.join("")}`
    }

    if (stringArr.length === 1) {
        let result = makeCaps(str)
        return `${result} !`
    } else {
        let tempArr = stringArr.map(val => makeCaps(val))
        return `${tempArr.join(" 😱 ")}!`;
    }
}