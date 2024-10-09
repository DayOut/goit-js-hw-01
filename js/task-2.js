function getShippingMessage(country, price, deliveryFee) {
    // Check if country is a valid non-empty string
    if (typeof country !== 'string' || country.trim() === '') {
      return "Error: Invalid country. It must be a non-empty string.";
    }
  
    // Check if price is a valid positive number
    if (typeof price !== 'number' || isNaN(price) || price < 0) {
      return "Error: Price must be a non-negative number.";
    }
  
    // Check if deliveryFee is a valid positive number
    if (typeof deliveryFee !== 'number' || isNaN(deliveryFee) || deliveryFee < 0) {
      return "Error: Delivery fee must be a non-negative number.";
    }
  
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
  }
  
  // Test cases
  console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
  console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"