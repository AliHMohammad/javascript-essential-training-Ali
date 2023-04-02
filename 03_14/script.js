/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const communistManifesto = new Book(
  "The Communist Manifesto",
  "Karl Marx & Frederich Engels",
  "1848",
  "Ali",
  false
)

console.log(communistManifesto);

const stateAndRevolution = new Book(
  "The State and Revolution",
  "Vladimir Lenin",
  "1918",
  "Ali",
  false
)

console.log(stateAndRevolution);

const antiDuhring = new Book(
  "Anti-Duhring",
  "Frederich Engels",
  "1878",
  "Ali",
  true
)

console.log(antiDuhring);

antiDuhring.newOwnership("Berfin")
