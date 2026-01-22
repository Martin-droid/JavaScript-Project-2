// =============================================
// STRING MANIPULATION FUNCTIONS
// =============================================

/**
 * Reverses a given string
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Counts the number of characters in a string
 * @param {string} str - The string to count
 * @returns {number} - The number of characters
 */
function countCharacters(str) {
    return str.length;
}

/**
 * Capitalizes the first letter of each word in a sentence
 * @param {string} sentence - The sentence to capitalize
 * @returns {string} - The sentence with capitalized words
 */
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


// =============================================
// ARRAY FUNCTIONS
// =============================================

/**
 * Finds the maximum value in an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number} - The maximum value
 */
function findMaximum(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

/**
 * Finds the minimum value in an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number} - The minimum value
 */
function findMinimum(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

/**
 * Calculates the sum of all elements in an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} - The sum of all elements
 */
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

/**
 * Filters elements from an array based on a condition
 * @param {Array} arr - The array to filter
 * @param {Function} condition - The condition function
 * @returns {Array} - The filtered array
 */
function filterArray(arr, condition) {
    return arr.filter(condition);
}


// =============================================
// MATHEMATICAL FUNCTIONS
// =============================================

/**
 * Calculates the factorial of a given number
 * @param {number} n - The number to calculate factorial for
 * @returns {number} - The factorial result
 */
function factorial(n) {
    if (n < 0) return undefined; // Factorial doesn't exist for negative numbers
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Checks if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} - True if prime, false otherwise
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    // Only need to check up to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * Generates the Fibonacci sequence up to n terms
 * @param {number} n - Number of terms to generate
 * @returns {number[]} - Array containing the Fibonacci sequence
 */
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


// =============================================
// TEST EXAMPLES
// =============================================

console.log("=== STRING MANIPULATION TESTS ===");
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Count characters in 'JavaScript':", countCharacters("JavaScript"));
console.log("Capitalize 'hello world from javascript':", capitalizeWords("hello world from javascript"));

console.log("\n=== ARRAY FUNCTION TESTS ===");
const numbers = [3, 7, 1, 9, 4, 2, 8];
console.log("Array:", numbers);
console.log("Maximum:", findMaximum(numbers));
console.log("Minimum:", findMinimum(numbers));
console.log("Sum:", sumArray(numbers));
console.log("Filter even numbers:", filterArray(numbers, num => num % 2 === 0));
console.log("Filter numbers > 5:", filterArray(numbers, num => num > 5));

console.log("\n=== MATHEMATICAL FUNCTION TESTS ===");
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));
console.log("Is 17 prime?:", isPrime(17));
console.log("Is 20 prime?:", isPrime(20));
console.log("Fibonacci sequence (10 terms):", fibonacci(10));
console.log("Fibonacci sequence (15 terms):", fibonacci(15));