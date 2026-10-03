function assignGroup(birthdate) {
  group = (birthdate % 7) + 1;
  return group;
}

console.log("Je bent toegewezen aan groep " + assignGroup(20201010));
