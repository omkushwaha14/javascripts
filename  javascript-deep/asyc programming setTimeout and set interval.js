
var intervalid;
var a=0;
function sayhello(){
    a++
    if(a>=10) {
        clearInterval(intervalid)
    }
    console.log('heooloo')
}
intervalid=setInterval(sayhello,100)
sayhello()




















////////////////////////////////////////////////////////////

setTimeout(function(){
   console.log('you are timed out')

},4000)
