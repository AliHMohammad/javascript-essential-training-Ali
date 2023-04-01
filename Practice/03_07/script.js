/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const jug = {
    material: "Plastic",
    brand: "MYPROTEIN",
    isEmpty: false,
    liquid: {
        type: "Water",
        daysOld: 1
    },
};


console.log(jug);
console.log(jug.material);
console.log(jug.liquid.type);