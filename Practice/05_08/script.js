/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

document.querySelector(".backpack__name").classList.add("shia");
document.querySelector(".backpack__name").classList.add("sunni");

document.querySelector(".backpack__name").classList.remove("sunni");

//-------

console.log(document.querySelector("#pack02 figure img").getAttribute("src"));
console.log(document.querySelector("#pack02 figure img").setAttribute("loading", "bruhh"));


console.log(document.querySelector("article").style);

document.querySelector("#pack01 h1").style.textAlign = "center"
document.querySelector("#pack02 h1").style.textAlign = "right";

