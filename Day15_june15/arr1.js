let arr=[1,2,3,4,5]
let mul=arr.map(val=>val*3).filter(val=>val%2!=0).reduce((current,next)=>{return current*next})
console.log(mul)