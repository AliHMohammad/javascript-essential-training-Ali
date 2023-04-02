/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

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


// eslint-disable-next-line no-unused-vars
function outputHTML(obj) {
  const content = /*html*/ `
  <main>
        <article>
          <h1>${obj.name}</h1>
          <ul>
            <li>Volume: <span>${obj.volume}</span></li>
            <li>Color: <span>${obj.color}</span></li>
            <li>Age: <span>${obj.backpackAge()}</span></li>
            <li>Number of pockets: <span>${obj.pocketNum}</span></li>
            <li>Left strap length: <span>${obj.strapLength.left}</span></li>
            <li>Right strap length: <span>${obj.strapLength.right}</span></li>
            <li>Lid status: <span>${obj.lidOpen}</span></li>
          </ul>
        </article>
      </main>
  `;

  document.querySelector("body").insertAdjacentHTML("beforeend", content);
  /*
   name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
  */
}

outputHTML(everydayPack);
