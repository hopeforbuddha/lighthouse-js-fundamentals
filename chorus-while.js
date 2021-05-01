const chorus = 'lets dance';

let repeat = 0;

while (repeat < 10) { // while repeat is less than 10 run the code in the curly braces
  if (repeat === 5) { // this lets the artist now to change key on the 5th chorus repeat
    console.log('change key')
  }
  console.log(chorus);
  repeat++;
}
console.log("until the sun comes up")