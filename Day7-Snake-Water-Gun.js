 // --- Exercise 2: Snake Water Gun Game (Fixed) ---

let user = prompt("Enter S, W, or G (Snake, Water, Gun)").toUpperCase(); 

// Computer ki choice lene ka sahi tareeka:
let opt = ["S", "W", "G"];
let cpu = opt[Math.floor(Math.random() * 3)]; 

// Game Logic
if (cpu === user) {
    alert("Match is Drawn!  CPU also chose " + cpu);
} 
// Saari winning conditions ek saath:
else if ((user === "S" && cpu === "W") || (user === "W" && cpu === "G") || (user === "G" && cpu === "S")) {
    alert("YOU WIN!  CPU chose " + cpu);
} 
else {
    alert("YOU LOSS!  CPU chose " + cpu);
}

// User se dubara puchna
let playAgain = confirm("Do you want to play again?");
if (playAgain) {
    location.reload(); // Page refresh
} else {
    document.write("Thanks for playing! Your last choice was: " + user);
}
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
