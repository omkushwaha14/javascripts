

////////// call by value/////

var b=['om','ram','shyam']

function change(it){
    it= 'amrit';
}
change(b)
console.log(b)
 console.log(b) ///////////////////////output====[ 'om', 'ram', 'shyam' ]
  /////////////////////////////////////////////   [ 'om', 'ram', 'shyam' ]

//// in call by value doesnot changes    although we have function changing//
/////////////


///////////////////////by reference//////////
var fwinner=['aman','amar','mukesh']

function changewinner(my){
    my[0]='om'  ;
    my[1]='ram';
}
changewinner(fwinner)
console.log('the winner is' + fwinner)
console.log(fwinner)
//// in call by reference value changes if functon is changing///
