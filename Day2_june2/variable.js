//Redeclaration
var a1=10
var a1="hello"
console.log(a1);
//Reinitialization
var b1=10
b1="hello"
console.log(b1)
//Hoistiong
c1=20
var c1
console.log(c1)


//Let only hoisting is supported
//Redeclaration
let a2=10
let a2="bye"
console.log(a2);
//Reinitialization
let b2=10
b2="20"
console.log(b2)
//Hoistiong
c2="this"
let c2
console.log(c2)

//const only hoisting is supported
//Redeclaration
const a3=10
const a3="bye"
console.log(a3);
//Reinitialization
const b3=10
b3="20"
console.log(b3)
//Hoistiong
c3="this"
const c3
console.log(c3)



