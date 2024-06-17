function solve(fruitType, weightInGrams, pricePerKg){
    let cost = pricePerKg * (weightInGrams / 1000);
    console.log(`I need $${cost.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruitType}.`);
}