import { chunkArr } from './js-workouts/chunk-array.js';
import { convertSingleArr } from './js-workouts/convert-single-array.js';
import { displayIndex } from './js-workouts/loopArray.js';
import { removeDuplicate } from './js-workouts/remove-duplicate.js';
import { reverseWord } from './js-workouts/reverse-string.js';
import { snakeCase } from './js-workouts/snake-case.js';
import { Day1 } from './scimba-workouts/day-1.js';

let singleArray = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let duplicateArray = [11, 12, 11, 14, 12, 16, 17, 15, 17];
let multipleArra = [11, 12, 13, 14, [15, [16, [17, [18, 19]]]]];
const string = "This is a sample keyword for test"
const singleWord = "Hello"
const str = "Welcome to the world of javascript"


console.log(convertSingleArr(multipleArra));
console.log(displayIndex(singleArray));
