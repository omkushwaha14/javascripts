//array data changing//
let notes=['sa','re','ga','ma','pa','da','ni']
 //slice//
console.log(notes.slice(2,4))


//splice//

let omit=notes.splice(2,4)   ///////////// delets element from 2 to 4 position
console.log(omit)
console.log(notes)

///splice part -2//
notes.splice(0,3,'ma','ha')
console.log(notes )

//concat//

console.log(notes.concat(['he','ma' ,'re']))   ///////////adds element at last//



