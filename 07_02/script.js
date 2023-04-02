/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);

collection[2] = "Camera"

console.log(collection[1]);
console.log(collection[2]);
collection[collection.length] = "new item";
collection[9] = "At the end 9"