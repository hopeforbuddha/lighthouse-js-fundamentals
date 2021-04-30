const temperature = 400;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else if (temperature > 35) {
  console.log("Bring an pair of swim trunks, you could get heat stroke!")
}  else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");