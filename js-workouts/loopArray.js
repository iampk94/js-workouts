// Write a function that will loop through a list of integers and
// print the index of each element after a 3 second delay.

export function displayIndex(arr) {
    var i = 0;
    var current;
    let run = setInterval(function () {
        if (i < arr.length) {
            console.log(arr[i]);
            i += 1;
        } else {
            clearInterval(run);
        }
    }, 3000);
}