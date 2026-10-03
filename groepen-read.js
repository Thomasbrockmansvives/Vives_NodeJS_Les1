// readline = node module

// IMPORTS
const readLine = require("readline/promises");
// hernoemingen
const { stdin: input, stdout: output } = require("node:process");

function isValidDate(inputtext){
   
}

function assignGroup(birthdate) {
  group = (birthdate % 7) + 1;
  return group;
}

console.log("Je bent toegewezen aan groep " + assignGroup(20201010));