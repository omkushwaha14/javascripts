

var a=10;
a++;
//console.log(a);


////let//
let b=100;
b++;
//console.log(b);


/// using const////
const c=110;
c++;
console.log(c);    ////error/// const cannot be used to assign variable//////////error codes


////////////////////////////////////////////////////////////////////////////////////////////





const obj= {
    k1:'asd',
    k2:10,
    k3:false

}
delete obj.k1
//console.log(obj)

const a=[1,2,3,4,5]
a.push(true)
console.log(a)

/////////////////////////////////////////////////////////////////



var myvar=10;
function alpha(){
    var myvar=10;
    if(true){
        var myvar=21;
        console.log(myvar)
    }
    console.log(myvar)         //////////output//////21//21//
}
alpha();



///////////////////////////////////////////////let///////////////
let myvar=10;
function alpha(){
    let myvar=10;
    if(true){
        let myvar=21;
        console.log(myvar)  /////////////////its prints inner value //then outer/// then outer////
    }
    console.log(myvar)
    console.log(myvar)

}
alpha();










///////////////////////const///also   works in same way as let works does//







