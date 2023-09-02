const prompt = require('prompt-sync')();
var sentence = prompt("enter a sentence");
console.log("you have written " + sentence.length + "and you have " + 140-sentence.length + " characters left");

