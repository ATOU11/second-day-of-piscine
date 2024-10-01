function getBasketContent() {
    // List of remaining fruits with their quantities
    const fruits = [
        { name: 'strawberry', quantity: 3 },
        { name: 'apple', quantity: 2 },
        { name: 'lime', quantity: 2 },
        { name: 'peach', quantity: 1 },
        { name: 'pear', quantity: 2 }
    ];

    // Create an array of fruits in lowercase based on their quantity
    let fruitList = [];
    fruits.forEach(fruit => {
        for (let i = 0; i < fruit.quantity; i++) {
            fruitList.push(fruit.name.toLowerCase());
        }
    });

    // Display the total count in the console
    console.log(`${fruitList.length} fruit(s) selected`);

    // Return the list of fruits
    return fruitList;
}

// Test the function
getBasketContent();
