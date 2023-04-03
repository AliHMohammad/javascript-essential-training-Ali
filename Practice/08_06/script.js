/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function addHelloClass(element) {
    document.querySelector(`${element}`).classList.add("hello");
}

// addHelloClass("body")

const addShiaClass = function (element) {
    document.querySelector(`${element}`).classList.add("shia");
};

const addHello = (element) => {
	document.querySelector(`${element}`).classList.add("shia");
}