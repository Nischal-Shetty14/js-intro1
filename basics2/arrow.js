const age=birthyear=>2025-birthyear;
age(2005);
/*function calcAge3(birthYeah) {
  return 2037 - birthYeah;
}
*/

//if { } is used have to write return
const yearsUntilRetirement = birthYeah => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return retirement;
};

//arrow function with multiple parameters
const yearsUntilRetirement1 = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(age(25))
console.log(yearsUntilRetirement(1991));
console.log(yearsUntilRetirement1(1991, "Jonas"));