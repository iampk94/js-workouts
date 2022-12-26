// snake case convert
//string = "This is a sample keyword for test"
// output be This_Is_A_Sample_Keyword_For_Test

export function snakeCase(str) {
    let stringArr = str.split(" ");
    function makeCaps(val) {
        let charArr = val.split("");
        const [first, ...remain] = charArr
        let firstChar = first.toUpperCase();
        return `${firstChar}${remain.join("")}`
    }

    if (stringArr.length === 1) {
        let result = makeCaps(str)
        return `${result}`
    } else {
        let tempArr = stringArr.map(val => makeCaps(val))
        return `${tempArr.join("_")}`;
    }
}