  
// sort function
let scores = [40, 100, 1, 5, 25, 10]
scores.sort((a,b)=>(a-b))  
      //  a - b ka asaan matlab:
           // Ye computer ko batata hai ke "Bhai, dictionary mat dekho, Maths karo!"

// num.sort((a, b) => a - b);
console.log("sorted :",scores)
scores.reverse()
console.log("Reversed:",scores)

// splice function
let colors = ["Red", "Green", "Blue", "Yellow", "Pink"]
 let deletevaules=colors.splice(  1 ,3,"white","black")
console.log(colors)
console.log(deletevaules)
//  slice functions 
let animals = ["Tiger", "Lion", "Bear", "Elephant", "Zebra"]

let newnum =animals.slice(1,3)
console.log(animals)
console.log(newnum)

// practice function sort 
let ages = [40, 100, 1, 5]
ages.sort((a,b)=>(a-b))
console.log("sorted :",ages)
