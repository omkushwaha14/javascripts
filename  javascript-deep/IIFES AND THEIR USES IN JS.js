function domath(){
    console.log('3^4==' + Math.pow(3,4))
   console.log('square root== ' + Math.sqrt(16))
}
domath();


////////// using iifes////////////
(function (l,p,s) {
 l(p(3,4))
 l(s('100'))

})
(console.log,Math.pow,Math.sqrt);


//////////using set time out function/////////
for( var i=0; i<10; i++)
{
    setTimeout(function (){
        console.log(i);
        },100 ///////////////////prints 10 into 10 times//////////



    )
}

////////////////////////////using let/////////////////////
for( let i=0; i<10; i++)
{
    setTimeout(function (){
            console.log(i);
        },100



    ) /////////////////prints from 1 to 10///////////
}