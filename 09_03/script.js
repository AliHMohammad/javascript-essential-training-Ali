/**
 * Event listeners
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */


import backpackObjectArray from "./components/data.js";

for (const backpack of backpackObjectArray) {
    createHTML(backpack);
}

function createHTML(backpack) {
    //laver html for hvert objekt i array
    const output = /*html*/ `
    <article class="backpack" id=${backpack.id}>
        <figure class="backpack__image">
            <img src=${backpack.image} alt="" />
        </figure>
        <h1 class="backpack__name">${backpack.name}</h1>
        <ul class="backpack__features">
            <li class="packprop backpack__volume">Volume:<span> ${backpack.volume}l</span></li>
            <li class="packprop backpack__color">Color:<span> ${backpack.color}</span></li>
            <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
            <li class="packprop backpack__pockets">Number of pockets:<span> ${backpack.pocketNum}</span></li>
            <li class="packprop backpack__strap">Left strap length:<span> ${backpack.strapLength.left} inches</span></li>
            <li class="packprop backpack__strap">Right strap length:<span> ${backpack.strapLength.right} inches</span></li>
            <li class="feature backpack__lid">Lid status:<span>${backpack.lidOpen ? "open" : "closed"}</span></li>
        </ul>
        <button class="lid-toggle">${backpack.lidOpen ? "Close Lid" : "Open lid"}</button>
    </article>
  `;

    //insert html i .maincontent
    document.querySelector(".maincontent").insertAdjacentHTML("beforeend", output);

    //addeventlistener til button
    document.querySelector("article:last-child > button").addEventListener("click", changeStatus);

    //this er knappen. Vi finder buttons parent (article) ved at bruge nedenstående og derefter lede efter class ".backpack__lid span" med querySelector
    //Det gemmmer vi i en variabel. variablens textContent skal vi netop ændre på.
    function changeStatus() {
        let status = this.parentElement.querySelector(".backpack__lid span");

        if (status.textContent == "open") {
            this.textContent = "Open lid";
            status.textContent = "closed";
        } else if (status.textContent == "closed") {
            status.textContent = "open";
            this.textContent = "Close lid";
        }
    }
}



