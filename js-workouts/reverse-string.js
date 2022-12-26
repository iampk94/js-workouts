export function reverseWord(str){
    let strArr = str.split(" ");
    let outputArr=[];
    strArr.map(val=>{
        let reverseStr = val.split("").reverse().join("")
        outputArr.push(reverseStr)
    })

    return outputArr.join(" ");
}