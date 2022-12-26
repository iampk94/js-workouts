export function removeDuplicate(arr){
    return arr.filter((val,index)=>arr.indexOf(val)=== index)
}

export function removeDuplicateArray(arr) {
    return [...new Set(arr)];
}
// Remove Duplicates from String
// string = 'aaAAbbBBccCC'
// output =abc
// outbut caseSentive = aAbBcC

export function removeDuplicateString(str) {
    //caseSentive
    // let smallCase=str.toLowerCase();
    let a = new Set(str)
    return [...a].join("");
}
