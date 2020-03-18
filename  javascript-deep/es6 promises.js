function fakedownload (correct){
   return new Promise (function(resolve,reject){
       setTimeout(function(){
           let downloaddata ="some data"
           console.info("the file is downloaded")

            if(correct){
                resolve(downloaddata)
            }
            else{
                reject(new Error("could not download"))
            }
        },1000)


    })
}
let downloaded = fakedownload(true);
downloaded.catch(function(err){
    console.log(err)
})
setTimeout(function () {
    downloaded.then(function (data) {
        console.info('the downloaded data is')
        console.info('data')

    })
},3000)



