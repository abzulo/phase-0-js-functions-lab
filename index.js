// 1. Calculate 10% tax of a given amount
function calculateTax(amount) {
  if (typeof amount !== 'number') return NaN; // Ensure input is a number
  return amount * 0.1;
}

// 2. Convert a string to uppercase
function convertToUpperCase(str) {
  return str.toUpperCase();
}

// 3. Find the maximum of two numbers
function findMaximum(a, b) {
  return a > b ? a : b;
}

// 4. Check if a string is a palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// 5. Calculate discounted price
function calculateDiscountedPrice(price, discountPercentage) {
  return price * (1 - discountPercentage / 100);
}

// Export functions for the tests
module.exports = { 
  calculateTax, 
  convertToUpperCase, 
  findMaximum, 
  isPalindrome, 
  calculateDiscountedPrice 
};
