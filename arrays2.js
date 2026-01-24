Arrays Deep Dive
let numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

// Add at end
numbers.push(6);
console.log("After push:", numbers);

// Remove first
numbers.shift();
console.log("After shift:", numbers);

// Map example
let squared = numbers.map(function(num) {
  return num * num;
});
console.log("Squared numbers:", squared);

// Filter example
let even = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", even);
