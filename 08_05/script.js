/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;
"use strict"

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  //method
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    //Function inde i method. Skal laves som annonymous arrow function.
    (() => {
      console.log("this.volume in nested function:", this.volume);
    })();
  },
};
greenPack.newVolume(5);
//this.volume in the method: 8
//this.volume after update: 5
//this.volume in nested function: 5

