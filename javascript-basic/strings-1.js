///strings//
let x=`om nath kushwaha`
let y=`my name is ${x} and u`;
console.log(y)

/////longstring//


let lst='i am fine and ow are man'  //// in same line
let lstr='i am fine and \ ' +     /// in same line//
    'ow are man'
let lstrs='i am fine and\n ow are man'     ///line break
console.log(lst)
console.log(lstr)
console.log(lstrs)


//searching//
let a='this is-very good mansss'
let b='ab bc de rt ab'
console.log(
  a.indexOf('is',6)                         ////-1 meanks key is contained//
)
console.log(
    b.lastIndexOf('ab')                         ////-1 means key is contained//
)