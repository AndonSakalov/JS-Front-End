function solve(currentStock, orderedProducts) {
    let currentStockDict = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        currentStockDict[currentStock[i]] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let currentProduct = orderedProducts[i];
        let currentQuantity = orderedProducts[i + 1];
        if (currentStockDict[currentProduct]) {
            currentStockDict[currentProduct] += Number(currentQuantity);
        }else{
            currentStockDict[currentProduct] = Number(currentQuantity);
        }
    }

    for (const key in currentStockDict) {
        console.log(`${key} -> ${currentStockDict[key]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );