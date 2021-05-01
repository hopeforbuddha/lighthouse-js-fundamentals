const whichSchool  = function (age) {

if (age >= 1 && age < 13) {
  return "Elemantary School";
} else if (age >=13 && age <= 18) {
  return "High School";
} else {
  return "Lighthouse Labs";
}
console.log(whichSchool(35));
}