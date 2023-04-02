/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let arr = ["Rubberduck", "Monitor", "Vitamins", "Waterjug"];
console.log(arr);

const lastItem = arr.pop();


arr.unshift(lastItem);
console.log(arr);

arr = arr.sort(function (a, b) {
    return a.localeCompare(b);
})

console.log(arr);



let item = arr.find(function (item) {
  if (item == "Rubberduck") {
    return item;
  }
});

console.log(item);

arr.splice(arr.indexOf(item), 1);

console.log(arr);