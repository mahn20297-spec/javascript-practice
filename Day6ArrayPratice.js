// map-filter-reduce-practice.js 
// filter method 
let marks = [45, 78, 92, 33, 55, 19, 88]
 let array = marks.filter((a,b) => {
      return a>50 ;
 })
 console.log(array)


//  map method 
  let marks1 = [45, 78, 92, 33, 55, 19, 88]
  let grade = marks1.map((vaule,index,array) => {
      console.log(vaule,index,array)
      return vaule +5 ;
  })
  console.log(grade)

//   reduce method 
let marks3 = [45, 78, 92, 33, 55, 19, 88]
 let z =marks3.reduce((h1,h2) => {
return h1 +h2 ;
})
console.log(z)



// Harry Practice problem Set  (Map, Filter, Reduce) 
// Filter method  Practice problem - 1

let nums = [10, 5, 20, 8, 30]
let n = nums.filter((a,b) => {
      return a>10;
})
console.log(n)
// Map method //  Practice problem - 2

let num = [10, 5, 20, 8, 30]
let i = num.map((x) => {
      return x*2;
})
console.log(i)
// filter method  Practice problem - 3
let grades = [2.0, 3.5, 1.5, 4.0, 1.8]
let a = grades.filter((x) => {
      return x<2;
})
console.log(a)



