/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */




const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

// .map der laver et li element og tilføjer item i li elementet og returnerer det
// i vores nye "stuffItems" array
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem
});

//Vi kan derefter loope gennem det nye array og placer hvert item i en ul i DOM 
for (const stuffItem of stuffItems) {
  document.querySelector("ul").insertAdjacentElement("beforeend", stuffItem);
}

console.log(stuff);
console.log(stuffItems);
