function makeTransaction(quantity, pricePerDroid) {
    // Check if quantity is a positive integer
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return "Error: Quantity must be a positive integer.";
    }
  
    // Check if pricePerDroid is a positive number
    if (typeof pricePerDroid !== "number" || pricePerDroid <= 0) {
      return "Error: Price per droid must be a positive number.";
    }
  
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));