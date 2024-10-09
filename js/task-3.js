function getElementWidth(content, padding, border) {
    // Helper function to extract numeric value from 'Npx' format and validate it
    function parsePx(value) {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || !value.endsWith('px')) {
        return null; // Return null if the value is invalid
      }
      return numericValue;
    }
  
    // Extract and validate numeric values
    const contentWidth = parsePx(content);
    const paddingWidth = parsePx(padding);
    const borderWidth = parsePx(border);
  
    // Check if any of the parsed values are null (invalid)
    if (contentWidth === null) {
      return `Error: Invalid content value: ${content}. Expected a value in 'Npx' format.`;
    }
    if (paddingWidth === null) {
      return `Error: Invalid padding value: ${padding}. Expected a value in 'Npx' format.`;
    }
    if (borderWidth === null) {
      return `Error: Invalid border value: ${border}. Expected a value in 'Npx' format.`;
    }
  
    // Calculate the total width according to border-box model
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  
    return totalWidth;
  }
  
  // Test cases
  console.log(getElementWidth("50px", "8px", "4px"));  // 74
  console.log(getElementWidth("60px", "12px", "8.5px"));  // 101
  console.log(getElementWidth("200px", "0px", "0px"));  // 200