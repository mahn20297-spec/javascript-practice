// This file contains my practice code for Strings, Loops, and Basic Logic
// Based on Harry's JS Course - Video 1 to 14
// practice string and loops
// programme 1  (slice)
let email ="user123@gmail.com"
console.log(email.slice(0,7))

// programme 2   (includes  & if/ else)
let msg = "hello , how are you?"
if (msg.includes("how")){
    console.log("word found")
}
else{
    console.log("not found")
}
// programme 3 (length & loop)

let myname = "maria"
for ( let i=0; i<myname.length ; i++){
console.log(myname[i].toLocaleLowerCase())
}

// programme 4  (replace)
let text = " i love python"
console.log(text.replace ("python","javascript"))
