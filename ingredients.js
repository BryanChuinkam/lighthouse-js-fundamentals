const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0; 
while(i < ingredients.length){
  console.log(ingredients[i]);
  i += 1;
}

// Write a for loop that prints out the contents of ingredients:
for(let ingredient of ingredients){
  console.log(ingredient);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let j = ingredients.length; 
while(j >= 0){ 
  console.log(ingredients[j]); 
  j -= 1; 
}