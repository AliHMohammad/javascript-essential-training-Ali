/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Vitamins from "./Vitamins.js";

const multiVit = new Vitamins(
    "Multi-Vit",
    "Vegetology",
    60,
    60,
    "07/2024",
    false
);

console.log(multiVit);
console.log(multiVit.name);

console.log(multiVit.lidOpen);
multiVit.changeLid(true);
console.log(multiVit.lidOpen);

//------------------

const omega3 = new Vitamins(
    "Omega-3 EPA & DHA",
    "Vegetology",
    60,
    30,
    "10/2024",
    false
);




//-----------------

const b12 = new Vitamins(
    "Vegansk B12",
    "Dansk Farmaceutisk Industri a-s",
    90,
    90,
    "11/2025",
    false
)

console.log(b12.name);
b12.newName("Salami B12");
console.log(b12.name);
