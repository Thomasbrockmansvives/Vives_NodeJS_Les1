// readline = node module

// IMPORTS
const readLine = require("readline/promises");
// hernoemingen
const { stdin: input, stdout: output } = require("node:process");

function isValidNumber(response){
   const number = Number(response);
   if(response !== '' && Number.isInteger(number)){
      return number;
   }
   else {
      return 0;
   }
}

function assignGroup(birthdate) {
  const group = (birthdate % 7) + 1;
  console.log("Je bent toegewezen aan groep " + group);
}

async function askBirthdate(){
   
   const rl = readLine.createInterface({ input, output});
   const response = (await rl.question('Geef je geboortedatum in (JJJJMMDD): ')).trim();

   try {
      if(isValidNumber(response)){
         assignGroup(response);
      }
      else {
         console.log("Dat is geen geldige geboortedatum");
      }
   } finally {
      rl.close();
   }
}

askBirthdate();



