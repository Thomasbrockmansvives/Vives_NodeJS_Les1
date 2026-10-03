const readLine = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");

function isValidNumber(response){
   const number = Number(response);
   if(response !== '' && Number.isInteger(number) && number > 19000000 && number < 30000000){
      return true;
   }
   else {
      return false;
   }
}

function getQuote(groupnumber){
   switch (groupnumber) {
     case 1:
       return "Lorem ipsum 1";
     case 2:
       return "Lorem ipsum 2";
     case 3:
       return "Lorem ipsum 3";
     case 4:
       return "Lorem ipsum 4";
     case 5:
       return "Lorem ipsum 5";
     case 6:
       return "Lorem ipsum 6";
     case 7:
       return "Lorem ipsum 7";
   }
}

function assignGroup(birthdate) {
  const group = (birthdate % 7) + 1;
  console.log("Je bent toegewezen aan groep " + group);
  console.log(getQuote(group));
}

async function askBirthdate(){
   const rl = readLine.createInterface({ input, output });

   try {

      const response = (
        await rl.question("Geef je geboortedatum in (JJJJMMDD): ")
      ).trim();

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



