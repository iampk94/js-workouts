// convert multiple arrays of into single Array

let numArray = [11, 12, 13, 14, [15, [16, [17, [18, 19]]]]];
let newArr =[];

export function convertSingleArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            convertSingleArr(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(convertSingleArr(numArray););