/**
 * Challenge: Create an event listener
 * - Find the two elements with the .backpack__strap class.
 * - Create a function to output the strap length form.
 * - Iterate through each item with the .backpack__strap class.
 * - Capture the value of the data-side attribute to indicate the strap side.
 * - Create a form element.
 * - Populate the form with an input and a submit button.
 * - Add event listener to each of the strap length forms.
 * - Update strap length value with value submitted from form.
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
  console.log(event);
  console.log(newArg);

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === button.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  button.innerText == "Open lid"
    ? (button.innerText = "Close lid")
    : (button.innerText = "Open lid");

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
};

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
            <li class="packprop backpack__strap">Left strap length: <span class="backpack_strap_left_span">${
                backpack.strapLength.left
            } inches</span></li>
			<form>
				<input class="left_strap" type="number" step="1" placeholder="New left length">
				<button type="button" class="left_strap_button">Update</button> 
			</form>
            <li class="packprop backpack__strap">Right strap length: <span class="backpack_strap_right_span">${
                backpack.strapLength.right
            } inches</span></li>
			<form>
				<input class="right_strap" type="number" step="1" placeholder="New right length">
				<button type="button" class="right_strap_button">Update</button> 
			</form>
            <li class="feature backpack__lid">Lid status:<span>${backpack.lidOpen ? "open" : "closed"}</span></li>
        </ul>
        <button class="lid-toggle">${backpack.lidOpen ? "Close Lid" : "Open lid"}</button>
    </article>
  `;

   
	document.querySelector(".maincontent").insertAdjacentHTML("beforeend", output);
	
	let newArg = "The argument I want to pass to the callback function!";
    let button = document.querySelector("article:last-child .lid-toggle");
	button.addEventListener("click", (event) => { lidToggle(event, button, newArg) });
	
	document.querySelector("article:last-child .left_strap_button").addEventListener("click", updateLeftStrap);
	document.querySelector("article:last-child .right_strap_button").addEventListener("click", updateRightStrap);


	function updateLeftStrap() {
		let thisForm = this.parentElement;
		let thisArticle = thisForm.parentElement.querySelector(".backpack_strap_left_span");

		thisArticle.textContent = `${thisForm.querySelector(".left_strap").value} inches`;

	}

	function updateRightStrap() {
		let thisForm = this.parentElement;
        let thisArticle = thisForm.parentElement.querySelector(".backpack_strap_right_span");
        thisArticle.textContent = `${thisForm.querySelector(".right_strap").value} inches`;
	}
}





