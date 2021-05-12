const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}

let x = 0
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

let revrs = ingredients.reverse();
let q = 0
while (q < revrs.length) {
  console.log(revrs[q])
  q++
}