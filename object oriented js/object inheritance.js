let a={x:true,y:'hello',z:'many'}
let b=Object.create(a)                        ////inheritance/////////////
let c=Object.create(b)

console.log(a)
console.log(c.y)
console.log(c.z)
