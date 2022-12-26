// make multiple array based on given input

export function chunkArr(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + size) {
        let tempArr = arr.slice(i, i+size);
        newArr.push(tempArr);
    }
    return newArr;
}

// console.log(chunkArr(chunckArray,7));