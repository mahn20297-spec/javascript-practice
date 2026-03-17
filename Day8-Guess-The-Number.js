// --- Exercise 1: Guess the Number Game ---
// Goal: Generate a random number and let the user guess it.

// 1. Computer generates a random number between 1 and 100
let b = Math.floor(Math.random() * 100) + 1; 

let chances = 0; // To count how many attempts the user takes
let a; // To store user's guess

console.log("Game Started! Guess a number between 1 to 100.");

// 2. Loop runs until the user guesses the correct number
do {
    a = prompt("Enter your guess (1-100):");
    a = Number.parseInt(a); // Converting string input to a number
    chances++; // Incrementing chances on every guess

    if (a > b) {
        alert("Your guess is too high!  Try a smaller number.");
    } 
    else if (a < b) {
        alert("Your guess is too low! Try a bigger number.");
    } 
    else if (a == b) {
        // 3. Game Over Logic
        alert("CONGRATULATIONS!  \nYou guessed the correct number: " + b);
        alert("It took you " + chances + " attempts.");
        
        // Final Score: 100 minus the number of chances taken
        console.log("Your Final Score is: " + (100 - chances));
    }
    else {
        alert("Please enter a valid number!");
    }

} while (a != b); // Loop stops only when a equals b

// Pro Tip: Lower chances = Higher Score!

