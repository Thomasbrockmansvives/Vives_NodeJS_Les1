const readLine = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");

function isValidNumber(response) {
  const number = Number(response);
  if (
    response !== "" &&
    Number.isInteger(number) &&
    number > 19000000 &&
    number < 30000000
  ) {
    return true;
  } else {
    return false;
  }
}

function assignGroup(birthdate) {
  const group = (birthdate % 7) + 1;
  console.log("Je bent toegewezen aan groep " + group);
}

async function askBirthdate() {
  const rl = readLine.createInterface({ input, output });

  try {
    const response = (
      await rl.question("Geef je geboortedatum in (JJJJMMDD): ")
    ).trim();

    if (isValidNumber(response)) {
      assignGroup(response);
    } else {
      console.log("Dat is geen geldige geboortedatum");
    }
  } finally {
    rl.close();
  }
}

askBirthdate();
