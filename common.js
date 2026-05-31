let drinks = ["Pepsi", "Water", "Coke"];
let pastry = ["Croissant", "Muffin", "Bagel"];

console.log("Number of drinks", drinks.length);
console.log("Number of pastries", pastry.length);

consloe.log("Drink 1", drink[0], "and", pastry[0]);
console.log("Drink 2", drink[1], "and", pastry[1]);
console.log("Drink 3", drinks[2],"and", pastry[2]);

let drinkIndex = 0;
let pastryIndex = 2;
console.assert("Combo Meal", drinks[drinkIndex], "and", pastry[pastryIndex])

console.log("All drinks");
for(let i = 0; i < drinks.length; i++){
    console.log(drinks[i]);
}

drinks.push("Milk");
pastry.push("Eclair");

console.log("All drinks", drinks.length);
console.log("All pastries", pastry.length);